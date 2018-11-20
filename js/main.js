$(function() {
  init();

  var playerX = width / 2 ; 
  var playerY = height - (height / 4) * 3;
  player.init(playerX, playerY);
  level.create(map);

  var game = function(){
    // fillAll("#f8da9d");
    clearAll();
    level.draw();
    level.drawLava();
    level.drawSoul();
    level.camera();

    player.draw();
    player.move();
    player.collision();
  }

  startGame(game);
});