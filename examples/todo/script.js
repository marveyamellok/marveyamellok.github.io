$(function(){
  var list = $(".list");
  var titleInput = $(".list__title-input");
  var titleButton = $(".list__title-button");
  var textInput = $(".list__text-input");
  var textButton = $(".list__text-button");
  var title = $(".list__title");
  var changeTitle = true;
  var listRoll = true;


  $(".list__roll").on("click", function(){
    if (listRoll){
      $(list).addClass("list_roll");
      listRoll = false;
    } else {
      $(list).removeClass("list_roll");
      listRoll = true;
    }
  })


  $(titleButton).on("click", function(){
    if (changeTitle){
      var titleText = $(titleInput).val();
      $(title).html(titleText);
      $(list).addClass("list_title");
      $(titleButton).html("Изменить название");
      changeTitle = false;
    } else {
      $(list).removeClass("list_title");
      $(titleButton).html("Подтвердить название");
      changeTitle = true;
    }
  })


  $(textButton).on("click", function(){
    var postText = $(titleInput).val();
    $(title).html(titleText);
  })
})