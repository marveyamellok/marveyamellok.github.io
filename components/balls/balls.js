$(function(){
  $canvas = $(".balls__canvas");
  var left = $($canvas).offset().left;
  var top = $($canvas).offset().top;
  var x;
  var y;

  //////////////////start functions///////////////

  var canvas, ctx, width, heigth; 

  var init = function(){
    canvas = document.getElementById("balls__canvas");
    width = canvas.width;
    height = canvas.height;
    ctx = canvas.getContext('2d');  
  };

  var fillAll = function(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height)
  };

  var clearAll = function(){
    ctx.clearRect(0, 0, width, height)
  };

  var drawRect = function(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };

  var drawCircle = function(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  /////////////////////////////////////////


  var ball = {
    w: 30,
    h: 30,
    x: 100,
    y: 200,
    startY: 100,
    radius: 15,
    color: "red",
    fallSpeed: 3,
    jumpSpeed: 3,
    dy: 0.5,
    dyJ: 0.01,
    isfall: true,
    isjump: false,
    dgndsmfng: false,
    startPos: 200,

    init: function(x, y, radius, color){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    },

    draw: function(){
      drawCircle(this.x, this.y, this.radius, this.color)
    },

    fall: function(){
      // if (this.isfall == true){
        // if (this.y >= height - (this.radius * 2)){
        //   this.y = height - (this.radius * 2);
        //   this.isfall = false;
        //   this.isjump = true;
        // }

        if (this.y >= height - (this.radius * 2)){
          this.isjump = true;
          console.log("collision");
          console.log(this.dy)
        }

        this.dy += this.dy * 0.1;
        this.y += this.fallSpeed + this.dy;
        console.log(this.dy);
    },

    jump: function(){
      if (this.isjump == true){
        this.dy = -this.dy;
        // console.log("3", this.dy)
      } else {
        return
      }
    },

    // fall: function(){
    //   // console.log(this.isjump)
    //   if (this.isjump == false){
    //       console.log(1)
    //     if (this.y >= height - (this.radius * 2)){
    //       this.isfall = false;
    //       this.isjump = true;
    //       this.dy = 0.5;
    //       console.log(3)
    //       return;
    //     } else {
    //       this.dy += this.dy * 0.1;
    //       this.y += this.fallSpeed * this.dy;
    //       console.log(4)
    //     }
    //   } else {
    //       console.log(2)
    //     return
    //   }
    // },

    // jump: function(){
    //   if (this.isjump == true){
    //     // console.log("jump")
    //       console.log(this.startPos)
    //     this.dy -= this.dy * 0.0002;
    //     this.y -= this.jumpSpeed * this.dy;

    //     if (this.y <= ((width - this.startPos) / 3)){
    //       console.log(this.startPos)
    //       this.isjump = false;
    //       this.isfall = true;
    //       return;
    //     }
    //   } else {
    //     return
    //   }
    // },

    start: function(){
      this.startPos = this.y;
      // console.log(this.startPos)
    }

  }

  // function click(x, y){
    $($canvas).on("click", function(event){
      x = event.pageX - left;
      y = event.pageY - top;
      ball.init(x, y, ball.radius, ball.color);
      ball.start();
      // console.log("x,y");
    })
  // };

  init();
  // click(x,y);
  // console.log(x,y)

  

  var game = function(){
    fillAll("white");
    ball.draw();
    ball.fall();
    ball.jump();
    // console.log(ball.startPos)
  };

  //////////////////////create/////////////////////////

  // var Balls = function (x, y, w, h, color, moveRight, _let) {
  //   w: 30,
  //   h: 30,
  //   x: 100,
  //   y: 100,
  //   radius: 15,
  //   color: "red",
  //   fallSpeed: 3,
  //   dy: 0.2
  // };

  // Balls.prototype = {
  //   draw: function(){
  //     drawImage(this.x, this.y, this.width, this.height, color);
  //   }
  // };

  ///////////////////////game/////////////////////////

  var _renderer = (function() {
    return window.requestAnimationFrame ||

    function(callback) {
      setTimeout(callback, 1000 / 60);
    };
  })();

  var _engine = function(){
    console.log('игр.ц.не иниц.')
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

  ////////////////////////////

  startGame(game);


})