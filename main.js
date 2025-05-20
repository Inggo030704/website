// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js
    const typed = new Typed('.text', {
        strings: ['Student', 'Web Developer', 'Designer', ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Hamburger Menu Functionality
        const hamburger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar');

        hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
});

    // Close Mobile Menu on Click
    document.querySelectorAll(".navbar a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
    }));

    // Show More Photos Functionality
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenPhotos = document.querySelectorAll('.photo-item.hidden');
    let isExpanded = false;

    if(showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            hiddenPhotos.forEach(photo => {
                photo.classList.toggle('hidden');
            });
            isExpanded = !isExpanded;
            showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
        });
    }

    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

    // Active Section Tracking
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will respond soon.');
            contactForm.reset();
        });
    }

    // Star Rating System (if implemented)
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', (e) => {
            const value = parseInt(e.target.dataset.value);
            const stars = document.querySelectorAll('.star');
            
            stars.forEach((s, index) => {
                s.classList.toggle('active', index < value);
            });
        });
    });
});
// JavaScript
document.querySelector('.send-btn').addEventListener('click', function() {
    const rating = document.querySelector('#rating').value;
    const message = document.querySelector('#message').value;
    
    if (message.trim() === '') {
        alert('Please enter a message');
        return;
    }
    
    const reviewEntry = document.createElement('div');
    reviewEntry.className = 'review-entry';
    reviewEntry.innerHTML = `
        <div class="review-rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
        <div class="review-message">${message}</div>
    `;
    
    document.querySelector('.reviews-container').prepend(reviewEntry);
    
    // Clear inputs
    document.querySelector('#message').value = '';
});
