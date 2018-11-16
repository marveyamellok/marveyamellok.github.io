

  init();

  var playerX = width / 2; 
  var playerY = height - player.r;
  player.init(playerX, playerY);
  labyrinth.create(map);

  var game = function(){
    fillAll("#f8da9d");
    // var block = new Block(10, 10, 20, 20, "red");
    // block.draw();
    labyrinth.draw();

    player.draw();
    player.move();
    player.collision();
  }

  startGame(game);