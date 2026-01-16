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
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.2
        });
    }

    if (document.querySelector('.hero-subtitle')) {
        tl.from('.hero-subtitle', {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5');
    }

    if (document.querySelector('.hero-stats')) {
        tl.from('.hero-stats', {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5');
    }

    if (document.querySelector('.hero .btn')) {
        tl.from('.hero .btn', {
            duration: 0.5,
            y: 10,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3');
    }

    if (document.querySelector('.hero-image-container')) {
        tl.from('.hero-image-container', {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.8');
    }

    // Scroll Animations for General Sections
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.1
        });
    });

    // Timeline Animations
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
            },
            x: -20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Skill Tags Animation
    gsap.utils.toArray('.skill-tag').forEach((tag, i) => {
        gsap.from(tag, {
            scrollTrigger: {
                trigger: tag,
                start: 'top 90%',
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
            delay: i * 0.05
        });
    });

    // Navbar Scroll Effect
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.8)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        }
    });

    // Dynamic Text Cycling (Hero Subtitle)
    const subtitles = [
        "20.5 Years of Academic & Industry Experience",
        "Awarded by President of India",
        "Researcher | Mentor | Keynote Speaker"
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