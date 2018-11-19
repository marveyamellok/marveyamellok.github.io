var canvas, ctx, width, heigth; 

var init = function(){
  canvas = document.getElementById("canvas");
  // height = $(document).height();
  // width = $(document).width();
  height = 600;
  width = 1080;
  canvas.height = height;
  canvas.width = width;
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

var drawImage = function(x, y, w, h, file){
  var image = document.getElementById(file);
  ctx.drawImage(image, x, y, w, h);
};

var isCollision = function(x1, y1, w1, h1, x2, y2, w2, h2){
  return ( x1 <= x2 + w2 && 
           x1 + w1 >= x2 && 
           y1 <= y2 + h2 && 
           h1 + y1 >= y2)
};


function isCollisionWidth(x1, w1, x2, w2){
  return ( x1 <= x2 + w2 && 
           x1 + w1 >= x2)
}

function isCollisionHeight( y1, h1, y2, h2){
  return ( y1 <= y2 + h2 && 
           h1 + y1 >= y2)
}

function collision(x1, y1, xx1, yy1, x2, y2, xx2, yy2){

  return (
    yy1 >= y1 && yy1 < yy2 && y1 < y2 &&
    (
      ( x1 < x2 && xx1 > x2 && xx1 < xx2 ) ||
      ( x1 == x2 && xx1 == xx2 ) ||
      ( x1 > x2 && x1 < xx2 && xx1 > xx2 )
    )
  )
}


// function collisNotW(x1, xx1, x2, xx2){
//   return (x1 < x2 && x1 < xx2) || (xx1 > xx2 && x1 > xx2)
// }



// function collisionTop(y1, y2, yy2){
//   return (y1 >= y2 && y1 <= y2 + yy2)
// }

// function collisionBottom(y1, yy1, y2, yy2){
//   return (y1 + yy2 <= y2 + yy2 && y1 + yy2 >= y2)
// }

// function collisionWalls(x1, y1, xx1, yy1, x2, y2, xx2, yy2){
//   return (
//     ((x1 + xx1 <= x2 + xx2 && x1 + xx1 >= x2) || (x1 >= x2 && x1 <= x2 + xx2)) && !(y1 + yy2 <= y2 + yy2 && y1 + yy2 >= y2)
//   )
// }

function collisionTop(y1, y2, yy2){
  return (Math.ceil(y1) >= y2 && Math.ceil(y1) <= y2 + yy2)
}

function collisionBottom(y1, yy1, y2, yy2){
  return (Math.ceil(y1) + yy2 <= y2 + yy2 && Math.ceil(y1) + yy2 >= y2)
}

function collisionBottomRight(x1, y1, xx1, yy1, x2, y2, xx2, yy2){
  return (Math.ceil(y1) + yy2 <= y2 + yy2 && Math.ceil(y1) + yy2 >= y2 &&
      (Math.ceil(x1) + Math.ceil(xx1) > x2 + xx2) && (Math.ceil(x1) + (Math.ceil(xx1) / 2) > x2 + xx2) &&
      (Math.ceil(x1) > x2) && (Math.ceil(x1) < x2 + xx2) && (Math.ceil(x1) > x2 + (xx2 / 2))
    )
}

function collisionWalls(x1, y1, xx1, yy1, x2, y2, xx2, yy2){
  return (
    ((Math.ceil(x1) + Math.ceil(xx1) <= x2 + xx2 && Math.ceil(x1) + Math.ceil(xx1) >= x2) || (Math.ceil(x1) >= x2 && Math.ceil(x1) <= x2 + xx2)) && !(Math.ceil(y1) + yy2 <= y2 + yy2 && Math.ceil(y1) + yy2 >= y2)
  )
}

// function collisionBottomHalf(x1, xx1, x2, xx2){
//  return ((Math.ceil(x1) < x2 && ((Math.ceil(x1) + Math.ceil(xx1)) / 2) <= x2 && (Math.ceil(x1) + Math.ceil(xx1) <= x2 + xx2)) ||
//     (Math.ceil(x1) > x2 &&  Math.ceil(x1) + Math.ceil(xx1) > (x2 + xx2)/2 && Math.ceil(x1) < Math.ceil(x1)  + Math.ceil(xx1) )
//   )
// }