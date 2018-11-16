$(function() {
  init();

  var playerX = width / 2 - 100; 
  // var playerY = 3 * player.height;
  // var playerY = height - player.height - map.height;
  var playerY = height - (height / 4) * 2;
  player.init(playerX, playerY);
  level.create(map);

  var game = function(){
    fillAll("#f8da9d");
    // clearAll();
    // var block = new Block(10, 10, 20, 20, "red");
    // block.draw();
    level.draw();

    player.draw();
    player.move();
    player.collision();
  }

  startGame(game);
});


    /////////////наиболее рабочая версия

    // for (var j in collisions){
    //   var item = collisions[j];

    //   if (yPos >= item.y && yPos <= item.y + item.height){ //////препятствие сверху
    //     this.dy = 1;
    //     console.log(item.y + item.height, yPos)
    //     // this.y += (this.dy * this.speed);
    //     this.y = ((item.y + item.height) - this.dy * this.speed);
    //     console.log(yPos)
    //     console.log(this.y)
    //     // this.stopJump();
    //   }

    //   if (yPos + this.height <= item.y + item.height && yPos + this.height >= item.y){ //////препятствие снизу
    //     // this.y = item.y - this.height;
    //     this.y = item.y - this.height;
    //     // this.stopJump();
    //     // this.jumpPressed == false;
    //   } 
    // }

    // if(!_let && this.jumpCount == 0){ //////препятствий нет
    //   console.log("none")
    //   this.dy = 1;
    //   this.y += (this.dy * this.fallSpeed); 
    // }



        // if (collisionTop(yPos, item.y, item.height)){ //////препятствие сверху
        //   console.log("top");
        //   this.dy = 1;
        //   this.y += (this.dy * this.speed);
        // }

        // if (collisionBottom(yPos, this.height, item.y, item.height)){ //////препятствие снизу
        //   console.log("bottom");
        //   // this.y = item.y - this.height;
        //   this.y = item.y - this.height;
        //   // this.stopJump();
        //   // this.jumpPressed == false;
        // } 

        // if (collisionWalls(this.x, yPos, this.width, this.height, item.x, item.y, item.width, item.height)){ //////препятствие справа
        //   console.log("left/right");
        //   this.dx *= -1;
        //   this.x += (this.dx * this.speed);
        // } 



        // if (yPos >= item.y && yPos <= item.y + item.height){ //////препятствие сверху
        //   this.dy = 1;
        //   this.y += (this.dy * this.speed);
        // }

        // if (yPos + this.height <= item.y + item.height && yPos + this.height >= item.y){ //////препятствие снизу
        //   // this.y = item.y - this.height;
        //   this.y = item.y - this.height;
        //   // this.stopJump();
        //   // this.jumpPressed == false;
        // } 

        // if (((this.x + this.width <= item.x + item.width && this.x + this.width >= item.x)  || (this.x >= item.x && this.x <= item.x + item.width)) && 
        //     !(yPos + this.height <= item.y + item.height && yPos + this.height >= item.y)){ //////препятствие справа
        //   this.dx *= -1;
        //   this.x += (this.dx * this.speed);
        // } 