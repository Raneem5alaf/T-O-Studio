import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Automatically copy root-level uploads to public directory so Vite can serve them
try {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Debug root directory listing
  try {
    if (fs.existsSync('/')) {
      const rootEntries = fs.readdirSync('/');
      const rootFiles = rootEntries.filter(entry => {
        try {
          return fs.statSync(path.join('/', entry)).isFile();
        } catch (_) {
          return false;
        }
      });
      console.log('[Vite Setup] Root files in /:', rootFiles);
      fs.writeFileSync(path.join(__dirname, 'src/root_files_debug.txt'), rootFiles.join('\n'));
    }
  } catch (debugErr) {
    console.warn('[Vite Setup] Failed to debug write root files:', debugErr);
  }

  // Recursive search up to 3 levels deep starting from target directories
  const scanDirectories = [
    '/workspace',
    path.resolve(__dirname, '..'),
    '/'
  ];

  console.log('[Vite Setup] Starting files scanning...');
  const visited = new Set<string>();

  const scanAndCopy = (dir: string, depth = 0) => {
    if (depth > 2 || !fs.existsSync(dir) || visited.has(dir)) return;
    visited.add(dir);

    try {
      const files = fs.readdirSync(dir);
      files.forEach((file) => {
        const fullPath = path.join(dir, file);
        try {
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            // Avoid scanning node_modules, .git, dist, etc.
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'public' && file !== 'src') {
              scanAndCopy(fullPath, depth + 1);
            }
          } else if (stat.isFile()) {
            const lowerFile = file.toLowerCase();
            const isImage = lowerFile.endsWith('.png') || lowerFile.endsWith('.jpg') || lowerFile.endsWith('.jpeg') || lowerFile.endsWith('.svg');
            const isInputOrLogo = file.startsWith('input_file') || lowerFile.includes('logo');
            
            if (isImage || isInputOrLogo) {
              console.log(`[Vite Setup] Found asset file: ${fullPath} (Size: ${stat.size} bytes)`);
              
              // Copy if it looks like logo or input_file
              if (isInputOrLogo || file.includes('shutter') || file.includes('to_studio')) {
                const destPath = path.join(publicDir, file);
                fs.copyFileSync(fullPath, destPath);
                console.log(`[Vite Setup] Copied ${file} to public/`);
              }
            }
          }
        } catch (fileErr) {
          // ignore individual file reading errors
        }
      });
    } catch (dirErr) {
      // ignore individual dir listing errors
    }
  };

  scanDirectories.forEach((dir) => {
    if (fs.existsSync(dir)) {
      console.log(`[Vite Setup] Scanning directory: ${dir}`);
      scanAndCopy(dir);
    }
  });

} catch (err) {
  console.error('[Vite Setup] Error during asset copying setup:', err);
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    assetsInclude: ['**/*.heic'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
