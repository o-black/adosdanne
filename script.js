document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
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

    const paragraphs = document.querySelectorAll('.card-description');
    
    // Store original text content in a data attribute
    paragraphs.forEach(paragraph => {
        const originalText = paragraph.textContent.trim();
        paragraph.dataset.fullText = originalText;
        
        if (originalText.length > 50) {
            const truncatedText = originalText.slice(0, 50) + '...';
            paragraph.textContent = truncatedText;
        }
    });
    const modal = document.getElementById('modal');
    const modalImage = modal.querySelector('.main-image');
    const modalTitle = modal.querySelector('.modal-text h3');
    const modalDescription = modal.querySelector('.modal-text p');
    const closeButton = modal.querySelector('.close');
    const thumbnailGallery = modal.querySelector('.thumbnail-gallery');
    
    // Sample related images data structure
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
        ]
        ,
        'Typomorphie': [
            '/Diapositive1.jpg',
            '/Mockup_ Cup.jpg',
            '/Mockup_tshirt_totebag.jpg',
        ]
    };
    
    function createThumbnails(projectTitle, mainImageSrc) {
        thumbnailGallery.innerHTML = ''; // Clear existing thumbnails
        
        const images = projectImages[projectTitle] || [];
        console.log(projectImages[projectTitle])
        images.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            const thumbailImgPath = '/assets/Portefolio/';
            thumbnail.src = thumbailImgPath+projectTitle+imgSrc;
            thumbnail.alt = `${projectTitle} view ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            if (imgSrc === mainImageSrc) thumbnail.classList.add('active');
            
            thumbnail.addEventListener('click', () => {
                modalImage.src = thumbailImgPath+projectTitle+imgSrc;
                // Update active state
                thumbnailGallery.querySelectorAll('.thumbnail').forEach(thumb => 
                    thumb.classList.remove('active'));
                thumbnail.classList.add('active');
                
                // Animate main image change
                modalImage.style.opacity = '0';
                setTimeout(() => {
                    modalImage.style.opacity = '1';
                }, 50);
            });
            
            thumbnailGallery.appendChild(thumbnail);
        });
    }
    
    // Updated openModal function
    function openModal(card) {
        const cardImage = card.querySelector('.card-image img');
        const cardTitle = card.querySelector('h4');
        const cardDescription = card.querySelector('.card-description');
        
        modalImage.src = cardImage.src;
        modalImage.alt = cardImage.alt;
        modalTitle.textContent = cardTitle.textContent;
        modalDescription.textContent = cardDescription.getAttribute('data-full-text');
        
        // Add button if it doesn't exist
        let modalButton = modal.querySelector('.modal-button');
        if (!modalButton) {
            modalButton = document.createElement('a');
            modalButton.classList.add('modal-button');
            modalButton.textContent = 'View Project';
            modalButton.href = 'https://www.behance.net/cassandragomez7';
            modalButton.target = '_blank'; // Opens in new tab
            modal.querySelector('.modal-text').appendChild(modalButton);
        } else {
            // Update existing button's href (in case it was changed)
            modalButton.href = 'https://www.behance.net/cassandragomez7';
        }
        
        // Create thumbnails for the project
        createThumbnails(cardTitle.textContent, cardImage.src);
        
        modal.style.display = 'block';
        modal.offsetHeight; // Trigger reflow
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Rest of the modal code remains the same...
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflowX = 'hidden';
            thumbnailGallery.innerHTML = ''; // Clear thumbnails when closing
        }, 300);
    }
    
    // Event listeners
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });
    
    closeButton.addEventListener('click', closeModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function toggleNav() {
        // Toggle navigation
        nav.classList.toggle('nav-active');
        
        // Toggle burger animation
        burger.classList.toggle('toggle');
        
        // Toggle body overflow
        document.body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : 'auto';
    }

    function closeNav() {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        document.body.style.overflow = 'auto';
    }

    // Burger click handler
    burger.addEventListener('click', toggleNav);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            closeNav();
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });
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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('prenom').value;
            const lastName = document.getElementById('nom').value;
            const email = document.getElementById('courriel').value;
            const subject = document.getElementById('sujet').value;
            const message = document.getElementById('message').value;
            
            // Get selected radio button value
            const radioButtons = document.getElementsByName('fav_language');
            let selectedType = '';
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedType = radioButton.nextElementSibling.textContent;
                    break;
                }
            }
            
            // Construct email body
            const emailBody = `
                De: ${firstName} ${lastName}
                Courriel: ${email}
                Type de message: ${selectedType}
                Sujet: ${subject}
                
                Message:
                ${message}
            `.trim();
            
            // Construct mailto URL
            const mailtoUrl = `mailto:your-adosdanne.art@gmail.com?subject=${encodeURIComponent(selectedType + ': ' + subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open default email client
            window.location.href = mailtoUrl;
            
            // Optional: Reset form after submission
            contactForm.reset();
        });
    }
});
