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

  for (var i = 0; i < priceElms.length; i++){
    if (!$(priceElms[i]).hasClass("table__header")){
      prices.push($(priceElms[i]).html());
    }
  }

  prices.sort(compareNumbers);

  var min = Number(prices[0]);
  var max = Number(prices[prices.length - 1]);

  // var filter = {
  //   price: {
  //     min: 0,
  //     max: max
  //   },
  //   const: {
  //     flag: false
  //   },
  //   pos: [0, 1, 2, 3, 4, 5],
  //   standart: [0, 1, 2, 3, 4, 5],
  //   arr: {
  //     "nameItem": ["Name_1", "Name_2", "Name_3", "Name_4", "Name_5", "Name_6"],
  //     "codeItem": [12345, 456452, 135790, 122233, 3345, 185065],
  //     "priceItem": [3500, 8000, 7500, 400, 900, 11700],
  //     "gotItem": ["yes", "no", "yes", "yes", "no", "yes"],
  //     "dateItem": [2015, 2015, 2018, 2013, 2014, 2015]
  //   }
  // };

  var filter;
  var years = [];
  var dates = [];

  var newPosPrice;
  var checks;
  var datesPos;

  $.getJSON('/components/data.json', function(_data){
    filter = _data;
    $(window).trigger( "filter:done", filter );

    newPosPrice = filter.standart;
    checks = filter.standart;
    datesPos = filter.standart;
    filter.price.max = max;

  });

  var $check = $("#check");
  var $year = $(".filter__item_date");

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

      // priceArr.min = leftRes;
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

      filter.price.max = rightRes;
    }

    if (mousedownLeft || mousedownRight){
      var filterPos = filter.pos;
      var check = filter.pos;
      var years = filter.pos;

      var priceList;
      var maxP = filter.price.max;
      var minP = filter.price.min;
      newPosPrice = [];

      for (n in filter.arr){
        if (n == "priceItem"){
          priceList = filter.arr[n];
        }
      }

      for (var i = 0; i < priceList.length; i++){
        if (priceList[i] >= minP && priceList[i] <= maxP ){
          newPosPrice.push(i);
        }
      }




      var totalPos = getPos(newPosPrice, checks, datesPos);
      filter.pos = totalPos;

      $(window).trigger( "filter:done", filter);
    }
  })

  $($check).on("click", function(){
    var check = $(this).prop( "checked");
    var elems = filter.arr.gotItem;
    checks = [];

    if (check){
      for (var i = 0; i < elems.length; i++){
        if (elems[i] == "yes"){
          checks.push(i);
        }
      }
    } else {
      checks = filter.standart
    };

    var totalPos = getPos(newPosPrice, checks, datesPos);
    filter.pos = totalPos;
    filter.const.flag = check;

    $(window).trigger("filter:done", filter);
  })

  $(".filter__item-input").on("click", function(){

    var $parent = $(this).parent().parent();
      datesPos = [];


    if ($($parent).hasClass("filter__item_date")){
      var year = $(".filter__item-text", $parent).html();
      if ($(this).prop( "checked")){
        dates.push(year);
      } else {
        dates = removeValue(dates, year);
      }
    }
    
    var datesConst = filter.arr.dateItem;

    for (var i = 0; i < datesConst.length; i++){
      for (var j = 0; j < dates.length; j++){
        if ( datesConst[i] == dates[j]){
          datesPos.push(i)
        }
      }
    }

    if (datesPos.length <= 0){
      datesPos = filter.standart;
    }

    var totalPos = getPos(newPosPrice, checks, datesPos);
    filter.pos = totalPos;

    $(window).trigger("filter:done", filter);
  })

  function getPos(price, check, years){
    var arr = [];
      for (var i = 0; i < price.length; i++){
        var elemPrice = price[i];

        for (var j = 0; j < check.length; j++){
          var elemCheck = check[j];

          for (var l = 0; l < years.length; l++){
            var elemYears = years[l];

            if ( elemPrice == elemCheck && elemPrice == elemYears){
              arr.push(elemPrice);
            }
          }
        }
      }
    return arr;
  }

  function removeValue(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            arr.splice(i, 1);
            break;
        }
    }
    return arr;
}
})