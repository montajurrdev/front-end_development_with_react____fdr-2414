var containerEl = document.querySelector(".imgPart");

var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
  },
  animation: {
    effects: "fade translateZ(-100px)",
  },
});



$('.sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
 prevArrow: '<i class="fa-solid fa-circle-chevron-left prev"></i>',
 nextArrow: '<i class="fa-solid fa-circle-chevron-right next"></i>',
 dots:true,
});



// {/*  */}