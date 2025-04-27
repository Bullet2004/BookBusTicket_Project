const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.intro-slider-container');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));

        dot.classList.add('active');

        const offset = -index * 100; 
        sliderContainer.style.transform = `translateX(${offset}%)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        const elementHeight = rect.height;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
        const visibilityRatio = visibleHeight / elementHeight;
        
        return visibilityRatio >= 0.25; 
    }

    function handleScrollAnimation() {
        const reasonCards = document.querySelectorAll('.reason-card');
        
        reasonCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.animationPlayState = 'running';
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);

    handleScrollAnimation();
});
