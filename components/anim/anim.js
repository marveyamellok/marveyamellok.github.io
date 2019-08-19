$(function(){
  var $input = $(".anim__input");
  var $button = $(".anim__button");
  var $inputDel = $(".anim__number");
  var $result = $(".anim__result");
  var str;
  var startArr;
  var newStr;
  var one;
  var two;
  var three;
  var persent1;
  var persent2;
  var del;
  var finStr;
  var firstSim;
  var numfirstSim;
  
  $($button).on("click", function(){
    str = $input.val()
    startArr = str.split(', ');
    finStr = startArr[0];
    numfirstSim = finStr.indexOf("%");
    firstSim = (finStr.slice(0, numfirstSim)) / del;
    finStr = firstSim + "%, ";
    del = $inputDel.val();

    for (var i = 1; i < startArr.length; i++){
      newStr = startArr[i];
      persent1 = newStr.indexOf("%");
      persent2 = newStr.lastIndexOf("}");
      one = Number(newStr.slice(0, persent1));
      two = newStr.slice(persent1 + 1, persent2 + 1);
      three = Number(newStr.slice(persent2 + 1, newStr.length - 1));
      finStr = finStr + (one / 3) + "% " + two + "\n" + (three / 3) + "%, "; 
    }

    persent2 = finStr.lastIndexOf("}");
    finStr = finStr.slice(0, persent2 + 1);

    $($result).text(finStr).css({"display": "block"});

  });


})



/*
  0%, 0.5533% { background-position: 0px 0px; }
  0.5566%, 1.106% { background-position: -770px 0px; }
  1.11%, 1.6633% { background-position: -1540px 0px; }
  1.6666%, 2.22% { background-position: -2310px 0px; }
  2.2233%, 2.7733% { background-position: -3080px 0px; }
  2.7766%, 3.33% { background-position: -3850px 0px; }

  0%, 12% { background-position: 0px 0px; }
  12%, 15% { background-position: -770px 0px; }
  15%, 18% { background-position: -1540px 0px; }
  18%, 21% { background-position: -2310px 0px; }
  21%, 24% { background-position: -3080px 0px; }
  24%, 27% { background-position: -3850px 0px; }

*/