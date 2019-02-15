$(function(){
  var arr = [];
  var tArr = [];
  var newTArr = [];
  var $table = $(".table");
  var $tableColumn = $(".table__column");
  var columns = document.querySelector(".table__columns");
  var sortButton = $(".table__header-item");
  var sortButtonTop = $(".table__sort-top");
  var sortButtonBottom = $(".table__sort-bottom");
  var range;
  var min;
  var max;
  var arrForFilter = [];

  var price = document.getElementById("priceItem"); 
  var prices = [];
  var priceElms = $(price).children();

  var nowPos = [0, 1, 2, 3, 4, 5];
  var freeArr = [];

  var filter;


  $(window).on( "filter:done", function(e, _filter){
    console.log(_filter)
    filter = _filter;
    var arr = filter.arr;
    var pos = filter.pos;

    createTable(arr, pos)
  })

  function filterPrice(arr){
    range = arr;
    min = arr.price.min;
    max = arr.price.max;
    prices = [];
  };


  function createTable(arr, pos){
    var $col = $(".table__column");
    $($col).html("");

    for (var i = 0; i < $col.length; i++){
      var attr = $($col[i]).attr("id");

      for (n in arr){

        if ( attr == n ){
          var qwert = arr[n];

          for (var k = 0; k < pos.length; k++){
            var position = pos[k]
            var newCell = document.createElement('div');
            newCell.className = 'table__item';
            $col[i].appendChild(newCell);
            $(newCell).html(qwert[position])
          }
        }
      }
    }
  }

  $(sortButtonBottom).on("click", function(){ 
    console.log(filter)
  });





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






























  // nowArr = getInner(freeArr);

  // $(sortButtonTop).on("click", function(){
  //   var num = $($(this).parent()).data("num");
  //   tArr = getInner(arr);
  //   nowArr = tArr;
  //   sortTable(true, tArr[num]);
  //   $(sortButtonTop).removeClass("table__sort-top_choose");
  //   $(sortButtonBottom).removeClass("table__sort-bottom_choose");
  //   $(this).addClass("table__sort-top_choose");
  // });

  // $(sortButtonBottom).on("click", function(){   
  //   var num = $($(this).parent()).data("num");
  //   tArr = getInner(arr);
  //   nowArr = tArr;
  //   sortTable(false, tArr[num]);
  //   $(sortButtonBottom).removeClass("table__sort-bottom_choose");
  //   $(sortButtonTop).removeClass("table__sort-top_choose");
  //   $(this).addClass("table__sort-bottom_choose");
  // });

  // $(window).on( "filter:price", function(e, priceArr){
  //   range = priceArr;
  //   min = priceArr.min;
  //   max = priceArr.max;
  //   prices = [];

  //   if (newTArr.length <= 0){
  //     arrForFilter = nowArr;
  //   } else {
  //     arrForFilter = newTArr;
  //   }

  //   console.log(arrForFilter)

  //   for (var i = 0; i < priceElms.length; i++){
  //     var priceItem = $(priceElms[i]).html();
  //     if (priceItem >= min && priceItem <= max){
  //       prices.push(i);
  //     }
  //   }
  //   // console.log(nowArr)
  //   createNewTable(nowArr, prices);

  //   nowPos = prices;
  //   nowArr = arrForFilter;
  // });

  // $(window).on( "filter:check", function(e, flag){
  //   var arrCheck = getInner(arr);
  //   var $thisCol = $("#gotItem").children();
  //   var newPos = [];

  //   for (var i = 0; i < $thisCol.length; i++){
  //     var itemCol = $($thisCol[i]).html();
  //     console.log(itemCol)
  //     if (flag && itemCol == "yes"){
  //       newPos.push(i);
  //     } 
  //   }

  //   // console.log(nowArr, nowPos)

  //   if (newPos.length >= 0){
  //     createNewTable(arrCheck, newPos)
  //   } else {
  //     createNewTable(nowArr, nowPos)
  //   }
    
  // });

  // function sortTable(increase, arr){
  //   newTArr = [];
  //   var pos = getPosition(arr, increase);

  //   for (var i = 0; i < sortButton.length; i++){
  //     var colArr = [];
  //     var column = tArr[i];
  //     for (var j = 0; j < column.length; j++){
  //       var position = pos[j];
  //       colArr.push(column[position]);
  //     }
  //     newTArr.push(colArr);
  //   }

  //   createTable(newTArr); 

  //   nowPos = pos;
  //   nowArr = newTArr;
  // }


  // function sortArrIncrease(arr){
  //   var nArr = arr;
  //   if (nArr[1] >= 0){
  //     return nArr.concat().sort(compareNumbers);
  //   } else {
  //     return nArr.concat().sort();
  //   }
  // }

  // function sortArrDescending(arr){
  //   var nArr = arr;
  //   if (nArr[1] >= 0){
  //     return nArr.concat().sort(compareNumbersD);
  //   } else {
  //     return nArr.concat().sort();
  //   }
  // }

  // function getPosition(arr, increase){
  //   var newArr;

  //   if (increase){
  //     newArr = sortArrIncrease(arr);
  //   } else {
  //     newArr = sortArrDescending(arr);
  //   }
    
  //   var pos = [];
  //   for (var i = 0; i < newArr.length; i++){
  //     var newEl = newArr[i];
  //     for (var j = 0; j < arr.length; j++){
  //       var oldEl = arr[j];
  //       if (newEl == oldEl){
  //         pos.push(j);
  //       }
  //     } 
  //   }
  //   return pos;
  // }

  // function createTable(arr){
  //   $tableColumn = $(".table__column");

  //   for (var i = 0; i < $tableColumn.length; i++){
  //     var $colElems = $(".table__item", $tableColumn[i]);

  //     for (var j = 0; j < $colElems.length; j++){
  //       var elem = $colElems[j];
  //       $(elem).html(arr[i][j]);
  //     }
  //   }
  // }

  // function getInner(arr){
  //   arr = [];
  //   for (var i = 0; i < $tableColumn.length; i++){
  //     var elemArr = []
  //     var newCol = $(".table__item", $tableColumn[i]);

  //     for (var j = 0; j < newCol.length; j++){
  //       var newEl = $(newCol[j])
  //       var newElText = $(newEl).html();
  //       elemArr.push(newElText);
  //     }

  //     arr.push(elemArr);
  //   }
  //   return arr;
  // }

  // function createNewTable(arr, pos){
  //   var col = $(".table__column");
  //   $(col).html("");
  //   // console.log("nowArr: ", nowArr)
  //   if (arr.length <= 0) arr = nowArr;
  //   // console.log("nowArr_2: ", arr, nowArr)

  //   for (var i = 0; i < arr.length; i++){
  //     var columnItem = arr[i];
  //     // console.log(col[i])

  //     // var newColl = document.createElement('div');
  //     // newColl.className = 'table__column';
  //     // columns.appendChild(newColl);

  //     for (var j = 0; j < pos.length; j++){
  //       var itemPos = pos[j];
  //       var newCell = document.createElement('div');
  //       newCell.className = 'table__item';
  //       col[i].appendChild(newCell);

  //       // console.log("arr: ", arr[i][itemPos])
  //       $(newCell).html(arr[i][itemPos])
  //     }
  //   }
  // }

  // function createNewTable(arr, pos){

  //   $(columns).html("");

  //   if (arr.length <= 0) arr = getInner(arr);

  //   for (var i = 0; i < arr.length; i++){
  //     var columnItem = arr[i];

  //     var newColl = document.createElement('div');
  //     newColl.className = 'table__column';
  //     columns.appendChild(newColl);

  //     for (var j = 0; j < pos.length; j++){
  //       var itemPos = pos[j];
  //       var newCell = document.createElement('div');
  //       newCell.className = 'table__item';
  //       newColl.appendChild(newCell);
  //       $(newCell).html(arr[i][itemPos])
  //     }
  //   }
  // }
})
