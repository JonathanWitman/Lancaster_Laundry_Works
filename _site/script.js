$(document).ready(function(){

    let sizeSmall = window.matchMedia("(max-width: 767px)");
    let showBurger = 1;

//Toggle Nav
    if (jQuery(window).width() < 767) {
      $(".navigation").hide();
      $('.hamburger').show();
    } else {
      $('.hamburger').hide();
      $(".navigation").show();
    }
    jQuery(window).resize(function () {
      if (jQuery(window).width() < 767) {
        if (showBurger == 1) {
          $(".navigation").hide();
        }
        $('.hamburger').show();
      } else {
        $('.hamburger').hide();
        $(".navigation").show();
      }
    });
    $(".hamburger").click(function(){
      if (showBurger == 1) {
        $(".navigation").show();
        showBurger = showBurger - 1;
      } else {
        $(".navigation").hide();
        showBurger = showBurger + 1;
      }
    });

});
