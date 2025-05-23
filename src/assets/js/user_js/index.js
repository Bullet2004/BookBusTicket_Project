document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlides();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    let slideInterval = setInterval(nextSlide, 5000);

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
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
    
        const visibleHeight = Math.max(
            0,
            Math.min(busImgRect.bottom, windowHeight) - Math.max(busImgRect.top, 0)
        );
    
        const visibilityRatio = visibleHeight / busImgRect.height;
    
        if (visibilityRatio > 0.1) {
            busImg.classList.add("active");
        } else {
            busImg.classList.remove("active");
        }
    });

    document.querySelector('#facebook-btn').addEventListener('click', function () {
        const link = this.querySelector('a'); 
        if (link) {
            link.click(); 
        }
    });
    
    



