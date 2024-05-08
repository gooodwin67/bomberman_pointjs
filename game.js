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
let sizeOneBlock = 64;
let timeBomb = 2000;
let enemies = [];
let enemyType = 1;

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

  }
}

for (var i = 0; i < 100/*54*/; i++) {
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

for (var i = 0; i < 1; i++) {
  var enemyBlock = whiteBlocks[getRandomNum(0, whiteBlocks.length - 1)]

  enemyType = getRandomNum(1, 3);

  level[blockk[0]][blockk[1]].e = enemyType;
  whiteBlocks.splice(blockk, 1);

  enemies.push(game.newRectObject({
    x: sizeOneBlock * enemyBlock[1],
    y: sizeOneBlock * enemyBlock[0],
    w: sizeOneBlock,
    h: sizeOneBlock,
    fillColor: enemyType == 1 ? "blue" : enemyType == 2 ? "green" : enemyType == 3 ? 'orange' : 'black',
    userData: {
      typeEnemy: enemyType,
      arrowRand: 0,
      moving: false,
      speed: enemyType == 1 || enemyType == 3 ? 1 : enemyType == 2 ? 2 : 0,
      canPath: enemyType == 3 ? true : false,
      pathActive: enemyType == 3 ? true : false,
      result: [],
    }
  }));
}












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


  //animation: tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),

  w: sizeOneBlock,
  h: sizeOneBlock,
})

let player = game.newMesh({
  x: sizeOneBlock,
  y: sizeOneBlock,
  angle: 0,
  add: [playerTop, playerBottom, playerLeft, playerRight, playerCenter, playerBody]
});

player.speed = sizeOneBlock / 20;
player.nowX = 1;
player.nowY = 1;
player.plantBomb = false;
player.canBombsNum = 1;
player.currentBombNum = 0;
player.boomPower = 2;
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
    bombRight: game.newAnimationObject({
      animation: tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 1.5,
      userData: {
        show: false,
      }
    }),

    bombLeft: game.newAnimationObject({
      animation: tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 1.5,
      userData: {
        show: false,
      }
    }),
    bombTop: game.newAnimationObject({
      animation: tiles.newImage("assets/big_dyna.png").getAnimation(582, 16 * 1, 16, 16, 4),
      x: 0,
      y: 0,
      w: sizeOneBlock / 1.5,
      h: 2,
      userData: {
        show: false,
      }
    }),
    bombBottom: game.newAnimationObject({
      animation: tiles.newImage("assets/big_dyna.png").getAnimation(582, 16 * 1, 16, 16, 4),
      x: 0,
      y: 0,
      w: sizeOneBlock / 1.5,
      h: 2,
      userData: {
        show: false,
      }
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
      userData: {
        show: false,
      }
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
      userData: {
        show: false,
      }
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
      userData: {
        show: false,
      }
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
      userData: {
        show: false,
      }
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
      userData: {
        show: false,
      }
    }),
    bombLeft: game.newRectObject({
      x: 0,
      y: 0,
      w: 2,
      h: sizeOneBlock / 2,
      fillColor: "blue",
      userData: {
        show: false,
      }
    }),
    bombTop: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
      userData: {
        show: false,
      }
    }),
    bombBottom: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
      fillColor: "blue",
      userData: {
        show: false,
      }
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



    player.bombsMas[numBomb].bombRight.show = true;
    player.bombsMas[numBomb].bombLeft.show = true;
    player.bombsMas[numBomb].bombTop.show = true;
    player.bombsMas[numBomb].bombBottom.show = true;
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

  blocks = [];

  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {

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

    }
  }


  /*//////////////////////////////////////////////////////////////*/

  enemies.forEach(element => {
    element.draw();


    element.nowX = Math.round(element.x / sizeOneBlock);
    element.nowY = Math.round(element.y / sizeOneBlock);





    if (!element.pathActive) {
      enemyGo(element, element.arrowRand);
    }
    else {
      enemyPathGo(element, element.arrowRand);
    }











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


      if (element.bombRight.show && !element.bombRight.isArrIntersect(blocks)) {
        console.log(element.bombRight);
        element.bombRight.w = (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10;
        fooExplosion(element.bombRight);
        element.bombRight.draw();
      }


      if (element.bombLeft.show && !element.bombLeft.isArrIntersect(blocks)) {
        element.bombLeft.w = (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10;
        element.bombLeft.x = element.bomb.x - (player.boomPower * sizeOneBlock) - sizeOneBlock / 5;
        fooExplosion(element.bombLeft);
        element.bombLeft.draw();
      }


      if (element.bombTop.show && !element.bombTop.isArrIntersect(blocks)) {
        element.bombTop.h = (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10;
        element.bombTop.y = element.bomb.y - (player.boomPower * sizeOneBlock) - sizeOneBlock / 5;
        fooExplosion(element.bombTop);
        element.bombTop.draw();
      }


      if (element.bombBottom.show && !element.bombBottom.isArrIntersect(blocks)) {
        element.bombBottom.h = (sizeOneBlock / 2 + player.boomPower * sizeOneBlock) - sizeOneBlock / 10;
        fooExplosion(element.bombBottom);
        element.bombBottom.draw();
      }


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
    arrow.show = false;
  }
  // if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 2) {
  //   level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 2;
  // }
  // else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 3) {
  //   level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 3;
  // }
  // else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 4) {
  //   level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 4;
  // }
  // else if (arrow.isArrIntersect(blocks) && level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].p == 9) {
  //   level[arrow.isArrIntersect(blocks).y / sizeOneBlock][arrow.isArrIntersect(blocks).x / sizeOneBlock].z = 9;
  // }
  if (arrow.isArrIntersect(blocksBomb) /*&& arrow.isArrIntersect(blocksBomb).num != element.num*/) {
    boom(arrow.isArrIntersect(blocksBomb).num);
  }

  if (arrow.isArrIntersect(enemies)) {
    enemies.splice(enemies.indexOf(arrow.isArrIntersect(enemies)), 1);
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


  if (element.typeEnemy == 1 || element.typeEnemy == 3) {
    if (level[element.moveY + arrowY][element.moveX + arrowX].b == 0 && level[element.moveY + arrowY][element.moveX + arrowX].p == 0 && level[element.moveY + arrowY][element.moveX + arrowX].e == 0 && !level[element.moveY + arrowY][element.moveX + arrowX].bomb) {
      element.moveTo(pjs.vector.point((element.moveX + arrowX) * sizeOneBlock, (element.moveY + arrowY) * sizeOneBlock), element.speed);

      if (Math.abs(element.y - (element.moveY + arrowY) * sizeOneBlock) < 1 && Math.abs(element.x - (element.moveX + arrowX) * sizeOneBlock) < 1) {
        element.moving = false;
        element.setPosition(pjs.vector.point(element.nowX * sizeOneBlock, element.nowY * sizeOneBlock));
        level[element.moveY][element.moveX].e = 0;
        level[element.moveY + arrowY][element.moveX + arrowX].e = element.typeEnemy;
        if (element.canPath) element.pathActive = true;
      }
    }
    else {
      element.arrowRand = getRandomNum(0, 3);
    }
  }
  else {
    if (level[element.moveY + arrowY][element.moveX + arrowX].b == 0 && level[element.moveY + arrowY][element.moveX + arrowX].e == 0 && !level[element.moveY + arrowY][element.moveX + arrowX].bomb) {
      element.moveTo(pjs.vector.point((element.moveX + arrowX) * sizeOneBlock, (element.moveY + arrowY) * sizeOneBlock), element.speed);

      if (Math.abs(element.y - (element.moveY + arrowY) * sizeOneBlock) < 1 && Math.abs(element.x - (element.moveX + arrowX) * sizeOneBlock) < 1) {
        element.moving = false;
        element.setPosition(pjs.vector.point(element.nowX * sizeOneBlock, element.nowY * sizeOneBlock));
        level[element.moveY][element.moveX].e = 0;
        level[element.moveY + arrowY][element.moveX + arrowX].e = element.typeEnemy;
        if (element.canPath) element.pathActive = true;
      }
    }
    else {
      element.arrowRand = getRandomNum(0, 3);
    }
  }

}


function enemyPathGo(element, arrow) {

  if (!element.moving) {




    let levelGraph = new Array(level.length).fill(0).map(el => new Array(level[0].length).fill(0));

    for (var i = 0; i < level.length; i++) {
      for (var j = 0; j < level[i].length; j++) {

        if (level[i][j].b == 9 || level[i][j].p != 0) {
          levelGraph[i][j] = 0;
        } else {
          levelGraph[i][j] = 1;
        }
      }
    }

    let masLevelGraph = new Graph(levelGraph);

    let start = masLevelGraph.grid[element.nowY][element.nowX];
    let end = masLevelGraph.grid[player.nowY][player.nowX];
    element.result = astar.search(masLevelGraph, start, end);





  }

  if (element.result.length == 0 || element.getDistance(playerCenter.getPosition()) > sizeOneBlock * 8) {
    //console.log(element.result.length);
    element.moving = false;
    element.pathActive = false;
  }
  else {
    //console.log(element.result[0]);
    element.moveTo(pjs.vector.point(element.result[0].y * sizeOneBlock, element.result[0].x * sizeOneBlock), element.speed);
    element.moving = true;
    if (Math.abs(element.y - element.result[0].x * sizeOneBlock) < 1 && Math.abs(element.x - element.result[0].y * sizeOneBlock) < 1) {
      element.moving = false;
    }
  }
}




















/*///////////////////////////////////////////////////////////////////////////////// */
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}