var player = {
  x: 50,
  y: 10,
  dx: 0,
  dy: 0,
  r: 8,
  width: 38,
  height: 38,
  color: "red",
  image: "images/ball.svg",
  speed: 3,
  fallSpeed: 10,
  jumpPressed: false,
  jumpCount: 0,
  jumpLength: 50,
  jumpDefaultLength: 50,
  jumpHeight: 0,
  gravity: 0, 
  _let: false,

  init: function(xPos,yPos){
    this.x = xPos,
    this.y = yPos
  },

  stopJump: function(){
    this.jumpPressed = false;
    this.jumpCount = 0;
    this.jumpHeight = 0;
  },

  draw: function(){

    if ( this.jumpPressed ){
      this.jumpCount++;
      this.jumpHeight = 4 * this.jumpLength * Math.sin( Math.PI * this.jumpCount / this.jumpLength );
    }

    if ( this.jumpCount > this.jumpLength ){
      this.stopJump();
    }

    drawImage(this.x, this.y - this.jumpHeight, this.width, this.height, "ball");
  },

  move: function(){
    if(mc.isActionActive("up")){
      this.jumpPressed = true;
    };

    if(mc.isActionActive("right")){
      this.dx = 1;
      this.x += (this.dx * this.speed);
    };

    if(mc.isActionActive("left")){
      this.dx = -1;
      this.x += (this.dx * this.speed);
    };
  },

  collision: function(){
    var collisions = [];
    this._let = false;

    for (var i in level.nodes){
      var wall = level.nodes[i];
      var x = wall.x - (this.width - 1);
      var w = (this.width * 3) - 2;
      var yPos = this.y - this.jumpHeight;


      if (isCollision(this.x, yPos, this.width, this.height, wall.x, wall.y, wall.width, wall.height)){    
        collisions.push(wall);
        this._let = true;
      }
    } 

    if(this._let){ 
      this.gravity = 0;
      for (var j in collisions){
        var item = collisions[j];
        var top = this.y;

        if (collisionTop(yPos, item.y, item.height)){ //////препятствие сверху
          this.dy = 1;
          this.stopJump();

        }

        if (collisionBottom(yPos, this.height, item.y, item.height)){ //////препятствие снизу
          this.y = item.y - this.height;
        } 

        if (collisionWalls(this.x, yPos, this.width, this.height, item.x, item.y, item.width, item.height)){ //////препятствие справа
          // console.log("left/right");
          this.dx *= -1;
          this.x += (this.dx * this.speed);
        }
      }

    } else {
      // console.log(this.jumpPressed, this.jumpCount, this.jumpHeight, this.jumpLength)
      if (this.jumpCount == 0){ //////препятствий нет и мы не прыгаем
        this.gravity++;
        this.dy = 1;
        this.y += (this.dy * this.fallSpeed + this.gravity / 10); 
      }
    }
  }
}




        // if (collisionTop(yPos, item.y, item.height)){ //////препятствие сверху
        //   console.log("top");
        //   this.dy = 1;
        //   this.stopJump();

        // }

        // if (collisionBottom(yPos, this.height, item.y, item.height)){ //////препятствие снизу
        //   console.log("bottom");
        //   this.y = item.y - this.height;
        // } 
        
