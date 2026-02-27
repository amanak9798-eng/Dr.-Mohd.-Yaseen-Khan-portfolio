document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Initial Page Load Animation
    const tl = gsap.timeline();

    if (document.querySelector('.hero-title')) {
        tl.from('.hero-title', {
            duration: 0.4,
            y: 10,
            opacity: 0,
            ease: 'power4.out',
            stagger: 0.04
        });
    }

    if (document.querySelector('.hero-subtitle')) {
        tl.from('.hero-subtitle', {
            duration: 0.4,
            y: 10,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.3');
    }

    if (document.querySelector('.hero-stats')) {
        tl.from('.hero-stats', {
            duration: 0.4,
            y: 10,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.3');
    }

    if (document.querySelector('.hero .btn')) {
        tl.from('.hero .btn', {
            duration: 0.3,
            y: 5,
            stagger: 0.03,
            ease: 'power4.out'
        }, '-=0.2');
    }

    if (document.querySelector('.hero-image-container')) {
        tl.from('.hero-image-container', {
            duration: 0.5,
            scale: 0.98,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.4');
    }

    // Scroll Animations for General Sections
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: 'power4.out'
        });
    });

    // Reveal cards individually as they enter the viewport for maximum reliability
    gsap.utils.toArray('.card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: 'power4.out'
        });
    });

    // Timeline Animations
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            x: -10,
            opacity: 0,
            duration: 0.5,
            ease: 'power4.out'
        });
    });

    // Skill Tags Animation
    gsap.utils.toArray('.skill-tag').forEach(tag => {
        gsap.from(tag, {
            scrollTrigger: {
                trigger: tag,
                start: 'top 95%',
                toggleActions: 'play none none none'
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.4,
            ease: 'power4.out'
        });
    });

    // Refresh ScrollTrigger on window load and after a short delay to ensure all positions are correct
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
        // Final fallback refresh after a short delay
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
    });

    // Scroll Progress Bar Logic
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }
    });

    // Navbar Scroll Effect
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(11, 17, 32, 0.98)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.8)';
            nav.style.padding = '0.8rem 2rem';
        } else {
            nav.style.background = 'rgba(11, 17, 32, 0.8)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
            nav.style.padding = '1rem 2rem';
        }
    });

    // Dynamic Text Cycling (Hero Subtitle)
    const subtitles = [
        "25+ Years of Academic & Industry Experience",
        "Awarded by President of India",
        "Researcher | Mentor | Keynote Speaker",
        "Expert in Outcome-Based Education (OBE)"
    ];
    let subtitleIndex = 0;
    const subtitleEl = document.getElementById('dynamic-subtitle');
    
    if (subtitleEl) {
        setInterval(() => {
            gsap.to(subtitleEl, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
                    subtitleEl.textContent = subtitles[subtitleIndex];
                    gsap.to(subtitleEl, { opacity: 1, duration: 0.5 });
                }
            });
        }, 3000);
    }
});