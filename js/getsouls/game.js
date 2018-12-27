
var _renderer = (function() {
  return window.requestAnimationFrame ||

  function(callback) {
    setTimeout(callback, 1000 / 60);
  };

})();

var _engine = function(){
  log('игр.ц.не иниц.')
};

var startGame = function(game){
  if (typeof game == 'function'){
    _engine = game;
  };
  gameLoop();
};

var setGame = function(game){
  if (typeof game == 'function'){
    _engine = game;
  };
}

var gameLoop = function(){
  _engine();
  _renderer(gameLoop);
}

var gameOver = function(){
  _engine = function(){
    $(".winner").css("display", "flex")
  }
}