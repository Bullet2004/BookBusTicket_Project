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
