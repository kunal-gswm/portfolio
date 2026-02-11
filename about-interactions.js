// ===================================
// About Section - Interactive Effects
// ===================================

if (!isMobile && !prefersReducedMotion) {
    const aboutSection = document.querySelector('.about-section');
    const aboutBackground = document.querySelector('.about-background');
    const aboutText = document.querySelector('.about-text');
    const keywords = document.querySelectorAll('.keyword');
    const skillCards = document.querySelectorAll('.skill-card');

    // ===================================
    // Mouse-Reactive Background Gradient
    // ===================================
    let aboutMouseX = 50;
    let aboutMouseY = 50;
    let aboutCurrentX = 50;
    let aboutCurrentY = 50;
    let aboutRafId = null;

    if (aboutSection && aboutBackground) {
        aboutSection.addEventListener('mousemove', (e) => {
            const rect = aboutSection.getBoundingClientRect();
            aboutMouseX = ((e.clientX - rect.left) / rect.width) * 100;
            aboutMouseY = ((e.clientY - rect.top) / rect.height) * 100;
        });

        function animateAboutBackground() {
            // Smooth interpolation
            aboutCurrentX += (aboutMouseX - aboutCurrentX) * 0.05;
            aboutCurrentY += (aboutMouseY - aboutCurrentY) * 0.05;

            aboutBackground.style.setProperty('--mouse-x', `${aboutCurrentX}%`);
            aboutBackground.style.setProperty('--mouse-y', `${aboutCurrentY}%`);

            aboutRafId = requestAnimationFrame(animateAboutBackground);
        }

        animateAboutBackground();

        // Cleanup on visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && aboutRafId) {
                cancelAnimationFrame(aboutRafId);
            } else if (!document.hidden && aboutSection) {
                animateAboutBackground();
            }
        });
    }

    // ===================================
    // Text Fade-Up Animation on Scroll
    // ===================================
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger text animation
                if (aboutText) {
                    setTimeout(() => {
                        aboutText.classList.add('visible');
                    }, 200);
                }

                // Staggered card animation
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 400 + (index * 150));
                });

                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }

    // ===================================
    // 3D Tilt Effect on Skill Cards
    // ===================================
    skillCards.forEach(card => {
        let cardMouseX = 0;
        let cardMouseY = 0;
        let cardCurrentX = 0;
        let cardCurrentY = 0;
        let isCardHovering = false;
        let cardRafId = null;

        card.addEventListener('mouseenter', () => {
            isCardHovering = true;
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            cardMouseX = (x / rect.width - 0.5) * 2; // -1 to 1
            cardMouseY = (y / rect.height - 0.5) * 2; // -1 to 1
        });

        card.addEventListener('mouseleave', () => {
            isCardHovering = false;
            cardMouseX = 0;
            cardMouseY = 0;

            // Smooth return to neutral
            const resetAnimation = () => {
                cardCurrentX += (0 - cardCurrentX) * 0.15;
                cardCurrentY += (0 - cardCurrentY) * 0.15;

                const rotateY = cardCurrentX * 10;
                const rotateX = -cardCurrentY * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                if (Math.abs(cardCurrentX) > 0.01 || Math.abs(cardCurrentY) > 0.01) {
                    requestAnimationFrame(resetAnimation);
                } else {
                    card.style.transform = '';
                }
            };

            resetAnimation();
        });

        function animateCardTilt() {
            if (!isCardHovering) return;

            // Smooth interpolation
            cardCurrentX += (cardMouseX - cardCurrentX) * 0.15;
            cardCurrentY += (cardMouseY - cardCurrentY) * 0.15;

            const rotateY = cardCurrentX * 10; // Max 10deg rotation
            const rotateX = -cardCurrentY * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            cardRafId = requestAnimationFrame(animateCardTilt);
        }

        card.addEventListener('mouseenter', () => {
            animateCardTilt();
        });
    });

    // ===================================
    // Particle Burst on First Hover
    // ===================================
    skillCards.forEach(card => {
        const particleContainer = card.querySelector('.particle-container');
        let hasHovered = card.getAttribute('data-hovered') === 'true';

        card.addEventListener('mouseenter', () => {
            if (!hasHovered && particleContainer) {
                hasHovered = true;
                card.setAttribute('data-hovered', 'true');

                // Create 8 particles
                const particleCount = 8;
                const rect = card.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';

                    const angle = (i / particleCount) * Math.PI * 2;
                    const distance = 60;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;

                    particle.style.left = centerX + 'px';
                    particle.style.top = centerY + 'px';
                    particle.style.setProperty('--tx', `${tx}px`);
                    particle.style.setProperty('--ty', `${ty}px`);

                    particleContainer.appendChild(particle);

                    // Remove particle after animation
                    setTimeout(() => {
                        particle.remove();
                    }, 800);
                }
            }
        });
    });

    // ===================================
    // Custom Cursor for About Section
    // ===================================
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (aboutSection && cursor) {
        aboutSection.addEventListener('mouseenter', () => {
            cursorDot.style.width = '12px';
            cursorDot.style.height = '12px';
            cursorDot.style.background = 'rgba(99, 102, 241, 0.8)';
            cursorDot.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.6)';
            cursorOutline.style.borderColor = 'rgba(99, 102, 241, 0.6)';
        });

        aboutSection.addEventListener('mouseleave', () => {
            cursorDot.style.width = '';
            cursorDot.style.height = '';
            cursorDot.style.background = '';
            cursorDot.style.boxShadow = '';
            cursorOutline.style.borderColor = '';
        });
    }

    // ===================================
    // Magnetic Cursor Effect on Cards
    // ===================================
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;

            const deltaX = e.clientX - cardCenterX;
            const deltaY = e.clientY - cardCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Apply magnetic attraction (subtle)
            if (distance < 150) {
                const strength = 0.15;
                const attractX = deltaX * strength;
                const attractY = deltaY * strength;

                // This would need to be applied to the cursor position
                // For now, we'll just enhance the existing cursor behavior
            }
        });
    });

    // ===================================
    // Update Cursor Interactivity
    // ===================================
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, input, textarea');

    interactiveElements.forEach(el => {
        if (!el.classList.contains('skill-card')) return; // Already handled above

        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('cursor-hover');
        });

        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('cursor-hover');
        });
    });
}

// ===================================
// Reduced Motion Support
// ===================================
if (prefersReducedMotion) {
    const aboutText = document.querySelector('.about-text');
    const skillCards = document.querySelectorAll('.skill-card');

    if (aboutText) {
        aboutText.classList.add('visible');
        aboutText.style.opacity = '1';
        aboutText.style.transform = 'none';
    }

    skillCards.forEach(card => {
        card.classList.add('visible');
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.style.animation = 'none';
    });
}
