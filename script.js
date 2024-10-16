const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Check if the nav has the 'nav-active' class
        if (nav.classList.contains('nav-active')) {
            // If the menu is already active, hide it
            nav.style.display = 'none';
        } else {
            // If the menu is hidden, display it
            nav.style.display = 'flex';
        }

        // Toggle the 'nav-active' class for animation purposes
        nav.classList.toggle('nav-active');

        // Animate the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger icon animation
        burger.classList.toggle('toggle');
    });
};



navSlide();
