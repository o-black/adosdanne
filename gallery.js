document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelector('.carousel-items');
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
            date: 'Mars 2024',
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
            date: 'Mars 2024',
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
            date: 'Mars 2024',
            fullDescription: 'Une Vénus en méditation devant le mouvement des motif construisant un labyrinthe de possibles itinéraire.',
            price: '614$',
            size: '22 x 28 in',
            material: 'Acrylique'
        },
        {
            image: '/assets/Galerie/compressed/Ready Paintings/Men.jpg',
            title: 'Men',
            description: 'L’encrage du noyau traditionnel familiale.',
            date: 'Mars 2024',
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
            title: 'A throne’s Spirit ',
            description: 'Le bois, symbole de sagesse ancestrale...',
            date: 'Mars 2024',
            fullDescription: 'Le bois, symbole de sagesse ancestrale et de force spirituel, semble être le parfait matériel pour la construction du trône de notre esprit; inséminer par la stabilité. C’est cette recherche de tranquillité mais aussi cette espace de profondeur présent dans nos tripes qui explique le fond de la toile. On y retrouve aussi un concept développé pas l’artiste comme dossier du trône : Les colored Queens. Finalement le une piscine pour siège pour permettre à l’esprit sirène de se ressourcer étant dans son élément intuitif.',
            price: '1160$',
            size: '24 x 30 in',
            material: 'Acrylique et pastel à l’huile'
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
            title: 'The invisible women',
            description: 'La matière du noyau traditionnel familiale.',
            date: '',
            fullDescription: 'La matière du noyau traditionnel familiale.',
            price: '300$',
            size: '19.7 x 23.6 in',
            material: 'Acrylique'
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
            fullDescription: 'Ce panneau est initialement initié par le désir de créer un genre de casse-tête. Les plus petites plaques devraient être interchangeables mais faute de temps et de ressources j’ai préféré les collés à la planche. Chaque Vénus est dans la pause du mouvement. Savourer du moment présent pour cette seconde de réalisation… tout en regardant l’eau qui continue de suivre son cours symbolisant, le temps, la réalité la plus décisive qui nous échappera toujours.',
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
            price: '720$',
            size: '0 x 0 in',
            material: ''
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
            fullDescription: 'Des ténèbres à la lumière, on manifeste notre véritable nature. Les marques blanches de mes Vénus célébrant les blessures transformées en page blanche, l’opportunité de se redéfinir en suivant la moulure de notre corps, en les acceptant comme une orientation de l’avenir.',
            price: '1120$',
            size: '19.7 x 49.2 in',
            material: 'Acrylique sur panneau mdf'
        },
    ];
    
    let currentIndex = 0;

    // Create cards
    galleryItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-item';
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


    
    // Add popup HTML to the page
    const popupHTML = `
        <div class="popup">
            <div class="popup-content">
                <span class="close">&times;</span>
                <div class="popup-image-container">
                    <button class="popup-nav-button popup-nav-prev">&#10094;</button>
                    <img class="popup-image" src="" alt="">
                    <button class="popup-nav-button popup-nav-next">&#10095;</button>
                    <div class="dot-navigation"></div>
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

    const popup = document.querySelector('.popup');
    const popupImage = popup.querySelector('.popup-image');
    const closeButton = popup.querySelector('.close');

    // Update the relatedImages object to remove extra spaces in keys
    const relatedImages = {
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
        'Molding': [
            '/assets/Galerie/compressed/Ready Paintings/Molding 1.jpg',
            '/assets/Galerie/compressed/Ready Paintings/Molding 3.jpg',
        ],
        'My throne_s Spirit': [
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 1.JPG',
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 2.JPG',
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 3.JPG',
            '/assets/Galerie/compressed/Ready Paintings/My throne_s Spirit 4.JPG',
        ],
        'The invisible women': [
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
        
        // Create array with main image first, followed by related images
        const allImages = [mainImage];
        if (relatedImages[title.trim()]) {
            allImages.push(...relatedImages[title.trim()]);
        }
        
        // Set all information
        popupImage.src = mainImage;
        popup.querySelector('.popup-title').textContent = title;
        popup.querySelector('.popup-date').textContent = item.date;
        popup.querySelector('.popup-price strong').textContent = item.price || 'Prix sur demande';
        
        // Format material and size together
        const specs = item.material ? 
            `<strong>${item.material}</strong>${item.size ? ` - ${item.size}` : ''}` : 
            (item.size ? item.size : '');
        popup.querySelector('.popup-specs').innerHTML = specs;
        
        popup.querySelector('.popup-description').textContent = item.fullDescription;

        // Create dots
        const dotNavigation = popup.querySelector('.dot-navigation');
        dotNavigation.innerHTML = '';
        allImages.forEach((_, index) => {
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
                    currentImageIndex = (currentImageIndex + 1) % allImages.length;
                } else {
                    // Swipe right - previous image
                    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
                }
                updateImage();
            }
        }

        function updateImage() {
            popupImage.src = allImages[currentImageIndex];
            // Update dot active state
            dotNavigation.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentImageIndex);
            });
        }

        // Navigation buttons (for desktop)
        const prevButton = popup.querySelector('.popup-nav-prev');
        const nextButton = popup.querySelector('.popup-nav-next');
        
        prevButton.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
            updateImage();
        };
        
        nextButton.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % allImages.length;
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