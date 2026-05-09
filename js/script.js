document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.custom-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Typed.js Initialization (if element exists)
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        new Typed('.typed-text', {
            strings: ['Frontend Developer', 'UI/UX Enthusiast', 'Freelancer'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // 3. AOS Initialization
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // 4. GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const heroTl = gsap.timeline();
    if(document.querySelector('.hero-title')) {
        heroTl.fromTo('.hero-greeting', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6, delay: 0.2})
              .fromTo('.hero-title', {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8}, "-=0.4")
              .fromTo('.hero-desc', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6}, "-=0.4")
              .fromTo('.hero-btns', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6}, "-=0.4")
              .fromTo('.hero-image-container', {scale: 0.8, opacity: 0}, {scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)"}, "-=0.8");
    }

    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach(bar => {
        ScrollTrigger.create({
            trigger: bar,
            start: "top 85%",
            onEnter: () => {
                bar.style.width = bar.getAttribute('data-width') + '%';
            }
        });
    });

    // 5. Swiper Initialization (Testimonials)
    if(document.querySelector('.testimonial-slider')) {
        new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    // 6. Custom Mouse Glow (Optional soft effect instead of hard cursor replacement)
    // Moving the background orbs slightly based on mouse movement for a premium parallax feel
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    
    if(orb1 && orb2 && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            gsap.to(orb1, {
                x: x * 50,
                y: y * 50,
                duration: 2,
                ease: "power2.out"
            });
            
            gsap.to(orb2, {
                x: -x * 50,
                y: -y * 50,
                duration: 2,
                ease: "power2.out"
            });
        });
    }
    
    console.log("%cPortfolio Refactored successfully 🚀", "color:#06b6d4; font-size: 16px; font-weight: bold;");
});