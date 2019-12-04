$(function(){
  var data;
  var $leftPrice = $(".filter__slider-left");
  var priceWidth = $($leftPrice).width();
  var $rightPrice = $(".filter__slider-right");
  var leftPrice = 0;
  var rightPrice = 0;
  var params = [];
  var mousedownLeft = false;
  var mousedownRight = false;

  $(window).on("main:ready", function( e, _data ){
    data = _data;
    params = data.TableParams;
  });

  changePrice();

  // $($leftPrice).on("mousedown", function(){
  //   mousedownLeft = true;
  // })

  // $($rightPrice).on("mousedown", function(){
  //   mousedownRight = true;
  // })

  // $(document).on("mouseup", function(){
  //   mousedownLeft = false;
  //   mousedownRight = false;
  // })


  function changePrice(){
    $($leftPrice).mousedown( function(event){
      var $this = this;
      var pos = $($this).offset().left;
      var newPos;
      $(document).mousemove(function(event){
        newPos = event.pageX - pos - priceWidth;
        console.log(newPos);
        if (newPos > 0 || newPos < 100){
          // $($this).css({"left": newPos + "px"})
          console.log("1");
        } else {

          console.log("2");
          return
        }
        $(document).on("mouseup", function(){
          document.onmousemove = null;
          console.log("dkgjdgjds")

        })
        

      })
    })
  }


  function getPrice(){

  }
})