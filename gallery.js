document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Sample gallery items - Replace with your actual content
    const galleryItems = [
        {
            image: '/assets/Portefolio/Affiches/Affiche Final 25_VICTORIOUS.jpg',
            title: 'Affiches',
            description: 'Cet exercice avait pour but de créer une affiche fictive pour le Festival de la typographie.'
        },
        {
            image: '/assets/Portefolio/Appolo/Moodboard 3.JPG',
            title: 'Appolo',
            description: 'Le but de l\'exercice était la refonte de l\'aspect visuel du magazine d\'art Apollo.'
        },
        {
            image: '/assets/Portefolio/Cola couronne/ColaCouronne_GrandeCanette.jpg',
            title: 'Cola couronne',
            description: 'Le but de l\'exercice était la refonte de l\'identité visuelle tout en gardant le même logo.'
        },
        {
            image: '/assets/Portefolio/Librairies Racines/Packaging + Promotionnel.jpg',
            title: 'Librairies Racines',
            description: 'L\'exercice était de construire un emballage basé sur le branding existant de la compagnie.'
        },
        {
            image: '/assets/Portefolio/Pizzeria Olive et Lune/MoodBoard 2.JPG',
            title: 'Pizzeria Olive et Lune',
            description: 'Nous avons créé pour ce couple fictif un logo pour leur pizzeria moderne.'
        },
        {
            image: '/assets/Portefolio/Typomorphie/Mockup_ Cup.jpg',
            title: 'Typomorphie',
            description: 'Pour cet exercice une nouvelle compagnie de typographie voulait un logo qui les représentait.'
        }
    ];

    let currentIndex = 0;

    // Create cards
    galleryItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-item' + (index === 0 ? ' active' : index === 1 ? ' next' : '');
        card.innerHTML = `
            <div class="portfolio-card">
                <div class="card-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="card-content">
                    <h4>${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                    <a class="card-button">Voir plus</a>
                </div>
            </div>
        `;
        carouselItems.appendChild(card);
    });

    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            item.className = 'carousel-item';
            
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + items.length) % items.length) {
                item.classList.add('prev');
            } else if (index === (currentIndex + 1) % items.length) {
                item.classList.add('next');
            }
        });
    }

    // Navigation buttons
    prevButton?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateCarousel();
    });

    nextButton?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateCarousel();
    });

    // Touch handling
    let touchStartX = 0;
    let touchEndX = 0;

    carouselItems.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselItems.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                currentIndex = (currentIndex + 1) % galleryItems.length;
            } else {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            }
            updateCarousel();
        }
    }

    // Initial setup
    updateCarousel();

    
    // Add popup HTML to the page
    const popupHTML = `
        <div class="popup">
            <div class="popup-content">
                <span class="close">&times;</span>
                <img class="popup-image" src="" alt="">
                <div class="thumbnail-gallery"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const popup = document.querySelector('.popup');
    const popupImage = popup.querySelector('.popup-image');
    const thumbnailGallery = popup.querySelector('.thumbnail-gallery');
    const closeButton = popup.querySelector('.close');

    // Sample related images for each gallery item
    const relatedImages = {
        'Affiches': [
            '/assets/Portefolio/Affiches/Affiche Final 25_VICTORIOUS.jpg',
            '/assets/Portefolio/Affiches/Affiche Final 25_VICTORIOUS2.jpg',
            '/assets/Portefolio/Affiches/Affiche Final 25_VICTORIOUS3.jpg'
        ],
        'Appolo': [
            '/assets/Portefolio/Appolo/Moodboard 3.JPG',
            '/assets/Portefolio/Appolo/Moodboard 2.JPG',
            '/assets/Portefolio/Appolo/Moodboard 1.JPG'
        ],
        // Add more related images for other projects
    };

    // Add click event to portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h4').textContent;
            const mainImage = card.querySelector('.card-image img').src;
            openPopup(title, mainImage);
        });
    });

    function openPopup(title, mainImage) {
        popupImage.src = mainImage;
        thumbnailGallery.innerHTML = '';
        
        // Add title to popup
        const titleElement = popup.querySelector('.popup-title') || document.createElement('h3');
        titleElement.className = 'popup-title';
        titleElement.textContent = title;
        if (!popup.querySelector('.popup-title')) {
            popup.querySelector('.popup-content').insertBefore(titleElement, popup.querySelector('.popup-image'));
        }

        // Add thumbnails if available for this project
        const images = relatedImages[title] || [mainImage];
        images.forEach(img => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img;
            thumbnail.alt = title;
            thumbnail.classList.toggle('active', img === mainImage);
            thumbnail.addEventListener('click', () => {
                popupImage.src = img;
                thumbnailGallery.querySelectorAll('img').forEach(thumb => {
                    thumb.classList.toggle('active', thumb.src === img);
                });
            });
            thumbnailGallery.appendChild(thumbnail);
        });

        // Show popup with animation
        popup.style.display = 'flex';
        // Trigger reflow
        popup.offsetHeight;
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Close popup events
    closeButton.addEventListener('click', closePopup);
    popup.addEventListener('click', e => {
        if (e.target === popup) closePopup();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closePopup();
    });

    function closePopup() {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }, 300); // Match this with the CSS transition duration
    }

    // Add burger menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}); 