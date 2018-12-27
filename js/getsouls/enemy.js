// var Enemy = function (x, y, w, h, color, moveRight, _let) {
//   this.x = x;
//   this.y = y;
//   this.width = w;
//   this.height = h;
//   this.color = color;
//   this.moveRight = true;
//   this._let = false;
// };

// Enemy.prototype = {
//   draw: function(image){
//     drawImage(this.x, this.y, this.width, this.height, image);
//   }
// };


// var enemy = {
//   right: false,
//   left: false,
//   enemy: [],
//   moveCount: 0,
//   moveUp: true,
//   moveRight: true,
//   enemyVector: -1,
//   _let: false,
//   enemyDx: 1,

//   add: function(x, y, w, h, c, arr, moveRight, _let){
//     var tmp = new Enemy(x, y, w, h, c, moveRight, _let);
//     arr.push(tmp);
//   },

//     create: function(map){

//       var $this = this;
//       console.log(map.level)

//       for (var t1 in map.level){
//         for (var t2 in map.level[t1]){
//           var tile = map.level[t1][t2];
//           var dx = t2*(map.width);
//           var dy = t1 * (map.height);
//           if (tile == 4){
//             this.add(dx, dy, map.widthEnemy, map.widthEnemy, map.color, this.enemy, true, false)
//           }
//         }
//       }
//     }, 

//     draw: function(){
//       for (en in this.enemy){
//         if (this.right) this.enemy[en].x = this.enemy[en].x - rightMove;
//         if (this.left) this.enemy[en].x = this.enemy[en].x + rightMove;
//         this.enemy[en].draw("enemy");
//       }
//       console.log(this.enemy)

//     },

//     enemyMove: function(){

//       var collisions = [];

//       for (var i in level.nodes){
//         var wall = level.nodes[i];

//         for (var j in this.enemy){
//           var item = this.enemy[j];

//           if (this.enemy[j].moveRight){
//             this.enemyVector = 0.008;
//           } else {
//             this.enemyVector = -0.008;
//           }

//           if (isCollision(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){
//             collisions.push(wall);
//             this.enemy[j]._let = true;

//             if(collisionWallsRight(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){
//               this.enemy[j].moveRight = false;
//               console.log("rigth");
//             }

//             if(collisionWallsLeft(item.x, item.y, item.width, item.height, wall.x, wall.y, wall.width, wall.height)){
//               this.enemy[j].moveRight = true;
//               console.log("left");
//             }
//           } 

//           // console.log(this.enemy[j]._let)
//             this.enemy[j].x += this.enemyVector;
//         }
//       } 
//           // console.log(this.enemy[j]._let)

//       // if(!this._let) {
//       //   this.enemyVector *= -1;
//       // }

//     },


//     camera: function(){
//       if ( player.x + player.width > ((width / 4) * 3) && mc.isActionActive("right")){
//         // if (this.count <= 0) return;
//         this.right = true;
//         this.count++;
//       } else {
//         this.right = false;
//       }

//       if ( player.x < (width / 4) && mc.isActionActive("left")){
//         if (this.count <= 0) return;
//         this.left = true;
//         this.count--;
//       } else {
//         this.left = false;
//       }
//     }

// }
