var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween:16,
    setWrapperSize:true,
    width:240,
    autoHeight:true,
    centeredSlides:true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});