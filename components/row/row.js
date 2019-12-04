$(function(){
  /// no canvas
  var $feild = $(".row__block");
  var $item = $(".row__item");
  var click = 0;
  var card = [];
  var $cards =  [];
  var points = 0;

  var classes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  var max = classes.length / 2;

  function makeRandomArr(a, b) {
    return Math.random() - 0.5;
  }

  function startGame(arr, elems, card, cards){
    arr.sort(makeRandomArr);

    for (var i = 0; i < elems.length; i++){
      var elemBack = $(".row__item-back", elems[i]);
      $(elemBack).text(arr[i]);
      $(elems[i]).removeClass("row__item_choose").removeClass("row__item_right");
    }

    $($item).on("click", function(event){
      var $this = this;
      var card_num = $(".row__item-back", $this).text();
      card.push(card_num);
      $cards.push($this);
      $($this).addClass("row__item_choose");

      if (card.length == 2){
        $(".row__block").addClass("row__block_inactive")
        if (card[0] == card[1]){
          points+=1;
          setTimeout(function(){
            for (var i = 0; i < $cards.length; i++){
              $($cards[i]).removeClass("row__item_choose");
              $($cards[i]).addClass("row__item_right");
            }

            if (points == max){
              $(".row__modal").addClass("row__modal_visible");
            }
          }, 1000)
        } else {
          setTimeout(function(){
            for (var i = 0; i < $cards.length; i++){
              $(cards[i]).removeClass("row__item_choose");
            }
          }, 1000)
        }
        setTimeout(function(){
            card = [];
            cards =  [];
          $(".row__block").removeClass("row__block_inactive")
        }, 1010)
      }
    })
  }

  startGame(classes, $item, card, $cards);

  $(".row__modal-button").on("click", function(event){
    $(".row__modal").removeClass("row__modal_visible");
    startGame(classes, $item, card, $cards);
  })

})