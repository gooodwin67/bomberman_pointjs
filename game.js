var pjs = new PointJS(640, 480, {
  backgroundColor: '#ffffff'
});

pjs.system.initFullPage(); // развернули игру на полный экран
var game = pjs.game;
var tiles = pjs.tiles;
var key = pjs.keyControl.initControl();








let level = [
  [{ b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 2 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 1, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 2 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 1, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 1, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 2 }, { b: 0, e: 1, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
]
level = [
  [{ b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 9 }],
  [{ b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }, { b: 9 }],
]

//31*13 карта
//54 блоки
//6 враги


//let levelGraph = new Array(level.length).fill(0).map(el => new Array(level[0].length).fill(0));

let blocks = [];
let blocksBomb = [];
let sizeOneBlock = 20;
let timeBomb = 2000;
let enemies = [];

let whiteBlocks = [];


for (var i = 0; i < level.length; i++) {
  for (var j = 0; j < level[i].length; j++) {


    if (level[i][j].e == undefined) level[i][j].e = 0;
    if (level[i][j].p == undefined) level[i][j].p = 0;

    if (level[i][j].b == 0) {
      whiteBlocks.push([i, j])
    }

    if (level[i][j].b == 9) {
      blocks.push(game.newRectObject({
        x: sizeOneBlock * j,
        y: sizeOneBlock * i,
        w: sizeOneBlock,
        h: sizeOneBlock,
        fillColor: "black",
      }));
    }
    else if (level[i][j].p != 0) {
      blocks.push(game.newRectObject({
        x: sizeOneBlock * j,
        y: sizeOneBlock * i,
        w: sizeOneBlock,
        h: sizeOneBlock,
        fillColor: "gray",
      }));
    }
    if (level[i][j].e == 1) {
      enemies.push(game.newRectObject({
        x: sizeOneBlock * j,
        y: sizeOneBlock * i,
        w: sizeOneBlock,
        h: sizeOneBlock,
        fillColor: "blue",
        userData: {
          typeEnemy: 1,
          arrowRand: 0,
          moving: false,
        }
      }));
    }
  }
}

for (var i = 0; i < 54; i++) {
  var blockk = whiteBlocks[getRandomNum(0, whiteBlocks.length - 1)]

  level[blockk[0]][blockk[1]].p = 2;
  whiteBlocks.splice(blockk, 1);

  blocks.push(game.newRectObject({
    x: sizeOneBlock * blockk[1],
    y: sizeOneBlock * blockk[0],
    w: sizeOneBlock,
    h: sizeOneBlock,
    fillColor: "gray",
  }));
}

for (var i = 0; i < 6; i++) {
  var enemyBlock = whiteBlocks[getRandomNum(0, whiteBlocks.length - 1)]

  level[blockk[0]][blockk[1]].e = 1;
  whiteBlocks.splice(blockk, 1);

  enemies.push(game.newRectObject({
    x: sizeOneBlock * enemyBlock[1],
    y: sizeOneBlock * enemyBlock[0],
    w: sizeOneBlock,
    h: sizeOneBlock,
    fillColor: "blue",
    userData: {
      typeEnemy: 1,
      arrowRand: 0,
      moving: false,
      speed: 1,
    }
  }));
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

let playerNumAnim = 0;
let playerBody = game.newAnimationObject({
  animation: tiles.newImage("assets/player.png").getAnimation(0, playerNumAnim, 32, 32, 6),
  x: 0,
  y: 0,
  w: sizeOneBlock,
  h: sizeOneBlock,
})

let player = game.newMesh({
  x: sizeOneBlock,
  y: sizeOneBlock,
  angle: 0,
  add: [playerTop, playerBottom, playerLeft, playerRight, playerCenter, playerBody]
});

player.speed = sizeOneBlock / 40;
player.nowX = 1;
player.nowY = 1;
player.plantBomb = false;
player.canBombsNum = 3;
player.currentBombNum = 0;
player.boomPower = 0.8;
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









/*//////////////////////////////////////////////////////////////////////////*/

function boom(numBomb) {
  if (player.bombsMas[numBomb].planting) {
    level[Math.round(player.bombsMas[numBomb].bomb.y / sizeOneBlock)][Math.round(player.bombsMas[numBomb].bomb.x / sizeOneBlock)].bomb = false;
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

  //pjs.camera.follow(playerCenter, 10);

  player.draw();

  player.nowX = Math.round(player.x / sizeOneBlock);
  player.nowY = Math.round(player.y / sizeOneBlock);


  player.bombsMas.splice(player.canBombsNum, 10)
  player.canBombMas = player.bombsMas.filter(el => !el.planting);
  player.plantingBombMas = player.bombsMas.filter(el => el.planting || el.explosion);

  if (!playerCenter.isArrIntersect(blocksBomb)) {
    playerCanWalkOnBomb = false;
  }

  /*//////////////////////////////////////////////////////////////*/

  enemies.forEach(element => {
    element.draw();


    element.nowX = Math.round(element.x / sizeOneBlock);
    element.nowY = Math.round(element.y / sizeOneBlock);


    



    enemyGo(element, element.arrowRand);











  })

  /*//////////////////////////////////////////////////////////////*/



  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {

      if (level[i][j].b == 9) {
        game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "black",
        }).draw();
      }
      else if (level[i][j].p != 0) {
        game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "gray",
        }).draw();
      }
      // if (level[i][j].e == 1) {
      //   game.newRectObject({
      //     x: sizeOneBlock * j + 2,
      //     y: sizeOneBlock * i + 2,
      //     w: sizeOneBlock * 1.5,
      //     h: sizeOneBlock * 1.5,
      //     fillColor: "green",
      //   }).draw();
      // }

    }
  }


  if (key.isPress("D") || key.isPress("RIGHT")) {
    animPlayer(playerBody, 128);
    playerBody.flip.x = 0;
  }
  else if (key.isPress("A") || key.isPress("LEFT")) {
    animPlayer(playerBody, 128);
    playerBody.flip.x = 1;
  }
  else if (key.isPress("W") || key.isPress("UP")) {
    animPlayer(playerBody, 160);
  }
  else if (key.isPress("S") || key.isPress("DOWN")) {
    animPlayer(playerBody, 96);
  }
  if (pjs.keyControl.getCountKeysDown() == 0 && player.moving == true) {
    animPlayer(playerBody, 0);
    player.moving = false;
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
      level[Math.round(player.canBombMas[0].bomb.y / sizeOneBlock)][Math.round(player.canBombMas[0].bomb.x / sizeOneBlock)].bomb = true;

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

  if (arrow.isArrIntersect(enemies)) {
    enemies.splice(enemies.indexOf(arrow.isArrIntersect(enemies)), 1);
    console.log(11111);
  }

}

function animPlayer(pers, vertTile) {
  pers.setAnimation(tiles.newImage("assets/player.png").getAnimation(0, vertTile, 32, 32, 6));
  pers.w = sizeOneBlock;
  pers.h = sizeOneBlock;
}

function enemyGo(element, arrow) {
  if (!element.moving) {

    element.moveX = element.nowX
    element.moveY = element.nowY
    if (getRandomNum(0, 8) == 1) element.arrowRand = getRandomNum(0, 3);
    element.moving = true;
  }
  
  let arrowX = 0;
  let arrowY = 0;
  if (arrow == 0) {
    arrowX = 1
  }
  else if (arrow == 1) {
    arrowX = -1
  }
  else if (arrow == 2) {
    arrowY = 1
  }
  else if (arrow == 3) {
    arrowY = -1
  }



  if (level[element.moveY + arrowY][element.moveX + arrowX].b == 0 && level[element.moveY + arrowY][element.moveX + arrowX].p == 0 && level[element.moveY + arrowY][element.moveX + arrowX].e == 0 && !level[element.moveY + arrowY][element.moveX + arrowX].bomb) {
    element.moveTo(pjs.vector.point((element.moveX + arrowX) * sizeOneBlock, (element.moveY + arrowY) * sizeOneBlock), element.speed);

    if (Math.abs(element.y - (element.moveY + arrowY) * sizeOneBlock) < 1 && Math.abs(element.x - (element.moveX + arrowX) * sizeOneBlock) < 1) {
      element.moving = false;
      element.setPosition(pjs.vector.point(element.nowX * sizeOneBlock, element.nowY * sizeOneBlock));
      level[element.moveY][element.moveX].e = 0;
      level[element.moveY + arrowY][element.moveX + arrowX].e = element.typeEnemy;
    }
  }
  else {
    element.arrowRand = getRandomNum(0, 3);
  }

}

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}