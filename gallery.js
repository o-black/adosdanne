document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Sample gallery items - Replace with your actual content
    const galleryItems = [
        {
            image: '/assets/Portefolio/Affiches/Affiche Final 25_VICTORIOUS.jpg',
            title: 'Affiches',
            description: 'Cet exercice avait pour but de créer une affiche fictive pour le Festival de la typographie.',
            date: 'Mars 2024',
            fullDescription: 'Une affiche créée pour le Festival de la typographie, mettant en valeur différentes polices de caractères et leurs utilisations créatives. Le design s\'inspire des mouvements typographiques modernes tout en conservant une lisibilité optimale.'
        },
        {
            image: '/assets/Portefolio/Appolo/Moodboard 3.JPG',
            title: 'Appolo',
            description: 'Le but de l\'exercice était la refonte de l\'aspect visuel du magazine d\'art Apollo.',
            date: 'Mars 2024',
            fullDescription: 'Le but de l\'exercice était la refonte de l\'aspect visuel du magazine d\'art Apollo. Le design s\'inspire des mouvements typographiques modernes tout en conservant une lisibilité optimale.'
        },
        {
            image: '/assets/Portefolio/Cola couronne/ColaCouronne_GrandeCanette.jpg',
            title: 'Cola couronne',
            description: 'Le but de l\'exercice était la refonte de l\'identité visuelle tout en gardant le même logo.',
            date: 'Mars 2024',
            fullDescription: 'Le but de l\'exercice était la refonte de l\'identité visuelle tout en gardant le même logo. Le design s\'inspire des mouvements typographiques modernes tout en conservant une lisibilité optimale.'
        },
        {
            image: '/assets/Portefolio/Librairies Racines/Packaging + Promotionnel.jpg',
            title: 'Librairies Racines',
            description: 'L\'exercice était de construire un emballage basé sur le branding existant de la compagnie.',
            date: 'Mars 2024',
            fullDescription: 'L\'exercice était de construire un emballage basé sur le branding existant de la compagnie. Le design s\'inspire des mouvements typographiques modernes tout en conservant une lisibilité optimale.'
        },
        {
            image: '/assets/Portefolio/Pizzeria Olive et Lune/MoodBoard 2.JPG',
            title: 'Pizzeria Olive et Lune',
            description: 'Nous avons créé pour ce couple fictif un logo pour leur pizzeria moderne.',
            date: 'Mars 2024',
            fullDescription: 'Nous avons créé pour ce couple fictif un logo pour leur pizzeria moderne. Le design s\'inspire des mouvements typographiques modernes tout en conservant une lisibilité optimale.'
        },
        {
            image: '/assets/Portefolio/Typomorphie/Mockup_ Cup.jpg',
            title: 'Typomorphie',
            description: 'Pour cet exercice une nouvelle compagnie de typographie voulait un logo qui les représentait.',
            date: 'Mars 2024',
            fullDescription: 'Pour cet exercice une nouvelle compagnie de typographie voulait un logo qui les représentait. Le design s\'inspire des mouvements typographiques modernes tout en conservant une lisibilité optimale.'
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

    // Create and add dots - Moving this outside the carousel-wrapper
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    
    galleryItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot${index === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });

    // Add dots container directly to carousel container, after the wrapper
    carouselContainer.appendChild(dotsContainer);

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

        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
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
                <div class="popup-image-container">
                    <img class="popup-image" src="" alt="">
                    <div class="popup-nav-buttons">
                        <button class="popup-nav-button popup-nav-prev">&#10094;</button>
                        <button class="popup-nav-button popup-nav-next">&#10095;</button>
                    </div>
                    <div class="dot-navigation"></div>
                </div>
                <div class="popup-info">
                    <h3 class="popup-title"></h3>
                    <p class="popup-date"></p>
                    <p class="popup-description"></p>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const popup = document.querySelector('.popup');
    const popupImage = popup.querySelector('.popup-image');
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
        const item = galleryItems.find(item => item.title === title);
        let currentImageIndex = 0;
        const images = relatedImages[title] || [mainImage];
        
        // Set main image
        popupImage.src = mainImage;
        popup.querySelector('.popup-title').textContent = title;
        popup.querySelector('.popup-date').textContent = item.date;
        popup.querySelector('.popup-description').textContent = item.fullDescription;

        // Create dots
        const dotNavigation = popup.querySelector('.dot-navigation');
        dotNavigation.innerHTML = '';
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot${index === 0 ? ' active' : ''}`;
            dot.addEventListener('click', () => {
                currentImageIndex = index;
                updateImage();
            });
            dotNavigation.appendChild(dot);
        });

        // Touch handling for swipe
        let touchStartX = 0;
        let touchEndX = 0;

        popupImage.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        popupImage.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next image
                    currentImageIndex = (currentImageIndex + 1) % images.length;
                } else {
                    // Swipe right - previous image
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                }
                updateImage();
            }
        }

        function updateImage() {
            popupImage.src = images[currentImageIndex];
            // Update dot active state
            dotNavigation.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentImageIndex);
            });
        }

        // Navigation buttons (for desktop)
        const prevButton = popup.querySelector('.popup-nav-prev');
        const nextButton = popup.querySelector('.popup-nav-next');
        
        prevButton.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        };
        
        nextButton.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        };

        popup.style.display = 'flex';
        popup.offsetHeight; // Trigger reflow
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

    // Add to the existing JavaScript after the carousel items initialization
    function initializeCarousel() {
        // ... existing carousel initialization code ...

        // Add dots navigation
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        
        galleryItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `carousel-dot${index === 0 ? ' active' : ''}`;
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });

        // Add dots container after the carousel
        document.querySelector('.carousel-container').appendChild(dotsContainer);

        // Update the updateCarousel function to include dot updates
        function updateCarousel() {
            // ... existing carousel update code ...

            // Update dots
            document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Add dot updates to next/prev button clicks
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });
    }

    // Call the initialization function when the document is ready
    document.addEventListener('DOMContentLoaded', initializeCarousel);
}); 