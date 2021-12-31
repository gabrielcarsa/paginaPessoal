//Change color nav when scroll
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

