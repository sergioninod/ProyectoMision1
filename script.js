// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once the element has revealed, we don't need to observe it anymore
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Reveal when at least 15% of the element is visible
});

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for navbar
                behavior: 'smooth'
            });
        }
    });
});

// Simple Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic feedback animation
        const initialBtnText = this.querySelector('button').textContent;
        const btn = this.querySelector('button');
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        btn.style.opacity = '0.7';
        
        // Simulate an API call
        setTimeout(() => {
            btn.textContent = 'Mensaje Enviado';
            btn.style.backgroundColor = '#2ecc71'; // Green for success
            btn.style.color = '#fff';
            
            // Reset form
            contactForm.reset();
            
            // Revert button after 3 seconds
            setTimeout(() => {
                btn.textContent = initialBtnText;
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.backgroundColor = ''; // Reverts to variables
                btn.style.color = '';
            }, 3000);
        }, 1500);
    });
}

// Hover effects for service cards (optional subtle JS reinforcement)
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--secondary-color)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'var(--glass-border)';
    });
});
