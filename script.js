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


document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');
    const popupButton = document.getElementById('popup-button');
    const closePopup = document.querySelector('.close-popup');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const imgSrc = this.querySelector('img').src;

            popupTitle.textContent = title;
            popupImage.src = imgSrc;
            popupImage.alt = title;
            popupDescription.textContent = description;

            popup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popupButton.addEventListener('click', function() {
        alert('This button can be customized to perform any action you want!');
    });

    // Close the popup if clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});