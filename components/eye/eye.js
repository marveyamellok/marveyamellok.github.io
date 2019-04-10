$(function(){
  $eye = $(".eye__item");
  $apple = $(".eye__item-apple");
  var x;
  var y;
  var appleX;
  var appleY;
  var eyeWidth = $($eye).width();
  var appleWidth = $($apple).width();
  // var appleLeft = $($apple).position().left;
  // var appleTop = $($apple).position().top;
  // var eyeLeft = $($eye).offset().left;
  // var eyeTop = $($eye).offset().top;
  var appleLeft;
  var appleTop;
  var eyeLeft;
  var eyeTop;
  var appleNewX = appleX;
  var appleNewY = appleY;


  function coords(event){
    appleX = $($apple).position().top;
    appleY = $($apple).position().left;
  }

  window.onmousemove = function(event){
    x = event.pageX;
    y = event.pageY;
    coords(event);

    for (var i = 0; i < $eye.length; i++){
      eyeLeft = $($eye[i]).offset().left;
      eyeTop = $($eye[i]).offset().top;
      appleLeft = $($apple[i]).position().left;
      appleTop = $($apple[i]).position().top;

      console.log(eyeLeft, eyeTop)
      console.log(appleLeft, appleTop)


      appleNewX = x - eyeLeft; 
      appleNewY = y - eyeTop;

      if ( x > eyeLeft + eyeWidth - appleWidth - appleLeft){
        appleNewX = eyeWidth - appleWidth - appleLeft;
      }

      if ( x < eyeLeft ){
        appleNewX = appleLeft;
      }

      if ( y > eyeTop + eyeWidth - appleWidth - appleTop){
        appleNewY = eyeWidth - appleWidth - appleTop;
      }

      if ( y < eyeTop ){
        appleNewY = appleTop;
      }
      
      $($apple[i]).css({"left": appleNewX + "px", "top": appleNewY + "px"})
    }

    
  }
})