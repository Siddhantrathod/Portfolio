// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Splash screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const wrapper = document.getElementById('wrapper');
    const topRightGif = document.querySelector('.top-right-gif');

    // Hide splash screen and show main content after 1.5 seconds
    setTimeout(function() {
        splashScreen.classList.add('hidden');
        wrapper.classList.add('visible');
        topRightGif.classList.add('visible');
        
        // Remove splash screen from DOM after fade out
        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Form validation
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
}); 