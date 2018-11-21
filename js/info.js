var info = {
  color: "#fff",
  font: "20px Comic Sans MS",
  font2: " Comic Sans MS",
  text: "You get souls: ",
  x: 200,
  y: 90,


  write: function(text, x, y, font){

    if (!font){
      ctx.font = this.font;
    } else {
      ctx.font = font + this.font2;
    }
    ctx.fillStyle = this.color;
    
    ctx.fillText(text, x, y);
  },

  change: function(x,y){
    this.write(player.soulCount, x, y)
  }
}