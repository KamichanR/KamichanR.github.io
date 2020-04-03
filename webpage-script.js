$(function() {
  $('.picture-slide').slick({
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    speed: 1000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });

  $('.about-text').click(function() {
    var $detail = $(this).find('.about-detail');
    if ($detail.hasClass('open')) {
      $detail.removeClass('open')
      $detail.slideUp();
    } else {
      $detail.addClass('open')
      $detail.slideDown();
    };
  });

  $('.menu-select').click(function() {
    $('.select-active').removeClass('select-active');
    $('.menu-active').removeClass('menu-active');
    var clickedIndex = $('.menu-select').index($(this));
    $('.menu-content').eq(clickedIndex).addClass('menu-active');
  });

  $('.header-list a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html body').animate({
      'scrollTop': position
    });
  });
});
