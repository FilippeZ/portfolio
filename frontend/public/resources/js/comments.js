document.addEventListener("DOMContentLoaded", () => {
    // Check if Swiper is loaded
    if (typeof Swiper === 'undefined') {
        console.error("Swiper.js library is not loaded. Comments slider will not work.");
        return;
    }

    var swiper = new Swiper(".swiper-container", {
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        mousewheel: true,
        slidesPerView: "auto",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        zoom: false,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            dynamicBullets: true,
            clickable: true,
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});