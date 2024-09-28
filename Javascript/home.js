// Select all the navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section's ID
        const targetSection = document.querySelector(targetId); // Find the target section

        // Add a delay of 300ms before starting the scroll
        setTimeout(() => {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('nav').offsetHeight, // Offset by the height of the navbar
                behavior: 'smooth' // Enable smooth scrolling
            });
        }, 300); // Delay of 300 milliseconds
    });
});
