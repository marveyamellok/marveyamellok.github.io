$(function(){
  var lang;
  var data;
  var $langItem = $(".lang__item");
  var $lang = $(".lang__result");

  $(window).on("main:ready", function( e, _data ){
    data = _data;
  })

  $($langItem).on("click", function(){
    lang = $(this).text();
    $($lang).text(lang);

    data.lang.default = lang;

    $(window).trigger( "lang:changed", data );
  })
})