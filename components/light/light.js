$(function(){
  var x;
  var y;
  var width = $(window).width();
  var height = $(window).height();
  var centerX = width / 2;
  var centerY = height / 2;
  var $light = $(".light__block-light");


  // function coords(event){
  //   appleX = $($apple).position().left;
  //   appleY = $($apple).position().top;
  // }

  window.onmousemove = function(event){
    x = event.pageX;
    y = event.pageY;
    console.log(width, height);

    $($light).css({"transform": "translate(" + (x - centerX) + "px, " + (y - centerY) + "px)"})
  }

})