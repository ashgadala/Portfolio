$(document).ready(function() {

  //$(window).resize(function(){location.reload();});

  if ( $( window ).width() > 708 ){
    $('a').click(function() {
      $('a').removeClass('selected');
      $(this).addClass('selected');
      current = $(this);
      $('.wrapper').scrollTo($(this).attr('href'), 800);
      return false;
    });

    $('.quote').typeIt({
     strings: ["Hi, I am Aakriti.", "I believe a great design can make a good idea even better.", "I create websites that have both:", "BEAUTY and BRAIN."],
     speed: 150,
     autoStart: true
  });

    $(".move-ahead").delay(22500).show("fade", 2000);
  }

  $('.nav-menu-bars').click(function(){
    $( ".nav-menu" ).toggle("fade", "slow");
    //$(this).find('i').toggleClass('fa-bars fa-arrow-right')
  });

  
  if ( $( window ).width() < 708 ){
    $(".nav-menu-bars").click(function() { 
      return (this.tog = !this.tog) ? menu() : menuClose();
    });

    $('.nav-menu ul li a').click(function(){
     $('.nav-menu').hide();
     $('body').animate({ left: "0px"});
   });

   $('.quote').typeIt({
     strings: ["I believe a great design can make a good idea even better."],
     speed: 150,
     autoStart: true
  });

  $(".move-ahead").delay(10000).show("fade", 2000);
}
  
});

function menu() {
    $('body').animate({ left: "130px"}, 200);
}

function menuClose() {
  $( ".nav-menu" ).hide();
  $('body').animate({ left: "0px"}, 200);
}
