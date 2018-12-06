$(function() {
  init();

  var playerX = width / 2 ; 
  var playerY = height - (height / 4) * 3;
  player.init(playerX, playerY);
  level.create(map);
  info.life();

  $(".control__again").on("click", function(){
    // clearAll();
    location.reload()
  })

  var game = function(){
    clearAll();
    
    info.write("You get souls: ", width - 220, 90);
    info.change(width - 80, 90);
    info.draw();
    info.loseLife();

    // console.log(player.lifes)

    level.draw();
    level.camera();
    level.soulsMove();
    level.enemyMove();

    player.draw();
    player.move();
    player.collision();
    player.getSouls();
    player.fallIntoLava();
    player.lose(2500);
    player.result();
    // player.lose(100);

  }

  startGame(game);
});

