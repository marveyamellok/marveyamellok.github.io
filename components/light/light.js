$(function(){
  var x;
  var y;
  var width = $(window).width();
  var height = $(window).height();
  var centerX = width / 2;
  var centerY = height / 2;
  var $light = $(".light__block-light");
  var $switch = $(".light__switch");
  var $fon = $(".light__fon");

  window.onmousemove = function(event){
    x = event.pageX;
    y = event.pageY;
    $($light).css({"transform": "translate(" + (x - centerX) + "px, " + (y - centerY) + "px)"})
  }

  $($switch).on("click", function(){
    if ($(this).prop("checked")){
      $($light).css({"opacity": "0"});
      $($fon).css({"opacity": "0"});
    } else {
      $($light).css({"opacity": "1"})
      $($fon).css({"opacity": "1"});
    }
  })



})