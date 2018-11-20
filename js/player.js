var player = {
  x: 50,
  y: 10,
  dx: 0,
  dy: 0,
  r: 8,
  width: 35,
  height: 35,
  color: "red",
  image: "images/ball.svg",
  speed: 3,
  fallSpeed: 10,
  jumpPressed: false,
  jumpCount: 0,
  jumpLength: 30,
  jumpHeight: 0,
  gravity: 0, 
  _let: false,
  jumpPos: 0,
  jump: false,

  dx: 0,
  dy: 0,

  max: 10,
  dif: 9.8,

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
      this.jump = true;
      this.jumpCount++;
      this.y = this.y - (this.jumpLength - this.jumpCount);
    }
    

    if ( this.jumpCount > this.jumpLength ){
      this.stopJump();
    }

    drawImage(this.x, this.y - this.jumpHeight, this.width, this.height, "ball");
  },

  move: function(){

    this.y += this.dy;

    if(mc.isActionActive("up")){
      if (this.jump == true) return;
      this.jumpPressed = true;
    };

    if(mc.isActionActive("right")){
      if (level.right) this.x = this.x - rightMove;
      this.dx = 1;
      this.x += (this.dx * this.speed);
    };

    if(mc.isActionActive("left")){
      if (level.left) this.x = this.x + rightMove;
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

        if (collisionTop(this.y, item.y, item.height )){ //////препятствие сверху
          // this.y = item.y + item.height;
          this.dy = 3;
          this.stopJump();
        }

        if (collisionBottom(yPos, this.height, item.y, item.height)){ //////препятствие снизу
          this.y = item.y - this.height;
          this.jump = false;
        } 


        if (collisionWalls(this.x, yPos, this.width, this.height, item.x, item.y, item.width, item.height)){ //////препятствие справа
          this.right = false;
          this.left = false;
          this.dx *= -1;
          this.x += (this.dx * this.speed);
        }
      }

    } else {

        this.jump = true;

        this.max = 10;
        this.dif = 9.8;

        if(this.dy > this.max){
          this.dy = this.dy / this.max;
        }

        // this.dy += this.dif <= this.max ? this.dif : 0;

        if (this.dif >= this.max){
          this.dif = 0;
        }

        this.dy += this.dif;
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
        
