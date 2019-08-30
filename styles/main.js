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

  require("./components/header/header.js");
  require("./components/lang/lang.js");
});

$.getJSON('components/data.json', function(_data){
  data = _data;
  $(window).trigger( "main:ready", data );
});

