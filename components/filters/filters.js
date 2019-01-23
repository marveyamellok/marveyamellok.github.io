$(function(){
  var $left = $(".filter__slider-left");
  var $right = $(".filter__slider-right");
  var $line = $(".filter__slider-line-show");
  var $table = $(".table");
  var price = document.getElementById("priceItem"); 

  var lineWidth = $(".filter__slider-line").width();
  var $lineMain = $(".filter__slider-line");
  var lineMainPositionInfo = $lineMain.offset();
  var linePos = lineMainPositionInfo.left;

  var circleWidth = $($left).width();
  var circleConst = circleWidth / 2;

  var leftPosition = $left.offset();
  var leftPoint = leftPosition.left;
  var rightPoint = leftPoint + lineWidth - circleConst;

  
  var leftPos = 0;
  var rightPos = lineWidth;

  var mousedownLeft = false;
  var mousedownRight = false;

  var prices = [];
  var priceElms = $(price).children();

  var $check = $("#check");

  for (var i = 0; i < priceElms.length; i++){
    if (!$(priceElms[i]).hasClass("table__header")){
      prices.push($(priceElms[i]).html());
    }
  }

  prices.sort(compareNumbers);
  var min = Number(prices[0]);
  var max = Number(prices[prices.length - 1]);

  var priceArr = {
    min: 0,
    max: max
  };


  var filter = {
    price: {
      min: 0,
      max: max
    },
    const: {
      flag: false
    },
    pos: [
      0, 
      1, 
      2, 
      3, 
      4, 
      5
    ],
    arr: [
      ["Name_1", "Name_2", "Name_3", "Name_4", "Name_5", "Name_6"],
      [12345, 456452, 135790, 122233, 3345, 185065],
      [3500, 8000, 7500, 400, 900, 11700],
      ["yes", "no", "yes", "yes", "no", "yes"],
      [2015, 2015, 2018, 2013, 2014, 2015]
    ]
  };

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
      leftPos = pos - linePos - circleConst;
      if (leftPos <= ( 0 - circleConst ) || leftPos >= lineWidth - circleConst || leftPos >= rightPos) return;     
      var width = rightPos - leftPos- circleConst;
      var percent = Math.round(((leftPos + circleConst) / lineWidth) * 100);
      var leftRes = ((max) / 100 * percent);

      $($left).css({"left" : leftPos});
      $($line).css({"left" : leftPos + circleConst, "width": width});
      $(".filter__slider-left-info").html(leftRes);

      priceArr.min = leftRes;
      filter.price.min = leftRes;
    }

    if(mousedownRight){
      var pos = event.clientX;
      rightPos = pos - linePos - circleConst;
      if (rightPos >= lineWidth - circleConst || rightPos <= ( 0 - circleConst ) || rightPos <= leftPos) return;
      var width = rightPos - leftPos- circleConst;
      var percent = Math.round(((rightPos + circleConst) / lineWidth) * 100);
      var rightRes = (max / 100 * percent);

      $($right).css({"left" : rightPos});
      $($line).css({"left" : leftPos + circleConst, "width": width});
      $(".filter__slider-right-info").html(rightRes);

      priceArr.max = rightRes;
      filter.price.max = rightRes;
    }

    if (mousedownLeft || mousedownRight){
      // $(window).trigger( "filter:done", filter);
      $(window).trigger( "filter:price", priceArr);
    }
  })

  $($check).on("click", function(){
    var check = $(this).prop( "checked");
    filter.const.flag = check;
    // $(window).trigger("filter:done", filter);
    $(window).trigger("filter:check", check);
  })

  // $(document).on("mousemove", function(event){

    // if(mousedownLeft){
    //   var pos = event.clientX;
    //   if (pos <= leftPoint || pos >= rightPoint || pos <= rightPos) return;
    //   leftPos = pos - leftPoint - circleWidth / 2;
    //   $($left).css({"left" : leftPos});
    //   $($line).css({"left" : leftPos, "width" :  lineWidth - rightPos - leftPos - circleWidth / 2});

    //   var leftPercent = ((leftPos + circleWidth / 2)/lineWidth * 100)
    //   var leftRes = Math.round(max / 100 * leftPercent);
    //   $(".filter__slider-left-info").html(leftRes);
    // }

    // if(mousedownRight){
    //   var pos = event.clientX;
    //   console.log(lineWidth - leftPos, rightPos)
    //   if (pos <= leftPoint || pos >= rightPoint || pos <= leftPos) return;
    //   rightPos = rightPoint - pos - circleWidth / 2;
    //   $($right).css({"right" : rightPos});
    //   $($line).css({"left" : leftPos, "width" :  lineWidth - rightPos - leftPos - circleWidth / 2});

    //   var rightPercent = (100 - ((rightPos + circleWidth / 2)/lineWidth) * 100);
    //   var rightRes = Math.round(max / 100 * rightPercent);
    //   $(".filter__slider-right-info").html(rightRes);
    // }

  // })
})