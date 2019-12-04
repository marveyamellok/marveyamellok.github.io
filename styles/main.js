// import "../components/header/header";
$(function(){
  function require(script) {
      $.ajax({
          url: script,
          dataType: "script",
          async: false,           // <-- This is the key
          success: function () {
              // all good...
          },
          error: function () {
              throw new Error("Could not load script " + script);
          }
      });
  }

  require("/components/lang/lang.js");
  require("/components/header/header.js");
  require("/components/light/light.js");
  require("/components/filters/filters.js");
  require("/components/row/row.js");
  require("/components/main.js");

  function resize(){
    $(document).on("mousedown", function(e){
      // var id_click = $(e.target).attr("class");
      var $elem = $(e.target);
      var xPos = e.pageX;
      var yPos = e.pageY;
      var x = $($elem).offset().left;
      var y = $($elem).offset().top;
      var w = $($elem).width();
      var h = $($elem).height();
      var minX = (x + w) - 10;
      var minY = (y + h) - 10;
      var maxX = (x + w);
      var maxY = (y + h);
        
      if ((xPos >= minX) && (xPos <= maxX) && (yPos >= minY) && (yPos <= maxY)){
        $(document).on("mousemove", function(e){
          var newxPos = e.pageX;
          var newyPos = e.pageY;
          console.log(newxPos);
          var newW = newxPos - x;
          var newH = newyPos - y;
          $($elem).css({"width": newW + "px", "height": newH + "px"});
          $(document).on("mouseup", function(){
            console.log("djghdg")
            document.onmousemove = null;
          })
        })
      }
    });
  }
});

