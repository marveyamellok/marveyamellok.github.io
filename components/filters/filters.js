$(function(){
  var $left = $(".filter__slider-left");
  var $right = $(".filter__slider-right");

  var lineWidth = $(".filter__slider-line").width();
  var circleWidth = $($left).width()

  var leftPosition = $left.offset();
  var leftPoint = leftPosition.left;
  var rightPoint = leftPoint + lineWidth - circleWidth/2;

  var leftPos = leftPoint;
  var rightPos = rightPoint;

  var $line =$(".filter__slider-line-show");
  
  var leftPos;
  var rightPos;

  var mousedownLeft = false;
  var mousedownRight = false;

  $($left).on("mousedown", function(){
    mousedownLeft = true;
  })

  $($right).on("mousedown", function(){
    mousedownRight = true;
  })

  $(document).on("mouseup", function(){
    mousedownLeft = false;
    mousedownRight = false;
  })

  $(document).on("mousemove", function(event){

    if(mousedownLeft){
      var pos = event.clientX;
      if (event.clientX <= leftPoint || event.clientX >= rightPoint) return;
      leftPos = pos - leftPoint - circleWidth/2;
      $($left).css({"left" : leftPos});
      console.log("left: ", leftPos);
      console.log("right: ", rightPos);
      $($line).css({"left" : leftPos, "width" :  lineWidth - leftPos - circleWidth/2})
    }

    if(mousedownRight){
      var pos = event.clientX;
      if (event.clientX <= leftPoint || event.clientX >= rightPoint) return;
      rightPos = rightPoint - pos - circleWidth/2;
      $($right).css({"right" : rightPos});
      console.log("left: ", leftPos);
      console.log("right: ", rightPos);
      $($line).css({"left" : leftPos, "width" :  lineWidth - rightPos - circleWidth/2})
    }

  })
})