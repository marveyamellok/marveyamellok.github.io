// $(function(){

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
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1],
      [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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

    add: function(x, y, w, h, c){
      var tmp = new Block(x, y, w, h, c);
      this.nodes.push(tmp);
    },

    addLava: function(x, y, w, h, c){
      var tmp = new Block(x, y, w, h, c);
      this.lava.push(tmp);
    },

    addSoul: function(x, y, w, h, c){
      var tmp = new Block(x, y, w, h, c);
      this.souls.push(tmp);
    },

    create: function(map){

      var $this = this;

      for (var t1 in map.level){
        for (var t2 in map.level[t1]){
          var tile = map.level[t1][t2];
          var dx = t2*(map.width);
          var dy = t1 * (map.height);
          if (tile == 1){
            this.add(dx, dy, map.width, map.height, map.color)
          }

          if (tile == 2){
            this.addLava(dx, dy, map.width, map.height, map.color)
          }

          if (tile == "3"){
            this.addSoul(dx, dy, map.width, map.height, map.color)
          }
        }
      }
    }, 

    draw: function(){
      for (en in this.nodes){
        if (this.right) this.nodes[en].x = this.nodes[en].x - rightMove;
        if (this.left) this.nodes[en].x = this.nodes[en].x + rightMove;
        this.nodes[en].draw("grass");
      }
    },

    drawLava: function(){
      for (en in this.lava){
        if (this.right) this.lava[en].x = this.lava[en].x - rightMove;
        if (this.left) this.lava[en].x = this.lava[en].x + rightMove;
        this.lava[en].draw("lava");
      }
    },

    drawSoul: function(){
      for (en in this.souls){
        if (this.right) this.souls[en].x = this.souls[en].x - rightMove;
        if (this.left) this.souls[en].x = this.souls[en].x + rightMove;
        this.souls[en].draw("soul");
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