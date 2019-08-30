$(function(){
  $eye = $(".eye__item"); //статичная часть, сам глаз целиком
  $apple = $(".eye__item-apple"); //подвижная часть, радужка
  var x;
  var y;
  var appleX;
  var appleY;
  var eyeWidth = $($eye).width();
  var appleWidth = $($apple).width();
  var appleLeft;
  var appleTop;
  var eyeLeft;
  var eyeTop;
  var appleNewX = appleX;
  var appleNewY = appleY;


  function coords(event){
    appleX = $($apple).position().left;
    appleY = $($apple).position().top;
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
      appleNewX = x - eyeLeft; 
      appleNewY = y - eyeTop;
      if ( x < eyeLeft){
        appleNewX = 5;
      }
      if ( x > eyeLeft + eyeWidth){
        appleNewX = eyeWidth - appleWidth - 5;
      }
      if ( y < eyeTop){
        appleNewY = 5;
      }
      if ( y > eyeTop + eyeWidth){
        appleNewY = eyeWidth - appleWidth - 5;
      }
      if ( x < eyeLeft ){
        appleNewX = 5;
      }
      $($apple[i]).css({"left": appleNewX + "px", "top": appleNewY + "px"})
    }
  }

  // $eye = $(".eye__item"); //статичная часть, сам глаз целиком
  // $apple = $(".eye__item-apple"); //подвижная часть, радужка
  // var mouseX;
  // var mouseY;
  // var eyeX;
  // var eyeY;
  // var appleX;
  // var appleY;
  // var eyeWidth = $($eye).width();
  // var appleWidth = $($apple).width();
  // var appleLeft;
  // var appleTop;
  // var eyeLeft;
  // var eyeTop;
  // var appleNewX = appleX;
  // var appleNewY = appleY;
  // var x1;
  // var x2;
  // var y1;
  // var y2;
  // var border = 2;


  // function coords(event){
  //   eyeX = $($eye).offset().left; //////////позиция глаза/////////
  //   eyeY = $($eye).offset().top; //////////позиция глаза/////////
  //   // appleX = $($apple).position().left;
  //   // appleY = $($apple).position().top;
  //   x1 = eyeX + border;
  //   y1 = eyeY + border;
  //   x2 = eyeX + eyeWidth - appleWidth - border;
  //   y2 = eyeY + eyeWidth - appleWidth - border;
  //   console.log(eyeX, eyeY)
  // }

  // window.onmousemove = function(event){
  //   mouseX = event.pageX;
  //   mouseY = event.pageY;
  //   coords(event);
  //   console.log(mouseX, mouseY);
  //   console.log(x1, x2, y1, y2);

  //   // if (mouseX > x1 && mouseX < x2){
  //   //   appleNewX = mouseX - eyeX; 
  //   // }

  //   // if (mouseY > y1 && mouseY < y2){
  //   //   appleNewY = mouseY - eyeY; 
  //   // }

  //   // if (mouseX < x1){
  //   //   appleNewX = border; 
  //   // }

  //   // if (mouseX > x2){
  //   //   appleNewX = appleWidth - border; 
  //   // }

  //   // if (mouseY < y1 ){
  //   //   appleNewY = border; 
  //   // }

  //   // if ( mouseY > y2){
  //   //   appleNewY = appleWidth - border; 
  //   // }


  //   if (mouseX > x1){
  //     if (mouseX < x2){
  //       appleNewX = mouseX - eyeX; 

  //     }else{
  //       appleNewX = eyeWidth - appleWidth - border; 
  //       console.log(appleNewX )
  //     }
  //   } else {
  //     appleNewX = border; 
  //   }

  //   if (mouseY > y1){
  //     if (mouseY < y2){
  //       appleNewY = mouseY - eyeY; 
  //     }else{
  //       appleNewY = eyeWidth - appleWidth - border; 
  //       console.log(appleNewY )
  //     }
  //   } else {
  //     appleNewY = border; 
  //   }

  //   $($apple).css({"left": appleNewX + "px", "top": appleNewY + "px"})
  // }
})