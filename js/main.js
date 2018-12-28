$(function(){


  function carousel(){
    var carouselWidth = $(".content__carousel").width();
    var carouselItem = $(".content__carousel-item");
    var carouselWrapper = document.querySelector(".content__carousel-wrapper");
    var left = $(".content__pagination_left");
    var right = $(".content__pagination_right");
    count = 0;
    var max = carouselItem.length - 1;

    for (var i = 0; i < carouselItem.length; i++ ){
      $(carouselItem).width(carouselWidth);
    }

    $(carouselWrapper).width(carouselItem.length * carouselWidth);

    $(left).on("click", function(){
      click( 0, -1, left, right);
    })

    $(right).on("click", function(){
      click( max, 1, right, left);
    })

    function click(max, variable, thisDir, thatDir){
      if (count == max) return;
      count += variable;
      carouselWrapper.style.transform = "translate(-" + carouselWidth*count + "px";
      $(thatDir).removeClass("content__pagination_disable");
      if (count == max){
        $(thisDir).addClass("content__pagination_disable")   
      }
    }
  }

  carousel();
})