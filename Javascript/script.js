$(document).ready(function(){
    $('li a').click(function(){
        $.scrollTo( this.hash, 1500, { easing:'swing' });
        return false;
    }); 

    $("body").keydown(function(e) {
        if(e.keyCode == 37) { // left
           e.preventDefault();
          return false;
        }
        else if(e.keyCode == 39) { // right
           e.preventDefault();
          return false;
        }
    });
});

