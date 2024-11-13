// document.addEventListener('DOMContentLoaded', function() {
//     const carousel = document.querySelector('.carousel-items');
//     const items = document.querySelectorAll('.carousel-item');
//     const prevButton = document.querySelector('.carousel-button.prev');
//     const nextButton = document.querySelector('.carousel-button.next');
//     const dotsContainer = document.querySelector('.carousel-dots');
    
//     let currentIndex = 0;
//     const totalItems = items.length;
//     let isAnimating = false;
    
//     // Create dots for each carousel item
//     items.forEach((_, index) => {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//         if (index === 0) dot.classList.add('active');
//         dot.addEventListener('click', () => goToSlide(index));
//         dotsContainer.appendChild(dot);
//     });
    
//     // Update dots to reflect active slide
//     function updateDots() {
//         document.querySelectorAll('.dot').forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentIndex);
//         });
//     }

//     // Function to update active, prev, and next classes on carousel items
//     function updateCards(direction = null) {
//         if (isAnimating) return;
//         isAnimating = true;

//         items.forEach((item, index) => {
//             item.classList.remove(
//                 'active', 'prev', 'next', 'swipe-left-enter', 
//                 'swipe-left-exit', 'swipe-right-enter', 'swipe-right-exit'
//             );
            
//             if (index === currentIndex) {
//                 item.classList.add('active');
//             } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
//                 item.classList.add('prev');
//             } else if (index === (currentIndex + 1) % totalItems) {
//                 item.classList.add('next');
//             }
//         });
        
//         updateDots();
//         setTimeout(() => {
//             isAnimating = false;
//         }, 400); // Match transition duration
//     }

//     // Function to navigate to a specific slide
//     function goToSlide(index, direction = null) {
//         if (isAnimating) return;

//         const previousIndex = currentIndex;
//         currentIndex = index;
        
//         // Add exit animation to current slide
//         if (direction === 'left') {
//             items[previousIndex].classList.add('swipe-left-exit');
//         } else if (direction === 'right') {
//             items[previousIndex].classList.add('swipe-right-exit');
//         }
        
//         updateCards(direction);
//     }

//     // Function to go to the next slide
//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalItems;
//         goToSlide(currentIndex, 'left');
//     }

//     // Function to go to the previous slide
//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//         goToSlide(currentIndex, 'right');
//     }

//     // Event listeners for navigation buttons
//     nextButton.addEventListener('click', nextSlide);
//     prevButton.addEventListener('click', prevSlide);

//     // Keyboard navigation
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'ArrowLeft') prevSlide();
//         if (e.key === 'ArrowRight') nextSlide();
//     });

//     // Touch support for swiping
//     let touchStartX = 0;
//     let touchEndX = 0;
    
//     carousel.addEventListener('touchstart', (e) => {
//         touchStartX = e.changedTouches[0].screenX;
//     });

//     carousel.addEventListener('touchend', (e) => {
//         touchEndX = e.changedTouches[0].screenX;
//         if (touchStartX - touchEndX > 50) {
//             nextSlide();
//         } else if (touchEndX - touchStartX > 50) {
//             prevSlide();
//         }
//     });

//     // Initial setup to show the first item
//     updateCards();
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const modal = document.getElementById('modal');
//     const modalImage = modal.querySelector('.main-image');
//     const modalTitle = modal.querySelector('.modal-text h3');
//     const modalDescription = modal.querySelector('.modal-text p');
//     const closeButton = modal.querySelector('.close');
//     const thumbnailGallery = modal.querySelector('.thumbnail-gallery');
    
//     // Sample related images data structure
//     const projectImages = {
//         'Logo Typomorphose': [
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600'
//         ],
//         'Livre de comptines': [
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600'
//         ],
//         'Les fables de La Fontaine': [
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600'
//         ],
//         'Logo Couronne de co': [
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600',
//             '/api/placeholder/800/600'
//         ]
//     };
    
//     function createThumbnails(projectTitle, mainImageSrc) {
//         thumbnailGallery.innerHTML = ''; // Clear existing thumbnails
        
//         const images = projectImages[projectTitle] || [];
//         images.forEach((imgSrc, index) => {
//             const thumbnail = document.createElement('img');
//             thumbnail.src = imgSrc;
//             thumbnail.alt = `${projectTitle} view ${index + 1}`;
//             thumbnail.classList.add('thumbnail');
//             if (imgSrc === mainImageSrc) thumbnail.classList.add('active');
            
//             thumbnail.addEventListener('click', () => {
//                 modalImage.src = imgSrc;
//                 // Update active state
//                 thumbnailGallery.querySelectorAll('.thumbnail').forEach(thumb => 
//                     thumb.classList.remove('active'));
//                 thumbnail.classList.add('active');
                
//                 // Animate main image change
//                 modalImage.style.opacity = '0';
//                 setTimeout(() => {
//                     modalImage.style.opacity = '1';
//                 }, 50);
//             });
            
//             thumbnailGallery.appendChild(thumbnail);
//         });
//     }
    
//     // Updated openModal function
//     function openModal(card) {
//         const cardImage = card.querySelector('.card-image img');
//         const cardTitle = card.querySelector('h4');
//         const cardDescription = card.querySelector('.card-description');
        
//         modalImage.src = cardImage.src;
//         modalImage.alt = cardImage.alt;
//         modalTitle.textContent = cardTitle.textContent;
//         modalDescription.textContent = cardDescription.textContent;
        
//         // Create thumbnails for the project
//         createThumbnails(cardTitle.textContent, cardImage.src);
        
//         modal.style.display = 'block';
//         modal.offsetHeight; // Trigger reflow
//         modal.classList.add('show');
//         document.body.style.overflow = 'hidden';
//     }
    
//     // Rest of the modal code remains the same...
    
//     // Close modal function
//     function closeModal() {
//         modal.classList.remove('show');
//         setTimeout(() => {
//             modal.style.display = 'none';
//             document.body.style.overflow = 'auto';
//             thumbnailGallery.innerHTML = ''; // Clear thumbnails when closing
//         }, 300);
//     }
    
//     // Event listeners
//     document.querySelectorAll('.portfolio-card').forEach(card => {
//         card.addEventListener('click', () => openModal(card));
//     });
    
//     closeButton.addEventListener('click', closeModal);
    
//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             closeModal();
//         }
//     });
    
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape' && modal.style.display === 'block') {
//             closeModal();
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });

    

});