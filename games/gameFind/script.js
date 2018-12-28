function log(n){
  console.log(n)
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

$(function(){
  var countTableItem = 100;
  var arr = [];
  var steps = [];
  var compare = [];
  compare = getArrey(compare);
  var $item;
  var colors = ["#D8BFD8","#EBC7DF","#A08040","#CA3A27","#ED4830","#7FFF00","#F5D033","#F4C430","#C54B8C","#FB7EFD","#45322E","#D2691E","#CDB891","#FF33CC","#7DF9FF","#CCFF00","#CEFF1D","#40826D","#FFBF00","#93AA00","#FF845C","#F4C800","#007D34","#F13A13","#7E0059","#C10020","#FF8E00","#FF6800","#D5265B","#943391","#00836E","#8F509D","#08E8DE","#FFB300","#66FF00","#FFA089","#FC0FC0","#007CAD","#E0B0FF","#CD00CD","#0ABAB5","#1CA9C9","#D53E07","#A12312","#FF6347","#5DA130","#006400","#35682D","#FAD201","#308446","#CC0605","#F54021","#000080","#1974D2","#9400D3","#8FBC8F","#483D8B","#177245","#57A639","#0000FF","#AFDAFC","#007DFF","#3A75C4","#1F75FE","#474B4E","#1FCECB","#18A7B5","#122FAA","#2A52BE","#003399","#4682B4","#F0F8FF","#C8A2C8","#B565A7","#FF6E4A","#FC2847","#FFBCD9","#0D98BA","#8A2BE2","#6699CC","#6C4675","#54FF9F","#9FE2BF","#1C6B72","#009900","#646B63","#98FF98","#497E76","#20603D","#F5FFFA","#3EB489","#DC9D00","#FCB4D5","#FBA0E3","#FEFE22","#007BA7","#025669","#007FFF","#1DACD6","#00FF00","#2E8B57","#3BB08F","#29AB87","#008000","#1CAC78","#ADDFAD","#006633","#2F4538","#004953","#4F7942","#FFCF40","#FFDC33"]
  var count = 0;
  var $table = $(".table");
  var $result = $(".result");
  var $resultText = $(".result__text");
  var $resultOldText = $(".result__OldText");
  $($result).hide();

  function shuffle(a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;

  }

  function getArrey(arr){
    for (var i = 1; i <= countTableItem; i++ ){
      arr.push(i);
    }
    return arr;
  }

  var number = shuffle(getArrey(arr));

  for (var i = 0; i < countTableItem; i++){
    var colorNum = getRandomInt(0, colors.length - 1);
    var fontSize = getRandomInt(16, 50);
    fontSize = fontSize + "px"
    $item = $("<div class='table__item'>" + number[i] + "</div>").appendTo($table);
    $($item).css("color" , colors[colorNum]);
    $($item).css("font-size", fontSize);
  }

  $(".clear-btn").on("click", function(){
    localStorage.clear();
  });

  $(".start").on("click", function(){
    $(".wrapper").hide();
    $(this).hide();
    var $seconds = $(".timer__seconds");
    var $minutes = $(".timer__minutes");
    var $hours = $(".timer__hours");
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    setInterval(function(){
    
      if (steps.length === countTableItem){
        return;
      }

      if (minutes === 59){
        hours += 1;
        minutes = -1;
        writeTime(hours, $hours, minutes); 
      }

      if (seconds === 59){
        minutes += 1;
        seconds = -1;
        writeTime(minutes, $minutes); 
      }

      seconds += 1;
      writeTime(seconds, $seconds);
    }, 1000)

  })

  function writeTime(num, place){

    if (num < 10){
      $(place).html("0" + num);
    } else {
      $(place).html(num);
    }
  }

  $(".table__item").on("click", function(){
    $(".table__item").removeClass("table__item_choosen");
    var newNum = $(this).html();
    var mistakes = 0;
    
    $(this).addClass("table__item_choosen");

    
    if (newNum !== steps[steps.length - 1]){
      steps.push(Number(newNum));
    }

    log(compare)

    for (var i = 0; i < steps.length; i++){
      if(steps[i] !== compare[i]){
        mistakes += 1;
      }
      log(steps)
      log(mistakes)
    }

    if (steps.length === countTableItem){
      var h = $(".timer__hours").html();
      var m = $(".timer__minutes").html();
      var s = $(".timer__seconds").html();
      var res = h * 60 * 60 + m * 60 + s;
      var normalRes = h + " : " + m + " : " + s;

      $($resultText).html("Game is over, your score is <br>" + normalRes);
      $($result).show();

      if (mistakes === 0){

        $($resultText).html("Game is over, your score is <br>" + normalRes);
        var best = localStorage.getItem("best");

        if (best !== undefined && best !== null){
          if ( best <= res){
            var bestText = localStorage.getItem("bestNormal");
            $($resultOldText).html("Your best score is <br>" + bestText);
          } else {
            $($resultOldText).html("Congratulation, it is your new best score!");
            localStorage.setItem("best", res);
            localStorage.setItem("bestNormal", normalRes);
          }
        } else {
          $($resultOldText).html("Congratulation, it is your new best score!");
          localStorage.setItem("best", res);
          localStorage.setItem("bestNormal", normalRes);
        }
      } else {
        $($resultText).html("Your resalt may be so <br>" + normalRes + "<br> But you make a mistake and loose game.");

      }

      $($result).show();
    }

  });

});
