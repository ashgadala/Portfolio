$(document).ready(function() {

  $('a').click(function() {

    $('a').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('.wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });

//   $(window).resize(function() {
//     resizePanel();
//   });

});

// function resizePanel() {

//   width = $(window).width();
//   height = $(window).height();

//   mask_width = width * $('.item').length;

//   $('#debug').html(width + ' ' + height + ' ' + mask_width);

//   $('#wrapper, .item').css({
//     width: width,
//     height: height
//   });
//   $('#mask').css({
//     width: mask_width,
//     height: height
//   });
//   $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

// }