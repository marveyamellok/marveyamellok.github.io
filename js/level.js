// $(function(){
  var souls;

  var Block = function (x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
  };

  Block.prototype = {
    draw: function(image){
      drawImage(this.x, this.y, this.width, this.height, image);
    }
  };


  var map = {
    color: "#448a5a",
    width: 40,
    height: 40,
    level: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1],
      [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,0,4,0,1,0,0,1,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
  };


  var level = {
    right: false,
    left: false,
    count: 0,
    nodes: [],
    lava: [],
    souls: [],
    enemy: [],
    moveCount: 0,
    moveUp: true,
    enemyMoveCount: 0,
    moveRight: true,
    _let: false,
    enemyDx: 1,

    add: function(x, y, w, h, c, arr){
      var tmp = new Block(x, y, w, h, c);
      arr.push(tmp);
    },

    create: function(map){

      var $this = this;

      for (var t1 in map.level){
        for (var t2 in map.level[t1]){
          var tile = map.level[t1][t2];
          var dx = t2*(map.width);
          var dy = t1 * (map.height);
          if (tile == 1){
            this.add(dx, dy, map.width, map.height, map.color, this.nodes)
          }

          if (tile == 2){
            this.add(dx, dy, map.width, map.height, map.color, this.lava)
          }

          if (tile == 3){
            this.add(dx, dy, map.width, map.height, map.color, this.souls)
          }

          if (tile == 4){
            this.add(dx, dy, map.width, map.height, map.color, this.enemy)
          }
        }
      }

      souls = this.souls.length;
    }, 

    draw: function(){

      for (en in this.nodes){
        if (this.right) this.nodes[en].x = this.nodes[en].x - rightMove;
        if (this.left) this.nodes[en].x = this.nodes[en].x + rightMove;
        this.nodes[en].draw("grass");
      };

      for (en in this.lava){
        if (this.right) this.lava[en].x = this.lava[en].x - rightMove;
        if (this.left) this.lava[en].x = this.lava[en].x + rightMove;
        this.lava[en].draw("lava");
      };

      for (en in this.souls){
        if (this.right) this.souls[en].x = this.souls[en].x - rightMove;
        if (this.left) this.souls[en].x = this.souls[en].x + rightMove;
        this.souls[en].draw("soul");
      }

      for (en in this.enemy){
        if (this.right) this.enemy[en].x = this.enemy[en].x - rightMove;
        if (this.left) this.enemy[en].x = this.enemy[en].x + rightMove;
        this.enemy[en].draw("enemy");
      }
    },

    soulsMove: function(){

      if (this.moveRight){
        this.enemyMoveCount++;
        for (en in this.enemy){
          this.enemy[en].x -= (1 + this.enemyMoveCount / 100);
        }

      } else {
        this.enemyMoveCount--
        for (en in this.enemy){
          this.enemy[en].x += (1 + this.enemyMoveCount / 100);
        }

      }

      if (this.enemyMoveCount == 0){
        this.moveRight = true;
      }

      if (this.enemyMoveCount == 150){
        this.moveRight = false;
      }

      // var collisions = [];
      // this._let = false;

      // for (var i in level.nodes){
      //   var wall = level.nodes[i];

      //   for (var j in this.enemy){
      //     var item = this.enemy[j];

      //     if (isCollision(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){
      //       collisions.push(wall);
      //       console.log("dfhgvdjvb")
      //       // this._let = true;

      //       if (collisionWalls(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){ //////препятствие справа
      //         this.moveRight = false;
      //       }
      //     }
      //   }
      // } 

      // if(!this._let) {

      //   var max = 10;
      //   var dif = 9.8;

      //   if(this.dy > max){
      //     this.dy = this.dy / max;
      //   }

      //   if (dif >= max){
      //     dif = 0;
      //   }

      //   this.dy += dif;
      // }

    },

    enemyMove: function(){

      if (this.moveUp){
        this.moveCount++;
        for (en in this.souls){
          this.souls[en].y -= (0.2 + this.moveCount / 100);
        }

      } else {
        this.moveCount--
        for (en in this.souls){
          this.souls[en].y += (0.2 + this.moveCount / 100);
        }

      }

      if (this.moveCount == 0){
        this.moveUp = true;
      }

      if (this.moveCount == 30){
        this.moveUp = false;
      }

    },


    camera: function(){
      if ( player.x + player.width > ((width / 4) * 3) && mc.isActionActive("right")){
        // if (this.count <= 0) return;
        this.right = true;
        this.count++;
      } else {
        this.right = false;
      }

      if ( player.x < (width / 4) && mc.isActionActive("left")){
        if (this.count <= 0) return;
        this.left = true;
        this.count--;
      } else {
        this.left = false;
      }

      // console.log(this.lava)
    }
  }




// });