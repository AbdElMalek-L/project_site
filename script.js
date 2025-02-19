// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        menuBtn.classList.remove('active');
    } else {
        mobileMenu.style.display = 'block';
        menuBtn.classList.add('active');
    }
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.mobile-menu').style.display = 'none';
        }
    });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Add to Cart Animation
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = 'Added to Cart!';
        this.style.background = '#059669';
        
        setTimeout(() => {
            this.innerHTML = 'Add to Cart';
            this.style.background = '#dc2626';
        }, 2000);
    });
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all feature and product cards
document.querySelectorAll('.feature-card, .product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});