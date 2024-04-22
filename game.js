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
let timeBomb = 5000;

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
  y: sizeOneBlock - 2,
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
  x: sizeOneBlock - 2,
  y: sizeOneBlock / 12,
  w: 2,
  h: sizeOneBlock / 1.2,
  fillColor: "red",
})

let playerCenter = game.newRectObject({
  x: sizeOneBlock / 2 - sizeOneBlock / 2.5 / 2,
  y: sizeOneBlock / 2 - sizeOneBlock / 2.5 / 2,
  w: sizeOneBlock / 2.5,
  h: sizeOneBlock / 2.5,
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
playerCanWalkOnBomb = false;

player.bombsMas = [
  {
    num: 0,
    bomb: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: sizeOneBlock / 2,
      fillColor: "red",
    }),
    timerExplosion: function () {
      var num = this.num;
      return pjs.OOP.newTimer(500, function () {
        explosionBoom(num);
      });
    },
    bombRight: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
    }),
    bombX: 0,
    bombY: 0,
    planting: false,
    explosion: false,
    timer: function () {
      var num = this.num;
      return pjs.OOP.newTimer(timeBomb, function () {
        boom(num);
      });
    },
  },
  {
    num: 1,
    bomb: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: sizeOneBlock / 2,
      fillColor: "red",
    }),
    timerExplosion: function () {
      var num = this.num;
      return pjs.OOP.newTimer(500, function () {
        explosionBoom(num);
      });
    },
    bombRight: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
    }),
    bombX: 0,
    bombY: 0,
    planting: false,
    explosion: false,
    timer: function () {
      var num = this.num;
      return pjs.OOP.newTimer(timeBomb, function () {
        boom(num);
      });
    },
  },
  {
    num: 2,
    bomb: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: sizeOneBlock / 2,
      fillColor: "red",
    }),
    timerExplosion: function () {
      var num = this.num;
      return pjs.OOP.newTimer(500, function () {
        explosionBoom(num);
      });
    },
    bombRight: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
    }),
    bombX: 0,
    bombY: 0,
    planting: false,
    explosion: false,
    timer: function () {
      var num = this.num;
      return pjs.OOP.newTimer(timeBomb, function () {
        boom(num);
      });
    },

  },
];

player.bombsMas[0].bomb.num = 0;
player.bombsMas[1].bomb.num = 1;
player.bombsMas[2].bomb.num = 2;

player.canBombMas = player.bombsMas;
player.plantingBombMas = [];

/*//////////////////////////////////////////////////////////////////////////*/

function boom(numBomb) {
  if (player.bombsMas[numBomb].planting) {
    player.bombsMas[numBomb].explosion = true;
    player.bombsMas[numBomb].timerExplosion().restart();
    blocksBomb.splice(0, 1);
  }
}

function explosionBoom(numBomb) {

  if (player.bombsMas[numBomb].explosion == true) {
    player.bombsMas[numBomb].explosion = false;
    player.bombsMas[numBomb].planting = false;
    player.bombsMas[numBomb].bombRight.w = 2;
    player.bombsMas[numBomb].bombLeft.w = 2;
    player.bombsMas[numBomb].bombTop.h = 2;
    player.bombsMas[numBomb].bombBottom.h = 2;
  }
}




let gameStarted = true;





game.newLoop('myGame', function () {

  //pjs.camera.follow(player, 10);

  player.draw();

  player.nowX = Math.round(player.x / sizeOneBlock);
  player.nowY = Math.round(player.y / sizeOneBlock);


  player.bombsMas.splice(player.canBombsNum, 10)
  player.canBombMas = player.bombsMas.filter(el => !el.planting);
  player.plantingBombMas = player.bombsMas.filter(el => el.planting || el.explosion);

  if (!playerCenter.isArrIntersect(blocksBomb)) {
    playerCanWalkOnBomb = false;
  }









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
    if (!playerRight.isArrIntersect(blocks) && (!playerRight.isArrIntersect(blocksBomb) || playerCanWalkOnBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x + player.speed, playerBody.getPosition().y));
    }

  } else if (key.isDown("A") || key.isDown("LEFT")) {
    player.moving = true;
    player.arrow = 'left';
    if (!playerLeft.isArrIntersect(blocks) && (!playerLeft.isArrIntersect(blocksBomb) || playerCanWalkOnBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x - player.speed, playerBody.getPosition().y));
    }
  }

  if (key.isDown("W") || key.isDown("UP")) {
    player.moving = true;
    player.arrow = 'up';
    if (!playerTop.isArrIntersect(blocks) && (!playerTop.isArrIntersect(blocksBomb) || playerCanWalkOnBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y - player.speed));
    }

  } else if (key.isDown("S") || key.isDown("DOWN")) {
    player.moving = true;
    player.arrow = 'down';
    if (!playerBottom.isArrIntersect(blocks) && (!playerBottom.isArrIntersect(blocksBomb) || playerCanWalkOnBomb)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y + player.speed));
    }
  }


  if (key.isPress("Z")) {


    if (player.canBombMas.length > 0 && !player.plantingBombMas.some((val) => Math.round(val.bomb.x / sizeOneBlock) === player.nowX && Math.round(val.bomb.y / sizeOneBlock) === player.nowY)) {

      player.canBombMas[0].planting = true;
      playerCanWalkOnBomb = true;
      player.canBombMas[0].bomb.setPosition(pjs.vector.point(player.nowX * sizeOneBlock + sizeOneBlock / 4, player.nowY * sizeOneBlock + sizeOneBlock / 4));
      blocksBomb.push(player.canBombMas[0].bomb);
      //console.log(player.canBombMas[0].bomb);

      player.canBombMas[0].bombX = player.nowX * sizeOneBlock;
      player.canBombMas[0].bombY = player.nowY * sizeOneBlock + sizeOneBlock / 4;

      player.canBombMas[0].bombRight.setPosition(pjs.vector.point(player.canBombMas[0].bombX + sizeOneBlock / 2, player.canBombMas[0].bombY));
      player.canBombMas[0].bombLeft.setPosition(pjs.vector.point(player.canBombMas[0].bombX + sizeOneBlock / 2, player.canBombMas[0].bombY));
      player.canBombMas[0].bombTop.setPosition(pjs.vector.point(player.canBombMas[0].bombX + sizeOneBlock / 4, player.canBombMas[0].bombY + sizeOneBlock / 4));
      player.canBombMas[0].bombBottom.setPosition(pjs.vector.point(player.canBombMas[0].bombX + sizeOneBlock / 4, player.canBombMas[0].bombY + sizeOneBlock / 4));

      player.canBombMas[0].timer().restart();

    }

  }

  player.bombsMas.forEach(element => {
    if (element.planting && !element.explosion) {
      element.bomb.draw();
    }
    if (element.explosion) {

      if (element.bombRight.w < (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10 && !element.bombRight.isArrIntersect(blocks)) {
        element.bombRight.w += sizeOneBlock / 10;
        element.bombRight.draw();
      }

      if (element.bombLeft.w < (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10 && !element.bombLeft.isArrIntersect(blocks)) {
        element.bombLeft.w += sizeOneBlock / 10;
        element.bombLeft.x -= sizeOneBlock / 10;
        element.bombLeft.draw();
      }

      if (element.bombTop.h < (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10 && !element.bombTop.isArrIntersect(blocks)) {
        element.bombTop.h += sizeOneBlock / 10;
        element.bombTop.y -= sizeOneBlock / 10;
        element.bombTop.draw();
      }

      if (element.bombBottom.h < (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10 && !element.bombBottom.isArrIntersect(blocks)) {
        element.bombBottom.h += sizeOneBlock / 10;
        element.bombBottom.draw();
      }




      fooExplosion(element, element.bombRight);
      fooExplosion(element, element.bombLeft);
      fooExplosion(element, element.bombTop);
      fooExplosion(element, element.bombBottom);


    }
  });





});

game.setLoop('myGame');
if (gameStarted) {
  game.start();
}


function fooExplosion(element, arrow) {
  if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p != 0) {
    level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p = 0;
    blocks.splice(blocks.indexOf(arrow.isArrIntersect(blocks)), 1);
  }
  if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 2) {
    level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 2;
  }
  else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 3) {
    level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 3;
  }
  else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 4) {
    level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 4;
  }
  else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 9) {
    level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 9;
  }
  if (arrow.isArrIntersect(blocksBomb) /*&& arrow.isArrIntersect(blocksBomb).num != element.num*/) {
    boom(arrow.isArrIntersect(blocksBomb).num);
  }

}