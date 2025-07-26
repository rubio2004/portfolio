function getCoverflowSettings() {
    const width = window.innerWidth;
    if (width <= 425) { // mobile
        return { stretch: 10, depth: 20, modifier: 20 };
    } else if (width <= 640) { // mobile
        return { stretch: 20, depth: 20, modifier: 20 };
    } else if (width <= 768) { // small tablet
        return { stretch: 20, depth: 12, modifier: 25 };
    } else if (width <= 1024) { // tablet
        return { stretch: 35, depth: 18, modifier: 20 };
    } else if (width <= 1440) { // tablet
        return { stretch: 40, depth: 10, modifier: 28 };
    } else { // desktop
        return { stretch: 50, depth: 8, modifier: 25 };
    }
}

function createSwiper() {
    const coverflow = getCoverflowSettings();
    return new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        speed: 600,
        preventClicks: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: coverflow.stretch,
            depth: coverflow.depth,
            modifier: coverflow.modifier,
            slideShadows: false,
        },
        on: {
            click(event) {
                swiper.slideTo(this.clickedIndex, 600, true);
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

let swiper = createSwiper();

window.addEventListener('resize', function () {
    if (swiper && swiper.destroy) swiper.destroy(true, true);
    swiper = createSwiper();
});