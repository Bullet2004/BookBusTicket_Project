
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0; // Chỉ số ảnh hiện tại
    const totalImages = images.length;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Chuyển đến ảnh tiếp theo
        const offset = -currentIndex * 100; // Tính khoảng cách dịch chuyển
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    // Tự động chuyển ảnh mỗi 3 giây
    setInterval(showNextImage, 3000);

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function () {
            const link = this.querySelector('a');
            if (link) {
                link.click(); // Kích hoạt sự kiện nhấp vào thẻ <a>
            }
        });
    });
    

    const bookBtns = document.querySelectorAll(".book-btn");
    const modalClose = document.querySelector(".modal-close");
    const bookModal = document.querySelector(".modal");
    const bookModalContainer = document.querySelector(".modal-container")

    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            bookModal.classList.add("open");
        })
    })

    modalClose.addEventListener('click', function() {
        bookModal.classList.remove("open");
    })

    bookModal.addEventListener('click', function() {
        bookModal.classList.remove("open");
    })

    bookModalContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    })

    document.addEventListener("scroll", function () {
        const busImg = document.querySelector(".bus-img");
        const busImgRect = busImg.getBoundingClientRect();
        const windowHeight = window.innerHeight;
    
        // Tính toán vùng thấy (viewport) của ảnh
        const visibleHeight = Math.max(
            0,
            Math.min(busImgRect.bottom, windowHeight) - Math.max(busImgRect.top, 0)
        );
    
        // Tính tỷ lệ vùng thấy so với chiều cao thực của ảnh
        const visibilityRatio = visibleHeight / busImgRect.height;
    
        if (visibilityRatio > 0.1) {
            // Nếu hơn 10% của ảnh còn thấy, thêm hiệu ứng
            busImg.classList.add("active");
        } else {
            // Nếu hơn 90% bị ẩn, loại bỏ hiệu ứng
            busImg.classList.remove("active");
        }
    });

    document.querySelector('#facebook-btn').addEventListener('click', function () {
        const link = this.querySelector('a'); // "this" ở đây là #facebook-btn
        if (link) {
            link.click(); // Kích hoạt sự kiện nhấp vào thẻ <a>
        }
    });
    
    



