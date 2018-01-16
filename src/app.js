require('jquery-smooth-scroll');
require('./js/jquery.eavesdrop')($, window, document);
require('./js/jquery.visible')($);

$('.navbar__list').eavesdrop({
  watchClass: 'section',
  activeClass: 'navbar__list__item--active',
  trackUrl: true,
  offset: 250
});

$('.navbar__list__item__link').smoothScroll({
  offset: -80,
  speed: 700
});


$animatables = $('.site-header, .section-offer, .section-history__item, .section-history__item--big, .section-contact');

$animatables.each(function () {
  $(this).addClass('off-screen');
});

function checkVisible() {
  $animatables.each(function() {
    $this = $(this);
    if ($this.visible()) {
      $this.removeClass('off-screen');
    }
  })
}
$(window).on('scroll resize', checkVisible);
checkVisible();