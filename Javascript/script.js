$(document).ready(function() {

  $('a').click(function() {
    $('a').removeClass('selected');
    $(this).addClass('selected');
    current = $(this);
    $('.wrapper').scrollTo($(this).attr('href'), 800);
    return false;
  });

  
});
