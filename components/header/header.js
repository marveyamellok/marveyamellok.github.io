$(function(){
  var data;
  var lang;

  $(window).on("main:ready", function( e, _data ){
    data = _data;
    // createHeader(data);
    // headerContent(data);
  })

  $(window).on("lang:changed", function( e, _data ){
    data = _data;
    // createHeader(data);
    headerContent(data);
  })

});



/////////////создание/////////////////

function createHeader(data){
  var $headerW = $(".header__wrapper");
  var lang = data.lang.default;
  var header = data.header[lang];
  $($headerW).text("");

  for (var i = 0; i < header.length; i++){
    $('<div class="header__item"><a href="' + header[i].href + '" class="header__item-link">' + header[i].text + '</a></div>' ).appendTo(".header__wrapper");

    if (header[i].items != undefined){
      var items = header[i].items;
      var $link = $(".header__item");
      $link = ($link[i]);
      $('<div class="header__submenu"></div>').appendTo($link);
      var $submenu = $(".header__submenu", $link);
      for (var j = 0; j < items.length; j++){
        $('<a href="' + items[j].href + '" class="header__submenu-item">' + items[j].text + '</a>').appendTo($submenu);
      }
    }
  }
}

/////////////замена/////////////////

function headerContent(data){
  var $items = $(".header__item");
  var lang = data.lang.default;
  var header = data.header[lang];
  for (var i = 0; i < header.length; i++){
    $(".header__item-link", $items[i]).text(header[i].text);
    if (header[i].items != undefined){
      var subitems = header[i].items;
      var $subitems = $(".header__submenu-item", $items[i])
      for (var j = 0; j < $subitems.length; j++){
        $($subitems[j]).text(subitems[j].text);
      }
    }
  }
}


