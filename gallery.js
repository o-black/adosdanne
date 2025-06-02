document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItemsContainer = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Sample gallery items - Replace with your actual content
    const galleryItems = [
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Ancestors market.jpg',
            title: 'Ancestors market',
            description: 'Un retour à la tradition...',
            date: 'Mars 2024',
            fullDescription: 'Un retour à la tradition, un aperçu d’un monde idyllique où les âmes de nos ancêtres supervisés par Simbi, récoltent les fruits de nos requêtes pour les laisser couler le long de ses courants. Une représentation de collectivité, d’unité et de cycle d’exploration entre l’homme et la nature.',
            price: '630$',
            size: '24 x 28 in',
            material: 'Acrylique et pastel à l’huile'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Breathe better.jpg',
            title: 'Breathe better',
            description: 'Un corps en pleine transcendance...',
            date: '2024',
            fullDescription: 'Un corps en pleine transcendance. Établi dans un environnement complémentaire qui lui permet de dialoguer avec la conscience spirituelle qui la compose. La plante serpent reconnue pour son pouvoir de connexion et de purification et les pierres d’eau douce viennent compléter le balancement de la composition. Orné de quelques symboles inspirés de vêvê, un dialogue entre physique et spirituel se crée.',
            price: '1164$',
            size: '24 x 36 in',
            material: 'Acrylique et pastel à l’huile'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Closing windows.jpg',
            title: 'Closing windows',
            description: '2 fenêtres sur des parties de mon corps revendiquées...',
            date: 'Mars 2024',
            fullDescription: '2 fenêtres sur des parties de mon corps revendiquées par la culture du paraître et du devoir.2 fenêtres sur des parties de mon être qui me classe dans des catégories indésirables puisque je ne [suis] pas la norme',
            price: '600$',
            size: '22 x 28 in',
            material: 'Acrylique'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Golden ideas.jpg',
            title: 'Golden ideas',
            description: 'Tableau "Golden Ideas"',
            date: 'Mars 2024',
            fullDescription: 'Tableau "Golden Ideas"'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Hold on.JPG',
            title: 'Hold on',
            description: 'Tableau "Hold On"',
            date: '2024',
            fullDescription: '',
            rice: '1120$',
            size: '19.7 x 49.2 in',
            material: 'Acrylique sur panneau mdf'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Hope.jpg',
            title: 'Hope',
            description: 'Tableau "Hope"',
            date: 'Mars 2024',
            fullDescription: 'Tableau "Hope"'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Meditation.jpg',
            title: 'Meditation',
            description: 'Une Vénus en méditation devant le mouvement des motif...',
            date: '2024',
            fullDescription: 'Une Vénus en méditation devant le mouvement des motif construisant un labyrinthe de possibles itinéraire.',
            price: '614$',
            size: '22 x 28 in',
            material: 'Acrylique'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Men.jpg',
            title: 'Men',
            description: 'L’encrage du noyau traditionnel familiale.',
            date: '2024',
            fullDescription: 'L’encrage du noyau traditionnel familiale.',
            price: '300$',
            size: '22 x 28 in',
            material: 'Acrylique'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Molding.jpg',
            title: 'Molding Waters',
            description: 'Ce tableau par du désir de me construire...',
            date: 'Mars 2024',
            fullDescription: 'Ce tableau par du désir de me construire ou plutôt de renaitre avec des concepts fluides et malléables. La femme noire, la femme forte qui construit sa personne en puisant dans les vallées des sommets de son héritage. La palette de couleur fait référence à la passion qui l’anime en parallèle à sa connexion au monde spirituel : ses ancêtres.',
            price: '760$',
            size: '22 x 28 in',
            material: 'Acrylique et pastel à l’huile'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit .JPG',
            title: 'A throne\'s Spirit ',
            description: 'Le bois, symbole de sagesse ancestrale...',
            date: 'Mars 2024',
            fullDescription: 'Le bois, symbole de sagesse ancestrale et de force spirituel, semble être le parfait matériel pour la construction du trône de notre esprit; inséminer par la stabilité. C\'est cette recherche de tranquillité mais aussi cette espace de profondeur présent dans nos tripes qui explique le fond de la toile. On y retrouve aussi un concept développé pas l\'artiste comme dossier du trône : Les colored Queens. Finalement le une piscine pour siège pour permettre à l\'esprit sirène de se ressourcer étant dans son élément intuitif.',
            price: '1160$',
            size: '24 x 30 in',
            material: 'Acrylique et pastel à l\'huile'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Test subject.jpg',
            title: 'Test subject',
            description: 'Tableau "Test Subject"',
            date: 'Mars 2024',
            fullDescription: '',
            price: '300$',
            size: '8.66 x 19.56 in',
            material: 'Acrylique sur panneau mdf'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/The invisible women.jpg',
            title: 'L\'esprit à 7 cordes',
            description: 'Femme à tout faire, Femme glorieuse.',
            date: '2024',
            fullDescription: 'Femme à tout faire, Femme glorieuse.',
            price: '1164$',
            size: '24 x 36 in',
            material: 'Acrylique et pastel à l\'huile'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/The worker.JPG',
            title: 'The worker',
            description: 'Tableau "worker"',
            date: 'Mars 2024',
            fullDescription: 'Tableau "worker"',
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Under the bridge.jpg',
            title: 'Under the bridge',
            description: 'Ce panneau est initialement initié par le désir de créer un genre...',
            date: '2024',
            fullDescription: 'Ce panneau est initialement initié par le désir de créer un genre de casse-tête. Les plus petites plaques devraient être interchangeables mais faute de temps et de ressources j\'ai préféré les collés à la planche. Chaque Vénus est dans la pause du mouvement. Savourer du moment présent pour cette seconde de réalisation… tout en regardant l\'eau qui continue de suivre son cours symbolisant, le temps, la réalité la plus décisive qui nous échappera toujours.',
            price: '720$',
            size: '24 x 24 in',
            material: 'Acrylique sur panneau de bois et MDF'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Venus.JPG',
            title: 'Venus',
            description: 'Peinture de Venus',
            date: '2022',
            fullDescription: '',
            price: '300$',
            size: '12.8 x 25 in',
            material: 'Acrylique'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Women.jpg',
            title: 'Women',
            description: 'La matière du noyau traditionnel familiale.',
            date: 'Mars 2024',
            fullDescription: 'La matière du noyau traditionnel familiale.',
            price: '300$',
            size: '19.7 x 23.6 in',
            material: 'Acrylique'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Émergence.JPG',
            title: 'Émergence',
            description: 'Des ténèbres à la lumière...',
            date: 'Mars 2024',
            fullDescription: 'Des ténèbres à la lumière, on manifeste notre véritable nature. Les marques blanches de mes Vénus célébrant les blessures transformées en page blanche, l\'opportunité de se redéfinir en suivant la moulure de notre corps, en les acceptant comme une orientation de l\'avenir.',
            price: '1120$',
            size: '19.7 x 49.2 in',
            material: 'Acrylique sur panneau mdf'
        },
    ];
    
    let mainCarouselCurrentIndex = 0;
    let currentPortfolioCardIndex = -1;

    // Create cards for the main carousel
    galleryItems.forEach((item, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'carousel-item';
        cardDiv.dataset.portfolioIndex = index;
        cardDiv.innerHTML = `
            <div class="portfolio-card">
                <div class="card-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="card-content">
                    <h4>${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                </div>
            </div>
        `;
        if (carouselItemsContainer) carouselItemsContainer.appendChild(cardDiv);
    });

    const popupHTML = `
        <div class="popup">
            <span class="modal-nav prev-project" aria-label="Previous portfolio project">&#10094;</span>
            <span class="modal-nav next-project" aria-label="Next portfolio project">&#10095;</span>
            <div class="popup-content">
                <span class="close">&times;</span>
                <div class="popup-image-container">
                    <button class="popup-nav-button popup-nav-prev" aria-label="Previous image in series">&#10094;</button>
                    <img class="popup-image" src="" alt="Artwork Image">
                    <button class="popup-nav-button popup-nav-next" aria-label="Next image in series">&#10095;</button>
                    <div class="dot-navigation"></div>
                    <div class="thumbnail-gallery"></div>
                </div>
                <div class="popup-info">
                    <h3 class="popup-title"></h3>
                    <p class="popup-date"></p>
                    <p class="popup-price"><strong></strong></p>
                    <p class="popup-specs"></p>
                    <p class="popup-description"></p>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const popupElement = document.querySelector('.popup');
    const popupContentElement = popupElement.querySelector('.popup-content');
    const popupImageElement = popupElement.querySelector('.popup-image');
    const popupCloseButton = popupElement.querySelector('.popup-content .close');
    const popupTitleElement = popupElement.querySelector('.popup-title');
    const popupDateElement = popupElement.querySelector('.popup-date');
    const popupPriceStrongElement = popupElement.querySelector('.popup-price strong');
    const popupSpecsElement = popupElement.querySelector('.popup-specs');
    const popupDescriptionElement = popupElement.querySelector('.popup-description');
    const dotNavigationElement = popupElement.querySelector('.dot-navigation');
    const prevRelatedImageButton = popupElement.querySelector('.popup-nav-button.popup-nav-prev');
    const nextRelatedImageButton = popupElement.querySelector('.popup-nav-button.popup-nav-next');
    const thumbnailGalleryElement = popupElement.querySelector('.thumbnail-gallery');

    // Define portfolio navigation buttons
    const prevPortfolioCardButton = popupElement.querySelector('.modal-nav.prev-project');
    const nextPortfolioCardButton = popupElement.querySelector('.modal-nav.next-project');

    let currentRelatedImageArrayIndex = 0;
    let currentArtworkRelatedImages = [];

    // Variables for swipe navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const swipeThreshold = 50; // Minimum distance for a swipe

    const relatedImagesData = {
        'Ancestors market': [
            '/assets/Galerie/compressed/Ready Paintings/Ancestors market 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Ancestors market 2.jpg',
        ],
        'Breathe better': [
            '/assets/Galerie/compressed/Ready Paintings/Breathe better 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Breathe better 2.jpg',
        ],
        'Closing windows': [
            '/assets/Galerie/compressed/Ready Paintings/Closing windows 1.jpg',
        ],
        'Golden ideas': [
            '/assets/Galerie/compressed/Ready Paintings/Golden ideas 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Golden ideas 2.jpg',
        ],
        'Hold on': [
            '/assets/Galerie/compressed/Ready Paintings/Hold on 1.jpg',
        ],
        'Hope': [
            '/assets/Galerie/compressed/Ready Paintings/Hope 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Hope 2.jpg',
        ],
        'Men': [
            '/assets/Galerie/compressed/Ready Paintings/Men 1.jpg',
        ],
        'Molding Waters': [
            '/assets/Galerie/compressed/Ready Paintings/Molding 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Molding 3.jpg',
        ],
        'A throne\'s Spirit ': [
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 1.JPG',
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 2.JPG',
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 3.JPG',
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 4.JPG',
        ],
        'L\'esprit à 7 cordes': [
            '/assets/Galerie/compressed/Ready Paintings/The invisible women 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/The invisible women 2.jpg',
        ],
        'The worker': [
            '/assets/Galerie/compressed/Ready Paintings/The worker 1.JPG',
        ],
        'Under the bridge': [
            '/assets/Galerie/compressed/Ready Paintings/Under the bridge 2.jpg',
        ],
        'Venus': [
            '/assets/Galerie/compressed/Ready Paintings/Venus 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Venus 7.JPG',
        ],
        'Women': [
            '/assets/Galerie/compressed/Ready Paintings/Women 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Women 2.jpg',
        ],
        'Émergence': [
            '/assets/Galerie/compressed/Ready Paintings/Émergence 1.JPG',
            '/assets/Galerie/compressed/Ready Paintings/Émergence 2.JPG',
        ],
    };

    function displayPortfolioCardInPopup(portfolioIndex) {
        if (portfolioIndex < 0 || portfolioIndex >= galleryItems.length) {
            console.error('Invalid portfolioIndex:', portfolioIndex);
            return;
        }
        currentPortfolioCardIndex = portfolioIndex;
        const item = galleryItems[currentPortfolioCardIndex];

        popupTitleElement.textContent = item.title;
        popupDateElement.textContent = item.date || '';
        popupPriceStrongElement.textContent = item.price || (item.rice || 'Prix sur demande');
        const specsText = item.material ? `<strong>${item.material}</strong>${item.size ? ` - ${item.size}` : ''}` : (item.size || '');
        popupSpecsElement.innerHTML = specsText;
        popupDescriptionElement.textContent = item.fullDescription || item.description || '';

        currentArtworkRelatedImages = relatedImagesData[item.title.trim()] || [];
        currentRelatedImageArrayIndex = 0;
        
        if (currentArtworkRelatedImages.length > 0) {
            popupImageElement.src = currentArtworkRelatedImages[0];
        } else {
            popupImageElement.src = item.image;
        }
        
        updateRelatedImageDots();
        updateRelatedImageNavButtonsVisibility();
        setupRelatedImageInteractions();
        populatePopupThumbnails();
    }

    function updateRelatedImageDisplay() {
        if (currentArtworkRelatedImages.length > 0 && currentArtworkRelatedImages[currentRelatedImageArrayIndex]) {
            popupImageElement.src = currentArtworkRelatedImages[currentRelatedImageArrayIndex];
        } else {
            const item = galleryItems[currentPortfolioCardIndex];
            if(item) popupImageElement.src = item.image;
        }
        updateRelatedImageDots();
        updateActiveThumbnail();
    }

    function updateRelatedImageDots() {
        if (!dotNavigationElement) return;
        dotNavigationElement.innerHTML = ''; // Always clear previous dots

        // If thumbnails are visible, hide dots container entirely
        if (thumbnailGalleryElement && thumbnailGalleryElement.style.display === 'flex') {
            dotNavigationElement.style.display = 'none';
            return;
        }

        // Original logic to show dots if no thumbnails and multiple images (mostly for fallback or if you ever disable thumbnails)
        if (currentArtworkRelatedImages.length > 1) {
            dotNavigationElement.style.display = 'flex'; // Show dots container
            currentArtworkRelatedImages.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (index === currentRelatedImageArrayIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentRelatedImageArrayIndex = index;
                    updateRelatedImageDisplay();
                });
                dotNavigationElement.appendChild(dot);
            });
        } else {
            dotNavigationElement.style.display = 'none'; // Hide if not needed
        }
    }

    function populatePopupThumbnails() {
        if (!thumbnailGalleryElement) return;
        thumbnailGalleryElement.innerHTML = '';

        if (currentArtworkRelatedImages.length > 1) {
            thumbnailGalleryElement.style.display = 'flex';
            currentArtworkRelatedImages.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `Thumbnail ${index + 1} for ${galleryItems[currentPortfolioCardIndex].title}`;
                thumb.classList.add('popup-thumbnail-img');
                if (index === currentRelatedImageArrayIndex) {
                    thumb.classList.add('active');
                }
                thumb.addEventListener('click', () => {
                    currentRelatedImageArrayIndex = index;
                    updateRelatedImageDisplay();
                });
                thumbnailGalleryElement.appendChild(thumb);
            });

        } else {
            thumbnailGalleryElement.style.display = 'none'; // Hide if not needed
        }
    }

    function updateActiveThumbnail() {
        if (!thumbnailGalleryElement) return;
        const thumbnails = thumbnailGalleryElement.querySelectorAll('.popup-thumbnail-img');
        thumbnails.forEach((thumb, index) => {
            if (index === currentRelatedImageArrayIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    function updateRelatedImageNavButtonsVisibility() {
        // Always hide these buttons as thumbnails are now the primary navigation for related images
        if (prevRelatedImageButton) prevRelatedImageButton.style.display = 'none';
        if (nextRelatedImageButton) nextRelatedImageButton.style.display = 'none';
    
        // The rest of the original logic for disabling buttons can be removed or commented out
        // as the buttons are no longer visible.
        /*
        if (currentArtworkRelatedImages.length <= 1) {
            prevRelatedImageButton.style.display = 'none';
            nextRelatedImageButton.style.display = 'none';
        } else {
            prevRelatedImageButton.style.display = 'flex';
            nextRelatedImageButton.style.display = 'flex';
            prevRelatedImageButton.disabled = currentRelatedImageArrayIndex === 0;
            nextRelatedImageButton.disabled = currentRelatedImageArrayIndex === currentArtworkRelatedImages.length - 1;
        }
        */
    }
    
    function setupRelatedImageInteractions() {
        popupImageElement.onclick = () => openFullscreen(popupImageElement.src);
    }

    prevRelatedImageButton.onclick = () => {
        if (currentRelatedImageArrayIndex > 0) {
            currentRelatedImageArrayIndex--;
            updateRelatedImageDisplay();
            updateRelatedImageNavButtonsVisibility();
        }
    };

    nextRelatedImageButton.onclick = () => {
        if (currentRelatedImageArrayIndex < currentArtworkRelatedImages.length - 1) {
            currentRelatedImageArrayIndex++;
            updateRelatedImageDisplay();
            updateRelatedImageNavButtonsVisibility();
        }
    };

    document.querySelectorAll('.carousel-item .portfolio-card').forEach(cardElement => {
        cardElement.addEventListener('click', () => {
            const portfolioIndex = parseInt(cardElement.closest('.carousel-item').dataset.portfolioIndex);
            if (!isNaN(portfolioIndex)) {
                displayPortfolioCardInPopup(portfolioIndex);
                popupElement.style.display = 'flex';
                popupElement.offsetHeight;
                popupElement.classList.add('show');
                document.body.style.overflow = 'hidden';
                updatePopupOverlayElements();
            }
        });
    });

    prevPortfolioCardButton.addEventListener('click', () => {
        if (galleryItems.length === 0) return;
        const newIndex = (currentPortfolioCardIndex - 1 + galleryItems.length) % galleryItems.length;
        displayPortfolioCardInPopup(newIndex);
        updatePopupOverlayElements();
    });

    nextPortfolioCardButton.addEventListener('click', () => {
        if (galleryItems.length === 0) return;
        const newIndex = (currentPortfolioCardIndex + 1) % galleryItems.length;
        displayPortfolioCardInPopup(newIndex);
        updatePopupOverlayElements();
    });

    if (popupCloseButton) popupCloseButton.addEventListener('click', closePopup);
    popupElement.addEventListener('click', e => {
        if (e.target === popupElement) closePopup();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && popupElement.classList.contains('show')) closePopup();
    });

    function closePopup() {
        popupElement.classList.remove('show');
        setTimeout(() => {
            popupElement.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    const fullscreenViewerElement = document.querySelector('.fullscreen-viewer');
    const fullscreenImageElement = fullscreenViewerElement ? fullscreenViewerElement.querySelector('img') : null;
    const fullscreenCloseButton = fullscreenViewerElement ? fullscreenViewerElement.querySelector('.fullscreen-close') : null;

    function openFullscreen(imageSrc) {
        if (fullscreenViewerElement && fullscreenImageElement) {
            fullscreenImageElement.src = imageSrc;
            fullscreenViewerElement.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeFullscreen() {
        if (fullscreenViewerElement) {
            fullscreenViewerElement.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    if (fullscreenViewerElement) {
        fullscreenViewerElement.addEventListener('click', (e) => {
            if (e.target !== fullscreenImageElement) {
                closeFullscreen();
            }
        });
    }

    if (fullscreenCloseButton) fullscreenCloseButton.addEventListener('click', closeFullscreen);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenViewerElement && fullscreenViewerElement.classList.contains('active')) {
            closeFullscreen();
        }
    });

    function updatePopupOverlayElements() {
        if (!popupElement || !popupContentElement || !prevPortfolioCardButton || !nextPortfolioCardButton) return;

        const popupContentRect = popupContentElement.getBoundingClientRect();
        const arrowWidth = 44;
        const arrowHeight = 44;

        const arrowTopPosition = popupContentRect.top + (popupContentRect.height / 2) - (arrowHeight / 2);
        prevPortfolioCardButton.style.top = `${arrowTopPosition}px`;
        nextPortfolioCardButton.style.top = `${arrowTopPosition}px`;

        const gap = 20;
        prevPortfolioCardButton.style.left = `${popupContentRect.left - arrowWidth - gap}px`;
        prevPortfolioCardButton.style.right = 'auto';
        nextPortfolioCardButton.style.left = `${popupContentRect.right + gap}px`;
        nextPortfolioCardButton.style.right = 'auto';
    }

    window.addEventListener('resize', () => {
        if (popupElement.style.display !== 'none' && popupElement.classList.contains('show')) {
            updatePopupOverlayElements();
        }
    });

    let items = [];

    function initializeCarousel() {
        const carouselElement = document.querySelector('.carousel-container .carousel-items');
        if (!carouselElement) return;

        items = Array.from(carouselElement.children);
        if (items.length === 0) return;

        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        
        galleryItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => {
                mainCarouselCurrentIndex = index;
                updateMainCarousel();
            });
            dotsContainer.appendChild(dot);
        });

        if (carouselContainer) {
            carouselContainer.appendChild(dotsContainer);
        }
        updateMainCarousel();
    }

    function updateMainCarousel() {
        if (!carouselItemsContainer) return;
        
        const mainDots = document.querySelectorAll('.carousel-container .carousel-dots .carousel-dot');
        mainDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === mainCarouselCurrentIndex);
        });
        
        console.log("Update main page carousel to index:", mainCarouselCurrentIndex);
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            mainCarouselCurrentIndex = (mainCarouselCurrentIndex - 1 + galleryItems.length) % galleryItems.length;
            updateMainCarousel();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            mainCarouselCurrentIndex = (mainCarouselCurrentIndex + 1) % galleryItems.length;
            updateMainCarousel();
        });
    }

    if (carouselItemsContainer && galleryItems.length > 0) {
        initializeCarousel();
    }

    // Swipe navigation for popup content
    popupContentElement.addEventListener('touchstart', function(event) {
        if (!popupElement.classList.contains('show')) return;
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
    }, { passive: true });

    popupContentElement.addEventListener('touchmove', function(event) {
        if (!popupElement.classList.contains('show')) return;
        // We only need end coordinates, but could prevent default scroll here if needed
        // and if passive is false for touchstart/touchmove.
        // For now, let browser handle scrolling if swipe is not predominantly horizontal.
    }, { passive: true });

    popupContentElement.addEventListener('touchend', function(event) {
        if (!popupElement.classList.contains('show')) return;
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Check if it's a predominantly horizontal swipe and exceeds threshold
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
            if (galleryItems.length === 0) return;
            if (deltaX > 0) { // Swipe Right (previous item)
                const newIndex = (currentPortfolioCardIndex - 1 + galleryItems.length) % galleryItems.length;
                displayPortfolioCardInPopup(newIndex);
                if (typeof updatePopupOverlayElements === 'function') updatePopupOverlayElements();
            } else { // Swipe Left (next item)
                const newIndex = (currentPortfolioCardIndex + 1) % galleryItems.length;
                displayPortfolioCardInPopup(newIndex);
                if (typeof updatePopupOverlayElements === 'function') updatePopupOverlayElements();
            }
        }
        // Reset touch coordinates for next swipe (optional, but good practice)
        touchStartX = 0;
        touchStartY = 0;
        touchEndX = 0;
        touchEndY = 0;
    }
}); 