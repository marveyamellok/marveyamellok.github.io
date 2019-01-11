$(function(){
  var tArr = [];
  var newTArr = [];
  var $table = $(".table");
  var $tableColumn = $(".table__column");
  var sortButton = $(".table__header");
  var sortButtonTop = $(".table__sort-top");
  var sortButtonBottom = $(".table__sort-bottom");

  for (var i = 0; i < $tableColumn.length; i++){
    var elemArr = []
    var newCol = $(".table__item", $tableColumn[i]);

    for (var j = 0; j < newCol.length; j++){
      var newEl = $(newCol[j])
      var newElText = $(newEl).html();
      if(!$(newEl).hasClass("table__header")){
        elemArr.push(newElText);
      }
    }
    tArr.push(elemArr);
  }

  var data = [];
  data.push(tArr);

  $(window).trigger( "arr:ready", data );

  $(sortButtonTop).on("click", function(){
    var num = $($(this).parent()).data("num");
    sortTable(true, tArr[num]);
    $(sortButtonTop).removeClass("table__sort-top_choose");
    $(sortButtonBottom).removeClass("table__sort-bottom_choose");
    $(this).addClass("table__sort-top_choose");
  });

  $(sortButtonBottom).on("click", function(){
    var num = $($(this).parent()).data("num");
    sortTable(false, tArr[num]);
    $(sortButtonBottom).removeClass("table__sort-bottom_choose");
    $(sortButtonTop).removeClass("table__sort-top_choose");
    $(this).addClass("table__sort-bottom_choose");
  });

  function sortTable(increase, arr){
    newTArr = [];
    var pos = getPosition(arr, increase);

    for (var i = 0; i < sortButton.length; i++){
      var colArr = [];
      var column = tArr[i];
      for (var j = 0; j < column.length; j++){
        var position = pos[j];
        colArr.push(column[position]);
      }
      newTArr.push(colArr);
    }
    createTable(newTArr); 
  }


  function sortArrIncrease(arr){
    var nArr = arr;
    if (nArr[1] >= 0){
      return nArr.concat().sort(compareNumbers);
    } else {
      return nArr.concat().sort();
    }
  }

  function sortArrDescending(arr){
    var nArr = arr;
    if (nArr[1] >= 0){
      return nArr.concat().sort(compareNumbersD);
    } else {
      return nArr.concat().sort();
    }
  }

  function getPosition(arr, increase){
    var newArr;
    if (increase){
      newArr = sortArrIncrease(arr);
    } else {
      newArr = sortArrDescending(arr);
    }
    
    var pos = [];
    for (var i = 0; i < newArr.length; i++){
      var newEl = newArr[i];
      for (var j = 0; j < arr.length; j++){
        var oldEl = arr[j];
        if (newEl == oldEl){
          pos.push(j);
        }
      } 
    }
    return pos;
  }

  function createTable(arr){

    for (var i = 0; i < $tableColumn.length; i++){
      var $colElems = $(".table__item", $tableColumn[i]);

      for (var j = 0; j < $colElems.length; j++){
        var elem = $colElems[j];

        if(!$(elem).hasClass("table__header")){
          $(elem).html(arr[i][j-1]);
        }
      }
    }
  }

})
