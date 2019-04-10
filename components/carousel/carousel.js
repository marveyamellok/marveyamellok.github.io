$(function(){
  var $block = $(".carousel__block");
  var $list = $(".carousel__block-list");
  var $item;
  var length;
  var count = 0;

  setInterval(function(){
    $item = $(".carousel__item");
    length = $item.length;

    $($item).on("click", function(){
      var  $this = this
      move($this)
    }) 
  }, 100);
// 



  // function move(elem){
  //   if (!$(elem).hasClass("carousel__item_main")){
  //     var num;
  //     var newCLass;
  //     var newContent;

  //     for (var m = 0; m < $item.length; m++){
  //       if ($item[m] == elem){
  //         num = m;
  //       }
  //     }

  //     // $($item).removeClass("carousel__item_left")
  //     //   .removeClass("carousel__item_right")
  //     //   .removeClass("carousel__item_left-left")
  //     //   .removeClass("carousel__item_right-right")
  //     //   .removeClass("carousel__item_previous")
  //     //   .removeClass("carousel__item_next")
  //     //   .removeClass("carousel__item_main");

  //     if ($(elem).hasClass("carousel__item_previous")){
  //       $($item).removeClass("carousel__item_previous")
  //         .removeClass("carousel__item_next")
  //         .removeClass("carousel__item_main");

  //       newClass = $($item[length-1]).attr('class');
  //       newContent =$($item[length-1]).html();
  //       $($item[length - 1]).detach();

  //       var newItem = document.createElement('div');
  //       newItem.className = newClass;
  //       $(newItem).html(newContent);
  //       $block.prepend(newItem);

  //       $($item[num - 1]).addClass("carousel__item_previous " + newClass);
  //       $($item[num + 1]).addClass("carousel__item_next");
  //     }

  //     if ($(elem).hasClass("carousel__item_next")){
  //       $($item).removeClass("carousel__item_previous")
  //         .removeClass("carousel__item_next")
  //         .removeClass("carousel__item_main");

  //       newClass = $($item[0]).attr('class');
  //       newContent =$($item[0]).html();
  //       $($item[0]).detach();

  //       var newItem = document.createElement('div');
  //       newItem.className = newClass;
  //       $(newItem).html(newContent);
  //       $block.append(newItem);

  //       $($item[num + 1]).addClass("carousel__item_next " + newClass);
  //       $($item[num - 1]).addClass("carousel__item_previous");
  //     }

  //     $(elem).addClass("carousel__item_main");
  //   }

  //   $item = $(".carousel__item");
  //   length = $item.length;

  // }

  //   function move(elem){
  //   if (!$(elem).hasClass("carousel__item_main")){
  //     var num;
  //     var newCLass;
  //     var newContent;

  //     for (var m = 0; m < $item.length; m++){
  //       if ($item[m] == elem){
  //         num = m;
  //       }
  //     }

  //     if ($(elem).hasClass("carousel__item_previous")){
  //       $($item).removeClass("carousel__item_previous")
  //         .removeClass("carousel__item_next")
  //         .removeClass("carousel__item_main");

  //       newClass = $($item[length-1]).attr('class');

  //       $($item[num - 1]).addClass("carousel__item_previous");
  //       $($item[num + 1]).addClass("carousel__item_next");
  //     }

  //     if ($(elem).hasClass("carousel__item_next")){
  //       $($item).removeClass("carousel__item_previous")
  //         .removeClass("carousel__item_next")
  //         .removeClass("carousel__item_main");

  //       newClass = $($item[0]).attr('class');

  //       // $($item[num + 1]).addClass("carousel__item_next");
  //       // $($item[num - 1]).addClass("carousel__item_previous");
  //     }

  //     $(elem).addClass("carousel__item_main");
  //   }

  //   $item = $(".carousel__item");
  //   length = $item.length;

  // }

  //   function move(elem){
  //   if (!$(elem).hasClass("carousel__item_main")){
  //     var num;
  //     var prev;
  //     var next;
  //     var newCLass;
  //     var newContent;
  //     var border = (length - 3) / 2;

  //     for (var m = 0; m < $item.length; m++){

  //       if ($item[m] == elem){
  //         num = m;
  //         prev = m - 1;
  //         next = m + 1;
  //       }

  //       if (prev == (length - 2)){
  //         console.log("prev", prev)
  //         prev = border;
  //       }

  //       if (prev == 1){
  //         console.log("prev", prev)
  //         prev = length - border;
  //       }

  //       if (num == (length - 2)){
  //         console.log("main", num)
  //         num = border;
  //       }

  //       if (num == 1){
  //         console.log("main", num)
  //         num = length - border;
  //       }

  //       if (next == (length - 2)){
  //         console.log("next", next)
  //         next = border;
  //       }

  //       if (next == 1){
  //         console.log("next", next)
  //         next = length - border;
  //       }
  //     }

  //     console.log(prev, num, next)

  //     $($item).removeClass("carousel__item_previous")
  //       .removeClass("carousel__item_next")
  //       .removeClass("carousel__item_main");

  //     $($item[prev]).addClass("carousel__item_previous");
  //     $($item[num]).addClass("carousel__item_main");
  //     $($item[next]).addClass("carousel__item_next");
  //   }

  //   $item = $(".carousel__item");
  //   length = $item.length;
  // }

  // function move(elem){
  //   if (!$(elem).hasClass("carousel__item_main")){
  //     var num;
  //     var prev;
  //     var next;
  //     var newCLass;
  //     var newContent;
  //     var border = (length - 3) / 2;

  //     for (var m = 0; m < $item.length; m++){

  //       if ($item[m] == elem){
  //         num = m;
  //         prev = m - 1;
  //         next = m + 1;
  //       }
  //     }

  //     console.log(prev, num, next)

  //     $($item).removeClass("carousel__item_previous")
  //       .removeClass("carousel__item_next")
  //       .removeClass("carousel__item_main");

  //     $($item[prev]).addClass("carousel__item_previous");
  //     $($item[num]).addClass("carousel__item_main");
  //     $($item[next]).addClass("carousel__item_next");
  //   }
  // }

  //   function move(elem){
  //   if (!$(elem).hasClass("carousel__item_main")){
  //     var num;
  //     var newCLass;
  //     var newContent;

  //     for (var m = 0; m < $item.length; m++){
  //       if ($item[m] == elem){
  //         num = m;
  //       }
  //     }

  //     $($item).removeClass("carousel__item_left").removeClass("carousel__item_right").removeClass("carousel__item_left-left").removeClass("carousel__item_right-right");

  //     if ($(elem).hasClass("carousel__item_previous")){
  //       newClass = $($item[length-1]).attr('class');
  //       newContent =$($item[length-1]).html();
  //       $($item[length - 1]).detach()

  //       var newItem = document.createElement('div');
  //       newItem.className = 'carousel__item ' + newClass;
  //       $(newItem).html(newContent);
  //       $block.prepend(newItem);
  //     }

  //     if ($(elem).hasClass("carousel__item_next")){
  //       newClass = $($item[0]).attr('class');
  //       newContent =$($item[0]).html();
  //       $($item[0]).detach()

  //       var newItem = document.createElement('div');
  //       newItem.className = 'carousel__item ' + newClass;
  //       $(newItem).html(newContent);
  //       $block.append(newItem);
  //     }

  //     $($item).removeClass("carousel__item");

  //     $($item).removeClass("carousel__item_previous").removeClass("carousel__item_main").removeClass("carousel__item_next");
  //     $(elem).addClass("carousel__item_main");
  //     $($item).addClass("carousel__item");

  //     $($item[num - 1]).addClass("carousel__item_previous");
  //     $($item[num + 1]).addClass("carousel__item_next");

  //   }

  //   $item = $(".carousel__item");
  //   length = $item.length;
  // }


  function move(elem){
    if (!$(elem).hasClass("carousel__item_main")){
      var num;
      var l_left;
      var left;
      var prev;
      var main;
      var next;
      var right;
      var r_right;
      var newCLass;
      var newContent;

      $($item).removeClass("carousel__item_active")
        .removeClass("carousel__item_active-1")
        .removeClass("carousel__item_active-2")
        .removeClass("carousel__item_active-3");

      for (var m = 0; m < $item.length; m++){
        if ($item[m] == elem){
          num = m;
        }
      }

      console.log(num)

      l_left = 0;
      left = num - 2;
      prev = num - 1;
      main = num;
      next = num + 1;
      right = num + 2;
      r_right = length - 1;

      if (num == 0){ prev = length - 2;}
      if (main == (length - 1)){ main = 1;}
      if (next == (length - 1)){ next = 1;}

      if (right >= (length - 1)) {right = right - 5}
      if (left <= 0) {left = left + 5}

      if (prev == 0){ prev = length - 2;}
      if (main == 0){ main = length - 2;}
      if (num == (length)){ next = 1}

      $($item).removeClass("carousel__item_previous")
        .removeClass("carousel__item_main")
        .removeClass("carousel__item_next")
        .removeClass("carousel__item_left")
        .removeClass("carousel__item_left-left")
        .removeClass("carousel__item_right")
        .removeClass("carousel__item_right-right");

      // if (right > next){
      //   console.log("RIGHT")
      //   $($item[right]).addClass("carousel__item_right-right") 
      // }

      $($item[l_left]).addClass("carousel__item_left-left");
      $($item[left]).addClass("carousel__item_left");
      $($item[prev]).addClass("carousel__item_previous");
      $($item[main]).addClass("carousel__item_main");
      $($item[next]).addClass("carousel__item_next");
      $($item[right]).addClass("carousel__item_right");
      $($item[r_right]).addClass("carousel__item_right-right");

    }
  }
})