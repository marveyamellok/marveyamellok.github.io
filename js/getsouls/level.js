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

  var Enemy = function (x, y, w, h, color, moveRight, _let, enemyVector, enemyCollisions) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
    this.moveRight = true;
    this._let = true;
    this.enemyVector = 0.008;
    this.enemyCollisions = [];
  };

  Enemy.prototype = {
    draw: function(image){
      drawImage(this.x, this.y, this.width, this.height, image);
    }
  };


  var map = {
    color: "#448a5a",
    width: 40,
    height: 40,
    widthEnemy: 40,
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
      [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,1,0,0,0,3,0,0,0,0,4,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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
    enemyCollisions: [],
    moveCount: 0,
    moveUp: true,
    moveRight: true,
    enemyVector: 0.008,
    _let: false,
    enemyDx: 1,

    add: function(x, y, w, h, c, arr){
      var tmp = new Block(x, y, w, h, c);
      arr.push(tmp);
    },

    addEnemy: function(x, y, w, h, c, arr, moveRight, _let, enemyVector, enemyCollisions){
      var tmp = new Enemy(x, y, w, h, c, moveRight, _let, enemyVector, enemyCollisions);
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
            this.addEnemy(dx, dy, map.widthEnemy, map.widthEnemy, map.color, this.enemy, true, true, 0.008, [])
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

    enemyMove: function(){


      for (var i in level.nodes){
        var wall = level.nodes[i];

        for (var j in this.enemy){
          var item = this.enemy[j];


          if (isCollision(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){
            this.enemy[j]._let = true;
            this.enemy[j].enemyCollisions.push(wall);

            if (collisionWallsEnemy(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){ //////препятствие справа
              this.enemy[j].enemyVector *= -1;
              // this.enemy[j]._let = false;
            }
          } 
            if (this.enemy[j]._let){
              this.enemy[j].enemyVector *= -1;
              this.enemy[j]._let = false;
            }

          // console.log(this.enemy[j].collis)
          this.enemy[j].x += this.enemy[j].enemyVector; 
        }
      } 


    },

    soulsMove: function(){

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
    }
  }