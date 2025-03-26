// Lấy các thành phần cần thiết
const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.intro-slider-container');

// Lặp qua từng dot để gắn sự kiện click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Xóa trạng thái active khỏi tất cả dots
        dots.forEach(d => d.classList.remove('active'));

        // Thêm trạng thái active cho dot được nhấn
        dot.classList.add('active');

        // Dịch chuyển slider-container theo chỉ số slide
        const offset = -index * 100; // Mỗi slide chiếm 100% chiều rộng
        sliderContainer.style.transform = `translateX(${offset}%)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is 2/3 visible in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Calculate how much of the element is visible
        const elementHeight = rect.height;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if element is 2/3 visible
        const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
        const visibilityRatio = visibleHeight / elementHeight;
        
        return visibilityRatio >= 0.67; // 2/3 = 0.67
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
        const reasonCards = document.querySelectorAll('.reason-card');
        
        reasonCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.animationPlayState = 'running';
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Initial check for elements in viewport
    handleScrollAnimation();
});
