$(function(){
  var tArr = [];
  var newTArr = [];
  var $table = $(".table");
  var $tableColumn = $(".table__column");
  var sortButton = $(".table__header");

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
    tArr.push(elemArr)
  }

  $(sortButton).on("click", function(){
    newTArr = [];
    var num = $(this).data("num");
    var pos = getPosition(tArr[num]);
    $(sortButton).removeClass("table__header_sort");
    $(this).addClass("table__header_sort");

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
  })


  function sortArr(arr){
    var nArr = arr;
    if (nArr[1] >= 0){
      return nArr.concat().sort(compareNumbers);
    } else {
      return nArr.concat().sort();
    }

  }

  function getPosition(arr){
    var newArr = sortArr(arr);
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

  function compareNumbers(a, b) {
    return a - b;
  }

})
