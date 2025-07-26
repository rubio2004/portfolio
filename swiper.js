function getCoverflowSettings() {
    const width = window.innerWidth;
    if (width < 640) { // mobile
        return { stretch: 20, depth: 10, modifier: 8 };
    } else if (width < 768) { // small tablet
        return { stretch: 20, depth: 12, modifier: 10 };
    } else if (width < 1024) { // tablet
        return { stretch: 35, depth: 18, modifier: 12 };
    } else { // desktop
        return { stretch: 50, depth: 25, modifier: 15 };
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
let lastBreakpoint = getBreakpoint(window.innerWidth);

function getBreakpoint(width) {
    if (width < 640) return 'mobile';
    if (width < 768) return 'small-tablet';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

window.addEventListener('resize', function () {
    const currentBreakpoint = getBreakpoint(window.innerWidth);
    if (currentBreakpoint !== lastBreakpoint) {
        if (swiper && swiper.destroy) swiper.destroy(true, true);
        swiper = createSwiper();
        lastBreakpoint = currentBreakpoint;
    }
});