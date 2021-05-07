$(document).ready(function () {
  /*------------------ Video Popupp --------------------------*/
  const videoSrc = $('#player-1').attr('src');
  $('.video-play-btn, .video-popup').on('click', function () {
    if ($('.video-popup').hasClass('open')) {
      $('.video-popup').removeClass('open');
      $('#player-1').attr('src', '');
    } else {
      $('.video-popup').addClass('open');
      if ($('#player-1').attr('src') == '') {
        $('#player-1').attr('src', videoSrc);
      }
    }
  });
  $('.about-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //  Counter Js

  if ($('.single-counter').length) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });
  }
});
