/**
 * TO STUDIO - STACKED CARD SHUFFLE ENGINE
 * Snap/Spring-like transition interaction for high-end photography portfolio deck preview
 */

document.addEventListener("DOMContentLoaded", () => {
    const deck = document.getElementById("shuffle-deck");
    if (!deck) return;

    let isShuffling = false;

    // Attach click event to the deck wrapper, triggering only for the top card
    deck.addEventListener("click", () => {
        if (isShuffling) return;
        
        // Get all cards currently inside the deck
        const cards = Array.from(deck.children);
        if (cards.length === 0) return;

        // The top card is always the first child in HTML order
        const topCard = cards[0];
        
        isShuffling = true;

        // 1. FLY OUT: Slide the top card horizontally outwards to the left with custom tilt
        const isMobile = window.innerWidth < 768;
        const flyX = isMobile ? "-250px" : "-420px";
        
        topCard.style.transition = "transform 250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 250ms ease";
        topCard.style.transform = `translate(${flyX}, -20px) scale(1.02) rotate(-12deg)`;
        topCard.style.opacity = "0.85";
        topCard.style.zIndex = "40"; // guarantee it flies on top

        // 2. REPOSITION: After peak slide distance (250ms), put it to the back and slide in
        setTimeout(() => {
            // Append top card to the back of the parent deck container
            deck.appendChild(topCard);

            // Re-read updated children array
            const reorderedCards = Array.from(deck.children);

            // Re-apply correct index classes with updated depths/offsets
            reorderedCards.forEach((card, idx) => {
                // Clear any inline overrides
                card.removeAttribute("style");
                
                // Clear all level classes
                card.classList.remove(
                    "shadow-card-level-1", 
                    "shadow-card-level-2", 
                    "shadow-card-level-3", 
                    "shadow-card-level-4"
                );

                // Map styling according to relative position in stack
                card.classList.add(`shadow-card-level-${idx + 1}`);
                card.style.zIndex = (reorderedCards.length - idx).toString();
                card.style.pointerEvents = idx === 0 ? "auto" : "none";
            });

            // Brief delay to unlock next shuffle
            setTimeout(() => {
                isShuffling = false;
            }, 100);

        }, 250);
    });

    // Initial setup to ensure only the top card catches initial click triggers
    const initialCards = Array.from(deck.children);
    initialCards.forEach((card, idx) => {
        card.style.zIndex = (initialCards.length - idx).toString();
        card.style.pointerEvents = idx === 0 ? "auto" : "none";
    });

    // --- ScrollSpy & Navigation Active State for Static HTML ---
    const navLinks = document.querySelectorAll("#header-nav .nav-link");
    const sections = document.querySelectorAll("section, footer[id]");

    function updateActiveNav() {
        let currentSectionId = "section-hero";
        
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Highlight a section if it takes up the majority of the view or starts near top
            if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.15) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // If at the bottom of the page, force "contact" section to be active
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
            currentSectionId = "section-contact";
        }

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentSectionId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Toggle logo visibility dynamically based on current section (hidden on Hero/Home page)
        const headerLogo = document.getElementById("header-logo");
        if (headerLogo) {
            if (currentSectionId === "section-hero") {
                headerLogo.style.opacity = "0";
                headerLogo.style.pointerEvents = "none";
                headerLogo.style.transform = "scale(0.95)";
                headerLogo.style.visibility = "hidden";
            } else {
                headerLogo.style.opacity = "1";
                headerLogo.style.pointerEvents = "auto";
                headerLogo.style.transform = "scale(1)";
                headerLogo.style.visibility = "visible";
            }
        }
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav(); // run once initially
});
