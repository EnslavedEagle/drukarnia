require('./js/jquery.eavesdrop')($, window, document);
require('jquery-smooth-scroll');

$('.navbar__list').eavesdrop({
  watchClass: 'section',
  activeClass: 'navbar__list__item--active',
  trackUrl: true,
  offset: 100
});

$('.navbar__list__item__link').smoothScroll({
  speed: 700
});