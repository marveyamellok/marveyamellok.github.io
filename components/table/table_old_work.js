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
    var id = $(this).parent().data("id");

    // console.log(filter);
    var arr = filter.arr[id];
    var newArr = sortArrIncrease(arr);
    var oldArr = arr;
    console.log(oldArr, newArr);

    getNewPos(oldArr, newArr)
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

  function getNewPos(oldArr, newArr){
    var positionPrice = []
    for (var i = 0; i < oldArr.length; i++){
      for (var j = 0; j < newArr.length; j++){
        if ( oldArr[i] == newArr[j]){
          positionPrice.push(j);
          console.log( oldArr[i],newArr[j])
        }
      }
    }

    console.log(positionPrice);
  }

  
})
