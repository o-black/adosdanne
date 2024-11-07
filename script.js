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
