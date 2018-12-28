$(function(){


  function carousel(){
    var carouselWidth = $(".content__carousel").width();
    var carouselItem = $(".content__carousel-item");
    var carouselWrapper = document.querySelector(".content__carousel-wrapper");
    var left = $(".content__pagination_left");
    var right = $(".content__pagination_right");
    count = 0;
    var max = carouselItem.length - 1;
    var moveLeft = false;

    for (var i = 0; i < carouselItem.length; i++ ){
      $(carouselItem).width(carouselWidth);
    }

    $(carouselWrapper).width(carouselItem.length * carouselWidth);

    $(left).on("click", function(){
      if (count == 0) return;
      count--;
      click(count);
    })

    $(right).on("click", function(){
      if (count == max ) return;
      count++;
      click(count);
    })

    setInterval(function(){
      if (count == max) moveLeft = true;
      if (count == 0) moveLeft = false;
      if (moveLeft){
        count--
      } else {
        count++
      }
      click(count);
    }, 5000)

    function click(count){
      carouselWrapper.style.transform = "translate(-" + carouselWidth*count + "px";
      $(right).removeClass("content__pagination_disable");
      $(left).removeClass("content__pagination_disable");
      if (count == max){
        $(right).addClass("content__pagination_disable")   
      } 
      if (count == 0){
        $(left).addClass("content__pagination_disable")   
      }
    }
  }

  carousel();
})