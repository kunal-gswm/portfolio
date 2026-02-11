// ===================================
// Performance & Device Detection
// ===================================

const isLowEndDevice = () => {
    return navigator.hardwareConcurrency <= 2 ||
        navigator.deviceMemory <= 2 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===================================
// Custom Cursor System
// ===================================

if (!isMobile && !prefersReducedMotion) {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const cursorText = document.querySelector('.cursor-text');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth interpolation (lerp)
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor hover states
    const interactiveElements = document.querySelectorAll('a, button, .project-card, input, textarea');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');

            // Show "View" text on project cards
            if (el.classList.contains('project-card')) {
                cursorText.textContent = 'View';
                cursorText.style.opacity = '1';
            }
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorText.style.opacity = '0';
        });

        el.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-active');
        });

        el.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-active');
        });
    });
}

// ===================================
// Staggered Letter Reveal Animation
// ===================================

function initLetterReveal() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.getAttribute('data-text');
    const letterContainer = heroTitle.querySelector('.letter-reveal');

    if (!text || !letterContainer) return;

    // Split text into letters
    const letters = text.split('');
    letterContainer.innerHTML = '';

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.animationDelay = `${index * 0.05}s`;
        letterContainer.appendChild(span);
    });
}

// Initialize on load
window.addEventListener('load', initLetterReveal);

// ===================================
// CTA Button Ripple Effect
// ===================================

const ctaButtons = document.querySelectorAll('.cta-button, .submit-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = this.querySelector('.button-ripple') || document.createElement('span');

        if (!this.querySelector('.button-ripple')) {
            ripple.className = 'button-ripple';
            this.appendChild(ripple);
        }

        ripple.style.width = '0';
        ripple.style.height = '0';

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';

        setTimeout(() => {
            ripple.style.width = '0';
            ripple.style.height = '0';
        }, 600);
    });
});

// ===================================
// 3D Tilt Effect on Project Cards
// ===================================

if (!isMobile && !isLowEndDevice() && !prefersReducedMotion) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

            // Update light reflection position
            const mouseXPercent = (x / rect.width) * 100;
            const mouseYPercent = (y / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
            card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===================================
// Intersection Observer for Scroll Animations
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

// Fade-in sections observer
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setTimeout(() => {
                entry.target.style.willChange = 'auto';
            }, 600);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    sectionObserver.observe(section);
});

// ===================================
// Stagger Animation for Project Cards
// ===================================

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.stagger-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                    setTimeout(() => {
                        item.style.willChange = 'auto';
                    }, 500);
                }, index * 100);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const projectsSection = document.querySelector('.projects-section');
if (projectsSection) {
    staggerObserver.observe(projectsSection);
}

// ===================================
// Hero Parallax Effect (Enhanced)
// ===================================

if (!prefersReducedMotion && !isLowEndDevice()) {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroBackground = document.querySelector('.hero-background');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
        mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    });

    function animateParallax() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        // Very subtle parallax
        const moveX = currentX * 15;
        const moveY = currentY * 15;

        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Background moves slower for depth
        const bgMoveX = currentX * 8;
        const bgMoveY = currentY * 8;
        heroBackground.style.transform = `translate(${bgMoveX}px, ${bgMoveY}px) scale(1.1)`;

        rafId = requestAnimationFrame(animateParallax);
    }

    animateParallax();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && rafId) {
            cancelAnimationFrame(rafId);
        } else if (!document.hidden) {
            animateParallax();
        }
    });
}

// ===================================
// Magnetic Button Effect (Enhanced)
// ===================================

if (!prefersReducedMotion && !isLowEndDevice() && !isMobile) {
    const magneticButtons = document.querySelectorAll('.magnetic-button');

    magneticButtons.forEach(button => {
        let buttonX = 0;
        let buttonY = 0;
        let buttonCurrentX = 0;
        let buttonCurrentY = 0;
        let isHovering = false;
        let rafId = null;

        button.addEventListener('mouseenter', () => {
            isHovering = true;
            button.style.transition = 'box-shadow 0.2s, border-color 0.2s';
        });

        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            buttonX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            buttonY = (e.clientY - rect.top - rect.height / 2) / rect.height;
        });

        button.addEventListener('mouseleave', () => {
            isHovering = false;
            button.style.transition = 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)';
            button.style.transform = 'translate(0, 0)';
            buttonX = 0;
            buttonY = 0;
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        });

        function animateMagneticButton() {
            if (!isHovering) return;

            buttonCurrentX += (buttonX - buttonCurrentX) * 0.2;
            buttonCurrentY += (buttonY - buttonCurrentY) * 0.2;

            const moveX = buttonCurrentX * 10;
            const moveY = buttonCurrentY * 10;

            button.style.transform = `translate(${moveX}px, ${moveY}px)`;

            rafId = requestAnimationFrame(animateMagneticButton);
        }

        button.addEventListener('mouseenter', () => {
            animateMagneticButton();
        });
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Form Submission Handler
// ===================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.querySelector('span').textContent;
        const formData = new FormData(contactForm);

        submitButton.querySelector('span').textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Submit to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                submitButton.querySelector('span').textContent = 'Message Sent!';
                contactForm.reset();

                setTimeout(() => {
                    submitButton.querySelector('span').textContent = originalText;
                    submitButton.disabled = false;
                }, 3000);
            } else {
                // Error from Formspree
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Network error or other issues
            submitButton.querySelector('span').textContent = 'Failed. Try Again';
            console.error('Form submission error:', error);

            setTimeout(() => {
                submitButton.querySelector('span').textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

// ===================================
// Pause Animations When Tab is Inactive
// ===================================

document.addEventListener('visibilitychange', () => {
    const shapes = document.querySelectorAll('.shape');
    const heroBackground = document.querySelector('.hero-background');

    if (document.hidden) {
        shapes.forEach(shape => {
            shape.style.animationPlayState = 'paused';
        });
        if (heroBackground) {
            heroBackground.style.animationPlayState = 'paused';
        }
    } else {
        shapes.forEach(shape => {
            shape.style.animationPlayState = 'running';
        });
        if (heroBackground) {
            heroBackground.style.animationPlayState = 'running';
        }
    }
});

// ===================================
// Disable Heavy Effects on Low-End Devices
// ===================================

if (isLowEndDevice() || prefersReducedMotion) {
    // Disable all animations
    document.querySelectorAll('.reveal-text, .fade-in-section, .stagger-item, .letter').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });

    // Disable ambient shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.display = 'none';
    });

    // Disable mesh gradient animation
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.animation = 'none';
    }

    // Disable grain overlay
    const grainOverlay = document.querySelector('.grain-overlay');
    if (grainOverlay) {
        grainOverlay.style.display = 'none';
    }
}

// ===================================
// Cleanup: Remove will-change After Load
// ===================================

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('[style*="will-change"]').forEach(el => {
            if (!el.matches(':hover')) {
                el.style.willChange = 'auto';
            }
        });
    }, 2000);
});

// ===================================
// Performance Monitoring (Development)
// ===================================

if ('PerformanceObserver' in window && !isLowEndDevice()) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 50) {
                    console.warn('Long task detected:', entry.duration.toFixed(2), 'ms');
                }
            }
        });
        observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
        // Long task API not supported
    }
}

// ===================================
// Initialize Letter Reveal on Scroll
// ===================================

// Ensure letter reveal happens even if page loads scrolled
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLetterReveal);
} else {
    initLetterReveal();
}

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
}

// ===================================
// Reduced Motion Support for About
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
