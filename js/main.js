$(function() {
  init();

  var playerX = width / 2 ; 
  var playerY = height - (height / 4) * 3;
  player.init(playerX, playerY);
  level.create(map);

  var game = function(){
    // fillAll("#f8da9d");
    clearAll();
    info.write("You get souls: ", width - 220, 90);
    info.change(width - 80, 90);
    level.draw();
    level.camera();
    level.soulsMove();

    player.draw();
    player.move();
    player.collision();
    player.getSouls();
    player.fallIntoLava();
    player.lose(2500);
    // player.lose(100);
  }

  startGame(game);
});