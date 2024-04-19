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
let sizeOneBlock = 32;

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


let playerSpeed = 2;

let playerBody = game.newRectObject({
  x: 0,
  y: 0,
  w: sizeOneBlock,
  h: sizeOneBlock,
  fillColor: "green",
})

let playerTop = game.newRectObject({
  x: 0,
  y: -2,
  w: sizeOneBlock,
  h: 2,
  fillColor: "yellow",
})
let playerBottom = game.newRectObject({
  x: 0,
  y: sizeOneBlock,
  w: sizeOneBlock,
  h: 2,
  fillColor: "yellow",
})
let playerLeft = game.newRectObject({
  x: -2,
  y: 0,
  w: 2,
  h: sizeOneBlock,
  fillColor: "yellow",
})
let playerRight = game.newRectObject({
  x: sizeOneBlock,
  y: 0,
  w: 2,
  h: sizeOneBlock,
  fillColor: "yellow",
})

let player = game.newMesh({
  x: sizeOneBlock,
  y: sizeOneBlock,
  angle: 0,
  add: [playerBody, playerTop, playerBottom, playerLeft, playerRight]
});

player.speed = 0.8;
player.nowX = 1;
player.nowY = 1;

/*//////////////////////////////////////////////////////////////////////////*/

let gameStarted = true;





game.newLoop('myGame', function () {

  //pjs.camera.follow(player, 10);

  player.draw();
  player.nowX = Math.round(player.x / sizeOneBlock * 2);
  player.nowY = Math.round(player.y / sizeOneBlock * 2);

  //console.log(playerBody.getPosition().x);
  //console.log(level[player.nowX][player.nowY - 1].b);

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
    }
  }





  if (key.isDown("D")) {
    player.moving = true;
    player.arrow = 'right';
    if (!playerRight.isArrIntersect(blocks)) {
      player.setPosition(pjs.vector.point(playerBody.getPosition().x + player.speed, playerBody.getPosition().y));
    }

  } else if (key.isDown("A")) {
    player.moving = true;
    player.arrow = 'left';
    player.setPosition(pjs.vector.point(playerBody.getPosition().x - player.speed, playerBody.getPosition().y));
  }

  if (key.isDown("W")) {
    player.moving = true;
    player.arrow = 'up';
    player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y - player.speed));

  } else if (key.isDown("S")) {
    player.moving = true;
    player.arrow = 'down';
    player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y + player.speed));
  }





});

game.setLoop('myGame');
if (gameStarted) {
  game.start();
}