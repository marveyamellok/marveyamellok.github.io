$(function(){
  var $left = $(".filter__slider-left");
  var $right = $(".filter__slider-right");
  var $line = $(".filter__slider-line-show");
  var $table = $(".table");
  var price = document.getElementById("priceItem"); 

  var lineWidth = $(".filter__slider-line").width();
  var circleWidth = $($left).width()

  var leftPosition = $left.offset();
  var leftPoint = leftPosition.left;
  var rightPoint = leftPoint + lineWidth - circleWidth / 2;

  var leftPos = leftPoint;
  var rightPos = rightPoint;
  
  var leftPos = 0;
  var rightPos = lineWidth;

  var mousedownLeft = false;
  var mousedownRight = false;

  var prices = [];
  var priceElms = $(price).children()

  for (var i = 0; i < priceElms.length; i++){
    if (!$(priceElms[i]).hasClass("table__header")){
      prices.push($(priceElms[i]).html());
    }
  }

  prices.sort(compareNumbers);
  var min = prices[0];
  var max = prices[prices.length - 1];

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
      leftPos = pos - leftPoint - circleWidth / 2;
      $($left).css({"left" : leftPos});
      $($line).css({"left" : leftPos, "width" :  lineWidth - rightPos - leftPos - circleWidth / 2});

      var leftPersent = Math.round((leftPos + circleWidth / 2)/lineWidth * 100)
      var leftRes = max / 100 * leftPersent;
      $(".filter__slider-left-info").html(leftRes);
    }

    if(mousedownRight){
      var pos = event.clientX;
      if (event.clientX <= leftPoint || event.clientX >= rightPoint) return;
      rightPos = rightPoint - pos - circleWidth / 2;
      $($right).css({"right" : rightPos});
      $($line).css({"left" : leftPos, "width" :  lineWidth - rightPos - leftPos - circleWidth / 2});

      var rightPersent = Math.round(100 - ((rightPos + circleWidth / 2)/lineWidth) * 100);
      var rightRes = max / 100 * rightPersent;
      $(".filter__slider-right-info").html(rightRes);
    }

  })
})