// Attach event listeners to the navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Immediately scroll to the target section with smooth behavior
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
