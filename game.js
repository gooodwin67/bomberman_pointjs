var pjs = new PointJS(640, 480, {
  backgroundColor: '#ffffff'
});

pjs.system.initFullPage(); // развернули игру на полный экран
var game = pjs.game;
var tiles = pjs.tiles;
var key = pjs.keyControl.initControl();








let level = [
  [{ b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 2 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 2 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 1, p: 0 }, { b: 0, e: 0, p: 2 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
]

//let levelGraph = new Array(level.length).fill(0).map(el => new Array(level[0].length).fill(0));

let blocks = [];
let blocksBomb = [];
let sizeOneBlock = 64;
let timeBomb = 6000;

for (var i = 0; i < level.length; i++) {
  for (var j = 0; j < level[i].length; j++) {

    if (level[i][j].b == 9) {
      blocks.push(game.newRectObject({
        x: sizeOneBlock * j,
        y: sizeOneBlock * i,
        w: sizeOneBlock,
        h: sizeOneBlock,
        fillColor: "grey",
      }));
    }
    else if (level[i][j].p != 0) {
      blocks.push(game.newRectObject({
        x: sizeOneBlock * j,
        y: sizeOneBlock * i,
        w: sizeOneBlock,
        h: sizeOneBlock,
        fillColor: "black",
      }));
    }
  }
}



// for (var i = 0; i < level.length; i++) {
//   for (var j = 0; j < level[i].length; j++) {
//     if (level[i][j].b == 1 || level[i][j].b == 9) {
//       levelGraph[i][j] = 0;

//     } else if (level[i + 1][j].b == 1 || level[i + 1][j].b == 2 || level[i + 1][j].b == 9) {
//       levelGraph[i][j] = 1;
//     }
//     else if (level[i][j - 1].b == 1) {
//       for (var k = i - 1; k < level.length; k++) {
//         levelGraph[k][j] = 2;
//       }
//     }
//     else if (level[i][j + 1].b == 1) {
//       for (var k = i - 1; k < level.length; k++) {
//         levelGraph[k][j] = 2;
//       }
//     }

//     else {
//       //levelGraph[i][j] = 0;
//     }
//   }
// }

//let masLevelGraph = new Graph(levelGraph);




let playerBody = game.newRectObject({
  x: 0,
  y: 0,
  w: sizeOneBlock,
  h: sizeOneBlock,
  fillColor: "green",
})

let playerTop = game.newRectObject({
  x: sizeOneBlock / 12,
  y: 0,
  w: sizeOneBlock / 1.2,
  h: 2,
  fillColor: "red",
})
let playerBottom = game.newRectObject({
  x: sizeOneBlock / 12,
  y: sizeOneBlock-2,
  w: sizeOneBlock / 1.2,
  h: 2,
  fillColor: "red",
})
let playerLeft = game.newRectObject({
  x: 0,
  y: sizeOneBlock / 12,
  w: 2,
  h: sizeOneBlock / 1.2,
  fillColor: "red",
})
let playerRight = game.newRectObject({
  x: sizeOneBlock-2,
  y: sizeOneBlock / 12,
  w: 2,
  h: sizeOneBlock / 1.2,
  fillColor: "red",
})

let playerCenter = game.newRectObject({
  x: sizeOneBlock / 2 - sizeOneBlock / 10 /2,
  y: sizeOneBlock / 2 - sizeOneBlock / 10 /2,
  w: sizeOneBlock / 10,
  h: sizeOneBlock / 10,
  fillColor: "red",
})

let player = game.newMesh({
  x: sizeOneBlock,
  y: sizeOneBlock,
  angle: 0,
  add: [playerBody, playerTop, playerBottom, playerLeft, playerRight, playerCenter]
});

player.speed = sizeOneBlock / 40;
player.nowX = 1;
player.nowY = 1;
player.plantBomb = false;
player.canBombsNum = 3;
player.currentBombNum = 0;
player.boomPower = 1;
player.canBombMas = [];/////////////////////////////////////
player.bombsMas = [
  {
    bomb: game.newRectObject({
      x: sizeOneBlock,
      y: sizeOneBlock,
      w: sizeOneBlock/2,
      h: sizeOneBlock/2,
      fillColor: "red",
    }),
    timerExplosion: pjs.OOP.newTimer(500, function () {
      explosionBoom(0);
    }),
    bombRight: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock/2,
      fillColor: "blue",
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock/2,
      fillColor: "blue",
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock/2,
      h: 2,
      fillColor: "blue",
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock/2,
      h: 2,
      fillColor: "blue",
    }),
    bombX: 0,
    bombY: 0,
    planting: false,
    explosion: false,
    timer: pjs.OOP.newTimer(timeBomb, function () {
      boom(0);
    })
  },

  ///////////////////////////////////////////////////////
  {
    bomb: game.newRectObject({
      x: sizeOneBlock,
      y: sizeOneBlock,
      w: sizeOneBlock/2,
      h: sizeOneBlock/2,
      fillColor: "red",
    }),
    timerExplosion: pjs.OOP.newTimer(500, function () {
      explosionBoom(1);
    }),
    bombRight: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock/2,
      fillColor: "blue",
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock/2,
      fillColor: "blue",
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock/2,
      h: 2,
      fillColor: "blue",
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock/2,
      h: 2,
      fillColor: "blue",
    }),
    bombX: 0,
    bombY: 0,
    planting: false,
    explosion: false,
    timer: pjs.OOP.newTimer(timeBomb, function () {
      boom(1);
    })
  },
  {
    bomb: game.newRectObject({
      x: sizeOneBlock,
      y: sizeOneBlock,
      w: sizeOneBlock/2,
      h: sizeOneBlock/2,
      fillColor: "red",
    }),
    timerExplosion: pjs.OOP.newTimer(500, function () {
      explosionBoom(2);
    }),
    bombRight: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock/2,
      fillColor: "blue",
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock/2,
      fillColor: "blue",
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock/2,
      h: 2,
      fillColor: "blue",
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock/2,
      h: 2,
      fillColor: "blue",
    }),
    bombX: 0,
    bombY: 0,
    planting: false,
    explosion: false,
    timer: pjs.OOP.newTimer(timeBomb, function () {
      boom(2);
    })
  },
];

/*//////////////////////////////////////////////////////////////////////////*/

function boom(numBomb) {
  player.bombsMas[numBomb].explosion = true;
  player.bombsMas[numBomb].timerExplosion.restart();
}

function explosionBoom(numBomb) {
  player.bombsMas[numBomb].explosion = false;
  player.bombsMas[numBomb].planting = false;
  
  player.bombsMas[numBomb].bombRight.w = 2;
  player.bombsMas[numBomb].bombLeft.w = 2;
  player.bombsMas[numBomb].bombTop.h = 2;
  player.bombsMas[numBomb].bombBottom.h = 2;
  blocksBomb.splice(blocksBomb.indexOf(player.bombsMas[numBomb]), 1);

  player.canBombsNum++;
  
}




let gameStarted = true;





game.newLoop('myGame', function () {

  //pjs.camera.follow(player, 10);

  player.draw();
  
  player.nowX = Math.round(player.x / sizeOneBlock);
  player.nowY = Math.round(player.y / sizeOneBlock);

  console.log(player.canBombsNum);



  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {

      if (level[i][j].b == 9) {
        game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "grey",
        }).draw();
      }
      else if (level[i][j].p != 0) {
        game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "black",
        }).draw();
      }

    }
  }





  if (key.isDown("D") || key.isDown("RIGHT")) {
    player.moving = true;
    player.arrow = 'right';
    if (!playerRight.isArrIntersect(blocks) && !playerRight.isArrIntersect(blocksBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x + player.speed, playerBody.getPosition().y));
    }

  } else if (key.isDown("A") || key.isDown("LEFT")) {
    player.moving = true;
    player.arrow = 'left';
    if (!playerLeft.isArrIntersect(blocks) && !playerLeft.isArrIntersect(blocksBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x - player.speed, playerBody.getPosition().y));
    }
  }

  if (key.isDown("W") || key.isDown("UP")) {
    player.moving = true;
    player.arrow = 'up';
    if (!playerTop.isArrIntersect(blocks) && !playerTop.isArrIntersect(blocksBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y - player.speed));
    }

  } else if (key.isDown("S") || key.isDown("DOWN")) {
    player.moving = true;
    player.arrow = 'down';
    if (!playerBottom.isArrIntersect(blocks) && !playerBottom.isArrIntersect(blocksBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y + player.speed));
    }
  }


  if (key.isPress("Z")) {
    player.currentBombNum = player.canBombsNum-1;
    if (player.canBombsNum > 0 && !player.bombsMas[player.currentBombNum].planting) {

      player.canBombsNum--;

      player.bombsMas[player.currentBombNum].planting = true;
      player.bombsMas[player.currentBombNum].bomb.setPosition(pjs.vector.point(player.nowX * sizeOneBlock + sizeOneBlock/4, player.nowY * sizeOneBlock + sizeOneBlock/4));
      blocksBomb.push(player.bombsMas[player.currentBombNum].bomb);

      player.bombsMas[player.currentBombNum].bombX = player.nowX * sizeOneBlock;
      player.bombsMas[player.currentBombNum].bombY = player.nowY * sizeOneBlock + sizeOneBlock/4;

      player.bombsMas[player.currentBombNum].bombRight.setPosition(pjs.vector.point(player.bombsMas[player.currentBombNum].bombX+sizeOneBlock/2, player.bombsMas[player.currentBombNum].bombY));
      player.bombsMas[player.currentBombNum].bombLeft.setPosition(pjs.vector.point(player.bombsMas[player.currentBombNum].bombX+sizeOneBlock/2, player.bombsMas[player.currentBombNum].bombY));
      player.bombsMas[player.currentBombNum].bombTop.setPosition(pjs.vector.point(player.bombsMas[player.currentBombNum].bombX+sizeOneBlock/4, player.bombsMas[player.currentBombNum].bombY+sizeOneBlock/4));
      player.bombsMas[player.currentBombNum].bombBottom.setPosition(pjs.vector.point(player.bombsMas[player.currentBombNum].bombX+sizeOneBlock/4, player.bombsMas[player.currentBombNum].bombY+sizeOneBlock/4));

      player.bombsMas[player.currentBombNum].timer.restart();



      // if (player.canBombsNum == 2) player.currentBombNum += 1;
      // else if (player.canBombsNum == 3) player.currentBombNum += 2;

      // else if (player.canBombsNum > 0 && player.currentBombNum > 0) player.currentBombNum -= 1;
    }

  }

  player.bombsMas.forEach(element => {
    if (element.planting) {
      element.bomb.draw();
    }
    if (element.explosion) {

      if (element.bombRight.w < (sizeOneBlock/2 + player.boomPower*sizeOneBlock)-sizeOneBlock/10 && !element.bombRight.isArrIntersect(blocks)) {
        element.bombRight.w += sizeOneBlock/10;
        element.bombRight.draw();
      }
      
      if (element.bombLeft.w < (sizeOneBlock/2 + player.boomPower*sizeOneBlock)-sizeOneBlock/10 && !element.bombLeft.isArrIntersect(blocks)) {
        element.bombLeft.w += sizeOneBlock/10;
        element.bombLeft.x -= sizeOneBlock/10;
        element.bombLeft.draw();
      }

      if (element.bombTop.h < (sizeOneBlock/2 + player.boomPower*sizeOneBlock)-sizeOneBlock/10 && !element.bombTop.isArrIntersect(blocks)) {
        element.bombTop.h += sizeOneBlock/10;
        element.bombTop.y -= sizeOneBlock/10;
        element.bombTop.draw();
      }

      if (element.bombBottom.h < (sizeOneBlock/2 + player.boomPower*sizeOneBlock)-sizeOneBlock/10 && !element.bombBottom.isArrIntersect(blocks)) {
        element.bombBottom.h += sizeOneBlock/10;
        element.bombBottom.draw();
      }
      



      fooExplosion(element.bombRight);
      fooExplosion(element.bombLeft);
      fooExplosion(element.bombTop);
      fooExplosion(element.bombBottom);
      
      
    }
  });





});

game.setLoop('myGame');
if (gameStarted) {
  game.start();
}


function fooExplosion(arrow) {
  if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].p != 0) {
    level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].p = 0;
    blocks.splice(blocks.indexOf(arrow.isArrIntersect(blocks)), 1);
  }
  if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].p == 2) {
    level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].z = 2;
  }
  else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].p == 3) {
    level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].z = 3;
  }
  if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].p == 4) {
    level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].z = 4;
  }
  if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].p == 9) {
    level[arrow.isArrIntersect(blocks).y/sizeOneBlock][arrow.isArrIntersect(blocks).x/sizeOneBlock].z = 9;
  }
}