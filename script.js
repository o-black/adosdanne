document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    // Skip carousel initialization if elements don't exist (handled by gallery.js)
    if (!carousel || !dotsContainer || items.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    const totalItems = items.length;
    let isAnimating = false;
    
    // Create dots for each carousel item
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Update dots to reflect active slide
    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Function to update active, prev, and next classes on carousel items
    function updateCards(direction = null) {
        if (isAnimating) return;
        isAnimating = true;

        items.forEach((item, index) => {
            item.classList.remove(
                'active', 'prev', 'next', 'swipe-left-enter', 
                'swipe-left-exit', 'swipe-right-enter', 'swipe-right-exit'
            );
            
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
                item.classList.add('prev');
            } else if (index === (currentIndex + 1) % totalItems) {
                item.classList.add('next');
            }
        });
        
        updateDots();
        setTimeout(() => {
            isAnimating = false;
        }, 400); // Match transition duration
    }

    // Function to navigate to a specific slide
    function goToSlide(index, direction = null) {
        if (isAnimating) return;

        const previousIndex = currentIndex;
        currentIndex = index;
        
        // Add exit animation to current slide
        if (direction === 'left') {
            items[previousIndex].classList.add('swipe-left-exit');
        } else if (direction === 'right') {
            items[previousIndex].classList.add('swipe-right-exit');
        }
        
        updateCards(direction);
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        goToSlide(currentIndex, 'left');
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        goToSlide(currentIndex, 'right');
    }

    // Event listeners for navigation buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch support for swiping
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });

    // Initial setup to show the first item
    updateCards();
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    if (!modal) return; // Exit if modal doesn't exist on the page

    // Truncate card descriptions and store full text
    const allPortfolioCards = document.querySelectorAll('.portfolio-card');
    allPortfolioCards.forEach(card => {
        const p = card.querySelector('.card-description');
        if (p) {
            const originalText = p.textContent.trim();
            p.dataset.fullText = originalText;
            if (originalText.length > 50) {
                p.textContent = originalText.slice(0, 50) + '...';
            }
        }
    });

    const modalImage = modal.querySelector('.main-image');
    const modalTitle = modal.querySelector('.modal-text h3');
    const modalDescription = modal.querySelector('.modal-text p');
    const closeButton = modal.querySelector('.close');
    const thumbnailGallery = modal.querySelector('.thumbnail-gallery');
    
    const portfolioCards = Array.from(document.querySelectorAll('.portfolio-card'));
    let currentProjectIndex = -1;

    const prevProjectButton = modal.querySelector('.prev-project');
    const nextProjectButton = modal.querySelector('.next-project');

    const projectImages = {
        'Affiches': [
            '/Affiche Final 25_VICTORIOUS.jpg',
            '/Banniere moyenne1.jpg',
            '/Banniere_Opulence_v1.jpg',
            '/FINAL FRONT COVER.jpg',
            '/Montage.jpg'
        ],
        'Appolo': [
            '/Diapositive6.jpg',
            '/Diapositive17.jpg',
            '/Diapositive19.jpg',
            '/Moodboard.jpg',
            '/Moodboard 2.jpg',
            '/Moodboard 3.jpg'
        ],
        'Cola couronne': [
            '/ColaCouronne_GrandeCanette.jpg',
            '/ColaCouronne_PetiteCannette.jpg',
            '/Current version.jpg',
            '/Prototype 1.jpg',
            '/Prototype 2.jpg',
            '/Prototype 3.jpg',
        ],
        'Librairies Racines': [
            '/e15df277-ae5d-46c0-a4e1-14a560f4a981-5.jpg',
            '/e15df277-ae5d-46c0-a4e1-14a560f4a981-6.jpg',
            '/e15df277-ae5d-46c0-a4e1-14a560f4a981-8.jpg',
            '/Packaging + Promotionnel.jpg'
        ],
        'Pizzeria Olive et Lune': [
            '/2c3bd1e5-3e0b-4e5b-9b99-e4d5fee6cac6-3.jpg',
            '/2c3bd1e5-3e0b-4e5b-9b99-e4d5fee6cac6-5.jpg',
            '/2c3bd1e5-3e0b-4e5b-9b99-e4d5fee6cac6-9.jpg',
            '/2c3bd1e5-3e0b-4e5b-9b99-e4d5fee6cac6-10.jpg',
            '/MoodBoard 1.jpg',
            '/MoodBoard 2.jpg',
            '/MoodBoard 3.jpg',
        ],
        'Typomorphie': [
            '/Diapositive1.jpg',
            '/Mockup_ Cup.jpg',
            '/Mockup_tshirt_totebag.jpg',
        ]
    };

    const projectDescriptions = {
        'Affiches': [
            "Cet exercice avait pour but de créer une affiche fictive pour le Festival de la typographie. On a préféré avec un style simple comme pour le slogan ' Less is more'.",
            "Cet exercice avait pour but de créer une affiche fictive pour le Festival de la typographie. On a préféré avec un style simple comme pour le slogan ' Less is more'.",
            "L'annonce originale du parfum était un fond uni avec la bouteille au centre. On a rajouté le background, choisi une typographie adaptée et utilisé la répétition pour cet effet d'écho sur l'eau.",
            "Pour la couverture de mon 1er recueil de poème que j'ai sorti pour mes 31 ans j'ai dessiné cette illustration. Une rétrospection sur l'expérience acquise depuis les 30 dernières années et les nouvelles péripéties à venir.",
            "L'exercice était de créer la page couverture d'un recueil de photomontage. Étant une fan de ''dimensions'' j'ai voulu jouer avec les perspectives et les matières en représentant une fille marchant sur une rivière de tournesol. Le pont étant un portail vers un autre monde."
        ]
    };

    function updateThumbnails(projectTitle, currentMainImageSrc) {
        thumbnailGallery.innerHTML = '';
        const images = projectImages[projectTitle] || [];
        const descriptions = projectDescriptions[projectTitle] || [];

        images.forEach((imgFile, index) => {
            const thumbnail = document.createElement('img');
            const thumbnailSrcPath = `/assets/Portefolio/${projectTitle}${imgFile}`;
            thumbnail.src = thumbnailSrcPath;
            thumbnail.alt = `${projectTitle} thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');

            if (descriptions[index]) {
                thumbnail.dataset.description = descriptions[index];
            }

            const currentImageFilename = decodeURIComponent(currentMainImageSrc.split('/').pop());
            if (imgFile.endsWith(currentImageFilename)) {
                thumbnail.classList.add('active');
                if (projectTitle.trim() === 'Affiches' && thumbnail.dataset.description) {
                    modalDescription.textContent = thumbnail.dataset.description;
                }
            }

            thumbnail.addEventListener('click', () => {
                modalImage.src = thumbnailSrcPath;
                if (thumbnail.dataset.description) {
                    modalDescription.textContent = thumbnail.dataset.description;
                }
                thumbnailGallery.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
                modalImage.style.opacity = '0';
                setTimeout(() => {
                    modalImage.style.opacity = '1';
                }, 50);
            });
            thumbnailGallery.appendChild(thumbnail);
        });
    }

    function showProjectInModal(index) {
        if (index < 0 || index >= portfolioCards.length) return;
        
        const card = portfolioCards[index];
        const image = card.querySelector('img');
        const title = card.querySelector('h4').textContent;
        const cardDescriptionElement = card.querySelector('.card-description');
        const description = cardDescriptionElement.getAttribute('data-full-text') || cardDescriptionElement.textContent;

        modalImage.src = image.src;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        updateThumbnails(title, image.src);

        currentProjectIndex = index;
    }
    
    function openModal(card) {
        const index = portfolioCards.indexOf(card);
        if (index === -1) return;
        
        showProjectInModal(index);

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => modal.classList.add('show'), 10);
    }
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            modal.style.display = 'none';
        }, 300);
    }

    portfolioCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    if(closeButton) closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    if(prevProjectButton) {
        prevProjectButton.addEventListener('click', () => {
            if (portfolioCards.length === 0) return;
            currentProjectIndex = (currentProjectIndex - 1 + portfolioCards.length) % portfolioCards.length;
            showProjectInModal(currentProjectIndex);
        });
    }

    if(nextProjectButton) {
        nextProjectButton.addEventListener('click', () => {
            if (portfolioCards.length === 0) return;
            currentProjectIndex = (currentProjectIndex + 1) % portfolioCards.length;
            showProjectInModal(currentProjectIndex);
        });
    }

    const modalContent = modal.querySelector('.modal-content');
    let modalTouchStartX = 0;
    
    if(modalContent) {
        modalContent.addEventListener('touchstart', (e) => {
            if (e.target.closest('.thumbnail-gallery')) {
                modalTouchStartX = 0;
                return;
            }
            modalTouchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modalContent.addEventListener('touchend', (e) => {
            if (modalTouchStartX === 0) return;
            
            const modalTouchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;

            if (modalTouchStartX - modalTouchEndX > swipeThreshold) {
                if (portfolioCards.length > 0) {
                    currentProjectIndex = (currentProjectIndex + 1) % portfolioCards.length;
                    showProjectInModal(currentProjectIndex);
                }
            } else if (modalTouchEndX - modalTouchStartX > swipeThreshold) {
                if (portfolioCards.length > 0) {
                    currentProjectIndex = (currentProjectIndex - 1 + portfolioCards.length) % portfolioCards.length;
                    showProjectInModal(currentProjectIndex);
                }
            }
            modalTouchStartX = 0;
        }, { passive: true });
    }
});

// General navigation (burger menu)
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    function toggleNav() {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    }

    if(burger) burger.addEventListener('click', toggleNav);

    function closeNav(e) {
        if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            toggleNav();
        }
    }
    document.addEventListener('click', closeNav);
});

// Image loading handler
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Standardize modal images
    const modalImages = document.querySelectorAll('.modal-image');
    modalImages.forEach(img => {
        img.addEventListener('load', function() {
            if (this.naturalWidth > this.naturalHeight) {
                this.style.width = '100%';
                this.style.height = 'auto';
            } else {
                this.style.height = '80vh';
                this.style.width = 'auto';
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values
//             const firstName = document.getElementById('prenom').value;
//             const lastName = document.getElementById('nom').value;
//             const email = document.getElementById('courriel').value;
//             const subject = document.getElementById('sujet').value;
//             const message = document.getElementById('message').value;
            
//             // Get selected radio button value
//             const radioButtons = document.getElementsByName('fav_language');
//             let selectedType = '';
//             for (const radioButton of radioButtons) {
//                 if (radioButton.checked) {
//                     selectedType = radioButton.nextElementSibling.textContent;
//                     break;
//                 }
//             }
            
//             // Construct email body
//             const emailBody = `
//                 De: ${firstName} ${lastName}
//                 Courriel: ${email}
//                 Type de message: ${selectedType}
//                 Sujet: ${subject}
                
//                 Message:
//                 ${message}
//             `.trim();
            
//             // Construct mailto URL
//             const mailtoUrl = `mailto:your-adosdanne.art@gmail.com?subject=${encodeURIComponent(selectedType + ': ' + subject)}&body=${encodeURIComponent(emailBody)}`;
            
//             // Open default email client
//             window.location.href = mailtoUrl;
            
//             // Optional: Reset form after submission
//             contactForm.reset();
//         });
//     }
// });
