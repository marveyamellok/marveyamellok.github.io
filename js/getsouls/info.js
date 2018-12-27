var info = {
  color: "#fff",
  font: "20px Comic Sans MS",
  font2: " Comic Sans MS",
  text: "You get souls: ",
  x: 200,
  y: 90,
  lives:[],

  add: function(x, y, w, h, c, arr){
    var tmp = new Block(x, y, w, h, c);
    arr.push(tmp);
  },

  write: function(text, x, y, font){

    if (!font){
      ctx.font = this.font;
    } else {
      ctx.font = font + this.font2;
    }
    ctx.fillStyle = this.color;
    ctx.fillText(text, x, y);
  },

  life: function(x,y){
    var dx = width - 50;
    for (var i = 0; i < player.lifes; i++){
      dx -= 40;
      this.add(dx, 105, 25, 25, "red", this.lives)
    }
  },

  loseLife: function(){
    // if (player.isLose == true){
      // this.lives.splice(this.lives.length - 1, 1);
      // console.log(this.lives)
    // }
    if (player.isLose == true){
      player.lifes--;
    }
    // console.log(player.lifes)
  },

  draw: function(){
    for (en in this.lives){
      this.lives[en].draw("life");
    };
  },

  change: function(x,y){
    this.write(player.soulCount, x, y)
  }
}

