
/*-----------
CHANGE COLOR WHEN SCROLL
------------*/ 
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


/*-----------
HOVER DROPDOWN
------------*/ 
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {

    document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

      everyitem.addEventListener('mouseover', function (e) {

        let el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }

      });
      everyitem.addEventListener('mouseleave', function (e) {
        let el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
      })
    });

  }
  // end if innerWidth
});

/*-----------
CAROUSEL CARDS
------------*/ 
//Carousel Redes Sociais
$('.redes-sociais-carousel').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//Carousel Serviços

if (window.matchMedia("(max-width:400px)").matches) {
  $('.card-servicos').slick({
    infinite: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  });
} else {
  $('.card-servicos').slick({
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });
}


