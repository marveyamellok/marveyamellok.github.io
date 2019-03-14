$(function(){
  var $block = $(".carousel__block");
  var $item;
  var length;

  setInterval(function(){
    $item = $(".carousel__item");
    length = $item.length;

    $($item).on("click", function(){
      var  $this = this
      move($this)
    }) 
  }, 100);

  function move(elem){
    if (!$(elem).hasClass("carousel__item_main")){
      var num;
      var newCLass;
      var newContent;

      for (var m = 0; m < $item.length; m++){
        if ($item[m] == elem){
          num = m;
        }
      }

      if ($(elem).hasClass("carousel__item_previous")){
        newClass = $($item[length-1]).attr('class');
        newContent =$($item[length-1]).html();
        $($item[length - 1]).detach()

        var newItem = document.createElement('div');
        newItem.className = 'carousel__item ' + newClass;
        $(newItem).html(newContent);
        $block.prepend(newItem);

      }

      if ($(elem).hasClass("carousel__item_next")){
        newClass = $($item[0]).attr('class');
        newContent =$($item[0]).html();
        $($item[0]).detach()

        var newItem = document.createElement('div');
        newItem.className = 'carousel__item ' + newClass;
        $(newItem).html(newContent);
        $block.append(newItem);

      }

      $($item).removeClass("carousel__item_previous").removeClass("carousel__item_main").removeClass("carousel__item_next");
      $(elem).addClass("carousel__item_main");

      for (var i = 0; i < $item.length; i++){
        if (i == (num - 1)){
          $($item[i]).addClass("carousel__item_previous");
        }

        if (i == (num + 1)){
          $($item[i]).addClass("carousel__item_next");
        }
      }
    }

    $item = $(".carousel__item");
    length = $item.length;

  }
})