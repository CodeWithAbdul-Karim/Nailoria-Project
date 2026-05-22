var swiper = new Swiper(".reviewSlider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    watchOverflow: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

const slides = document.querySelectorAll(".swiper-slide");

slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
        swiper.autoplay.stop();
    });

    slide.addEventListener("mouseleave", () => {
        swiper.autoplay.start();
    });
});