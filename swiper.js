var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 50, 
        depth: 30, 
        modifier: 15, 
        slideShadows: true,
        
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