var pjs = new PointJS(640, 480, {
  backgroundColor: '#ffffff'
});

pjs.system.initFullPage(); // развернули игру на полный экран
var game = pjs.game;
var tiles = pjs.tiles;
var key = pjs.keyControl.initControl();








let level = [
  [{ b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 1 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 1, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 0, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
  [{ b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }, { b: 9, e: 0, p: 0 }],
]

//let levelGraph = new Array(level.length).fill(0).map(el => new Array(level[0].length).fill(0));

let blocks = [];
let sizeOneBlock = 64;

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
  y: -2,
  w: sizeOneBlock / 1.2,
  h: 2,
  fillColor: "red",
})
let playerBottom = game.newRectObject({
  x: sizeOneBlock / 12,
  y: sizeOneBlock,
  w: sizeOneBlock / 1.2,
  h: 2,
  fillColor: "red",
})
let playerLeft = game.newRectObject({
  x: -2,
  y: sizeOneBlock / 12,
  w: 2,
  h: sizeOneBlock / 1.2,
  fillColor: "red",
})
let playerRight = game.newRectObject({
  x: sizeOneBlock,
  y: sizeOneBlock / 12,
  w: 2,
  h: sizeOneBlock / 1.2,
  fillColor: "red",
})

let playerCenter = game.newRectObject({
  x: sizeOneBlock / 2,
  y: sizeOneBlock / 2,
  w: sizeOneBlock / 20,
  h: sizeOneBlock / 20,
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
player.canBombsNum = 2;
player.currentBombNum = 0;
player.bombsMas = [
  {
    bomb: game.newRectObject({
      x: sizeOneBlock,
      y: sizeOneBlock,
      w: sizeOneBlock,
      h: sizeOneBlock,
      fillColor: "red",
    }),
    planting: false,
    timer: pjs.OOP.newTimer(2000, function () {
      player.bombsMas[0].planting = false;
      blocks.splice(blocks.indexOf(player.bombsMas[0].bomb), 1);
    })
  },
  {
    bomb: game.newRectObject({
      x: 0,
      y: 0,
      w: sizeOneBlock,
      h: sizeOneBlock,
      fillColor: "red",
    }),
    planting: false,
    timer: pjs.OOP.newTimer(2000, function () {
      player.bombsMas[1].planting = false;
      blocks.splice(blocks.indexOf(player.bombsMas[1].bomb), 1);
    })
  }
];

/*//////////////////////////////////////////////////////////////////////////*/

let gameStarted = true;





game.newLoop('myGame', function () {

  //pjs.camera.follow(player, 10);

  player.draw();
  player.nowX = Math.round(player.x / sizeOneBlock);
  player.nowY = Math.round(player.y / sizeOneBlock);

  console.log(player.currentBombNum);



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
    if (!playerRight.isArrIntersect(blocks) || playerCenter.isArrIntersect(blocks)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x + player.speed, playerBody.getPosition().y));
    }

  } else if (key.isDown("A") || key.isDown("LEFT")) {
    player.moving = true;
    player.arrow = 'left';
    if (!playerLeft.isArrIntersect(blocks) || playerCenter.isArrIntersect(blocks)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x - player.speed, playerBody.getPosition().y));
    }
  }

  if (key.isDown("W") || key.isDown("UP")) {
    player.moving = true;
    player.arrow = 'up';
    if (!playerTop.isArrIntersect(blocks) || playerCenter.isArrIntersect(blocks)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y - player.speed));
    }

  } else if (key.isDown("S") || key.isDown("DOWN")) {
    player.moving = true;
    player.arrow = 'down';
    if (!playerBottom.isArrIntersect(blocks) || playerCenter.isArrIntersect(blocks)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y + player.speed));
    }
  }


  if (key.isPress("Z")) {
    if (!player.bombsMas[player.currentBombNum].planting) {
      player.bombsMas[player.currentBombNum].planting = true;
      player.bombsMas[player.currentBombNum].bomb.setPosition(pjs.vector.point(player.nowX * sizeOneBlock, player.nowY * sizeOneBlock));
      blocks.push(player.bombsMas[player.currentBombNum].bomb);
      player.bombsMas[player.currentBombNum].timer.restart();
      if (player.canBombsNum > player.currentBombNum + 1) player.currentBombNum += 1;
      else if (player.canBombsNum > 0) player.currentBombNum -= 1;
    }

  }

  player.bombsMas.forEach(element => {
    if (element.planting) {
      element.bomb.draw();
    }
  });





});

game.setLoop('myGame');
if (gameStarted) {
  game.start();
}