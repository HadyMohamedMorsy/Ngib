const swiperProjects =new Swiper('.swiper-projects', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
  });