YaGames
  .init()
  .then(ysdk => {
    console.log('Yandex SDK initialized');
    window.ysdk = ysdk;
  });

var pjs = new PointJS(800, 715, {

});


//let menuAudio = pjs.audio.newAudio('assets/audio/menu.mp3');
//let levelAudio1 = pjs.audio.newAudio('assets/audio/level1.mp3');
//let levelAudio2 = pjs.audio.newAudio('assets/audio/level2.mp3');
let finishAudio = pjs.audio.newAudio('assets/audio/finish.mp3');

let deathAudio1 = pjs.audio.newAudio('assets/audio/death1.mp3');
let deathAudio2 = pjs.audio.newAudio('assets/audio/death2.mp3');
let runAudio1 = pjs.audio.newAudio('assets/audio/run.mp3');
let runAudio2 = pjs.audio.newAudio('assets/audio/run2.mp3');

let bombAudio = pjs.audio.newAudio('assets/audio/bomb.mp3');
let exploseAudio = pjs.audio.newAudio('assets/audio/explose.mp3');
let pauseAudio = pjs.audio.newAudio('assets/audio/pause.mp3');
let prizeAudio = pjs.audio.newAudio('assets/audio/prize.mp3');


let menuAudio = new Howl({
  src: ['assets/audio/menu.mp3'],
});

let levelAudio1 = new Howl({
  src: ['assets/audio/level1.mp3'],
});

let levelAudio2 = new Howl({
  src: ['assets/audio/level2.mp3'],
});







//pjs.system.initFullPage(); // развернули игру на полный экран
var game = pjs.game;
var tiles = pjs.tiles;
var key = pjs.keyControl.initControl();
let keyDowns;
pjs.system.initFPSCheck();

let beginTimestamp;
let visibleGame = true;
let levelSeconds = 200;

let level;

//31*13 карта
//54 блоки
//6 враги

let resizeBlock = 0;


let gameStarted = false;
let gamePaused = false;

//let fieldLevel = document.querySelector('.level');
let fieldBombs = document.querySelector('.bombs');
let fieldPower = document.querySelector('.power');
let fieldManual = document.querySelector('.manualBombs');
let fieldTime = document.querySelector('.time');


let playerTop;
let playerBottom;
let playerLeft;
let playerRight;
let playerCenter;
let playerBody;

let playerBoomPower = 1;
let playerCanBombsNum = 1;
let playerSpeed = 2.2; //1.6
let playerCanBoom = false;
let playerWallpass = false;
let playerBombPass = false;
let playerExplosionPass = false;
let playerGod = false;

localStorage.getItem('playerBoomPower') == null ? localStorage.setItem('playerBoomPower', 1) : playerBoomPower = localStorage.getItem('playerBoomPower');
console.log(playerBoomPower);


let playerDead = false;

let playerCanSecret = false;

let player;
let blocks = [];
let solidBlocks = [];
let blocksBomb = [];
let sizeOneBlock = 48;
let timeBomb = 2000;
let enemies = [];
let enemyType = 1;

let exploseDoor = false;

let numberOfEnemies;

let gamePreStarted = false;
let preLevelTimeOut;

let backgroundObj;



// let userheight = document.documentElement.clientHeight;
// if (userheight < 800) {
//   document.querySelector('.game_field_wrap_bottom').classList.add('resize_bottom');
//   document.querySelector('canvas').classList.add('resize_canvas');
//   resizeBlock = sizeOneBlock * 1.3;
// }

// window.addEventListener('resize', function (event) {
// userheight = document.documentElement.clientHeight;
// if (userheight < 800) {
//   document.querySelector('.game_field_wrap_bottom').classList.add('resize_bottom');
//   document.querySelector('canvas').classList.add('resize_canvas');
//   resizeBlock = sizeOneBlock * 1.3;
// }
// else {
//   document.querySelector('.game_field_wrap_bottom').classList.remove('resize_bottom');
//   document.querySelector('canvas').classList.remove('resize_canvas');
//   resizeBlock = sizeOneBlock * 0;
// }

// }, true);



let levelMas;

//localStorage.clear(); ////////////////////////////////////////////////DEL

if (localStorage.getItem('levelMas') !== null) {
  levelMas = JSON.parse(localStorage.getItem('levelMas'));
}
else {
  levelMas = [
    {
      level: [6, , , , , , ,],
      prize: 2,
      oldPrize: 2,
      enable: true,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [3, 3, , , , , ,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [2, 2, 2, , , , ,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [1, 1, 2, 2, , , ,],
      prize: 3,
      oldPrize: 3,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 4, 3, , , , ,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 2, 3, 2, , , ,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 2, 3, , 2, , ,],
      prize: 2,
      oldPrize: 2,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 2, 4, , , ,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 1, 4, 1, , ,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 1, 1, 3, 1, ,],
      prize: 4,
      oldPrize: 4,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 2, 3, 1, 1, ,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 1, 1, 4, 1, ,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 3, 3, 3, , ,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , , 7, 1,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 1, 3, 3, , 1,],
      prize: 2,
      oldPrize: 2,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , 3, 4, , 1,],
      prize: 4,
      oldPrize: 4,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 5, , 2, , 1,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [3, 3, , , , , 2,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [1, 1, 3, , , 1, 2,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 1, 1, 2, 1, 2,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 4, 3, 2,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 4, 3, 1, , 1,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 2, 2, 2, 1,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 1, 1, 4, 2, 1,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 2, 1, 1, 2, 2, 1,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [1, 1, 1, 1, 2, 1, 1,],
      prize: 8,
      oldPrize: 8,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [1, 1, , , 5, 1, 1,],
      prize: 2,
      oldPrize: 2,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 3, 3, 1, , 1,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 2, 5, 2,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 3, 2, 1, 2, 1,],
      prize: 7,
      oldPrize: 7,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 2, 2, 2, 2, 2, ,],
      prize: 4,
      oldPrize: 4,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, 1, 1, 3, 4, , 1,],
      prize: 1,
      oldPrize: 1,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 2, 3, 1, 2,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 3, 3, , 2,],
      prize: 8,
      oldPrize: 8,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 1, 3, 1, 2,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 2, 3, , 3,],
      prize: 7,
      oldPrize: 7,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 1, 3, 1, 3,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 2, 2, 3, , 3,],
      prize: 2,
      oldPrize: 2,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 1, 1, 2, 2, 4,],
      prize: 4,
      oldPrize: 4,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 1, 2, 3, , 4,],
      prize: 8,
      oldPrize: 8,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , 1, 1, 3, 1, 4,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , 1, 3, 1, 5,],
      prize: 4,
      oldPrize: 4,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , 1, 2, 1, 6,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , 1, 2, 1, 6,],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 2, 2, 6,],
      prize: 8,
      oldPrize: 8,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 2, 2, 6,],
      prize: 4,
      oldPrize: 4,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 2, 2, 6,],
      prize: 6,
      oldPrize: 6,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 2, 1, 6, 1],
      prize: 5,
      oldPrize: 5,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 1, 2, 6, 1],
      prize: 7,
      oldPrize: 7,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , 1, 2, 5, 2],
      prize: 8,
      oldPrize: 8,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },
    {
      level: [, , , , , , , 8],
      prize: 8,
      oldPrize: 8,
      enable: false,
      finish: false,
      secret: false,
      city: 'Секрет'
    },



  ];
}



let levelNum = 1;


let enemyTypes;


let info_btns_image;

let info_level_text;
let info_time_text;
let info_bombs_text;
let info_power_text;
let info_detonator_text;

let fieldLevel = game.newTextObject({
  x: 0,
  y: 0,
  text: "1",
  size: 30,
  color: "black",
});;
let info_time;
let info_bombs;
let info_power;
let info_detonator;


fieldLevel.text = levelNum;



let whiteBlocks = [];

const door = game.newAnimationObject({
  animation: tiles.newImage("assets/big_dyna.png").getAnimation(240, 16 * 3, 16, 16, 1),
  x: 0,
  y: 0,
  w: sizeOneBlock,
  h: sizeOneBlock,
  visible: true,
  alpha: 1,
});

///////////////////////////////////////////////////////////////////////////////////////////

function addBomb(num) {
  return {
    num: num,
    bomb: game.newAnimationObject({
      animation: tiles.newImage("assets/tiles/bomb.png").getAnimation(0, 0, 16, 16, 3),
      x: 0,
      y: 0,
      w: sizeOneBlock,
      h: sizeOneBlock,
      userData: {
        showRight: false,
        showLeft: false,
        showTop: false,
        showBottom: false,
      }
    }),
    timerExplosion: function () {
      var num = this.num;
      return pjs.OOP.newTimer(500, function () {
        explosionBoom(num);
      });
    },
    bombX: 0,
    bombY: 0,
    bombsExplosionMas: [],
    planting: false,
    explosion: false,
    timer: function () {
      var num = this.num;
      return pjs.OOP.newTimer(timeBomb, function () {
        boom(num);
      });
    },
  };
}

//////////////////////////////////////////////////////////////////////////////////////////

const prize = game.newAnimationObject({
  animation: tiles.newImage("assets/big_dyna.png").getAnimation(0, 16 * 3, 16, 16, 1),
  x: 0,
  y: 0,
  w: sizeOneBlock,
  h: sizeOneBlock,
  visible: true,
  alpha: 1,
  userData: {
    prizeId: 0,
  }
});

let prizeMas = [
  {
    numPrize: 1,
    namePrize: 'Увеличение количества бомб',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(16, 0, 16, 16, 1),
    action: () => {
      playerCanBombsNum++;
      fieldBombs.textContent = playerCanBombsNum;
      player.bombsMas = [];
      for (var i = 0; i < 10; i++) {
        player.bombsMas.push(addBomb(i))
        player.bombsMas[i].bomb.num = i;
      }

    }
  },
  {
    numPrize: 2,
    namePrize: 'Увеличение силы взрыва',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(0, 0, 16, 16, 1),
    action: () => {
      playerBoomPower++;
      localStorage.setItem('playerBoomPower', playerBoomPower);
      fieldPower.textContent = playerBoomPower;
    }
  },

  {
    numPrize: 3,
    namePrize: 'Увеличение скорости',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(48, 0, 16, 16, 1),
    action: () => {
      playerSpeed = playerSpeed + 0.5;
      // fieldPower.textContent = playerBoomPower;
    }
  },
  {
    numPrize: 4,
    namePrize: 'Можно ходить сквозь стены',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(80, 0, 16, 16, 1),
    action: () => {
      playerWallpass = true;
      // fieldPower.textContent = playerBoomPower;
    }
  },

  {
    numPrize: 5,
    namePrize: 'Детонатор (взрыв нажатием второй кнопки)',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(32, 0, 16, 16, 1),
    action: () => {
      playerCanBoom = true;
      fieldManual.textContent = 'Да';
    }
  },
  {
    numPrize: 6,
    namePrize: 'Можно ходить сквозь бомбы',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(64, 0, 16, 16, 1),
    action: () => {
      playerBombPass = true;
      // fieldPower.textContent = playerBoomPower;
    }
  },
  {
    numPrize: 7,
    namePrize: 'Иммунитет к взрывам',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(96, 0, 16, 16, 1),
    action: () => {
      playerExplosionPass = true;
      // fieldPower.textContent = playerBoomPower;
    }
  },
  {
    numPrize: 8,
    namePrize: 'Временная неуязвимость',
    prizeImg: tiles.newImage("assets/tiles/prizes/prizes.jpg").getAnimation(112, 0, 16, 16, 1),
    action: () => {
      playerGod = true;
      // fieldPower.textContent = playerBoomPower;
    }
  },
]




function initLevelsScreen() {
  document.body.style.background = "#3a2769";
  document.querySelector('.level_menu').style.background = "#3a2769";

  playerDead = false;
  menuAudio.play();

  levelAudio2.stop();
  document.querySelectorAll('.levels_wrap')[0].innerHTML = '';
  levelMas.forEach((value, index, array) => {
    var enable = 'enabled';
    let classDiv
    var secret;
    var style;
    value.enable ? enable = 'enabled' : enable = 'disabled';
    value.finish ? classDiv = '<div class = "level_block level_finish">' : classDiv = '<div class = "level_block">';
    value.enable ? style = 'background: #6ee696' : style = 'background: #cdcdcd';
    value.secret ? secret = `<img class = 'secret_img' onclick="secretAlert()" src = 'assets/secret-true.png'>` : secret = `<img class = 'secret_img' onclick="secretAlert()" src = 'assets/secret.png'>`;
    document.querySelectorAll('.levels_wrap')[0].innerHTML += `
    ${classDiv}
    <div><h2>Уровень ${index + 1}</h2></div>
    <div><button class="level_start_game_button" style = '${style}' ${enable} onclick="startGame(${index})">Начать уровень</button></div>
    <div class = 'secret'>${secret}</div>
    </div>
    `;
  })
}




////////////////////////////////////////////////////////////////////////////////////////////

function init() {

  visibleGame = true;
  levelSeconds = 200;
  gameStarted = false;
  gamePaused = false;

  fieldLevel.text = levelNum;
  fieldBombs.textContent = playerCanBombsNum;
  fieldPower.textContent = playerBoomPower;
  playerCanBoom ? fieldManual.textContent = 'Да' : fieldManual.textContent = 'Нет';


  playerCanSecret = false;
  exploseDoor = false;






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

  blocks = [];
  solidBlocks = [];
  blocksBomb = [];

  timeBomb = 2000;
  enemies = [];
  enemyType = 1;

  whiteBlocks = [];

  backgroundObj = game.newBackgroundObject({
    file: "assets/tiles/map/map.jpg",
    x: 0,
    y: 0,
    w: sizeOneBlock * level[0].length,
    h: sizeOneBlock * level.length,
    countX: 1,
    countY: 1,
  });

  info_btns_image = game.newImageObject({
    file: "assets/info-btns.jpg",
    x: 0,
    y: level.length * sizeOneBlock + 40,
    w: 800,
    h: 50,
  });

  prize.w = sizeOneBlock,
    prize.h = sizeOneBlock,

    playerTop = game.newRectObject({
      x: sizeOneBlock / 5,
      y: 0,
      w: sizeOneBlock / 2,
      h: 2,
    })
  playerBottom = game.newRectObject({
    x: sizeOneBlock / 5,
    y: sizeOneBlock - 6,
    w: sizeOneBlock / 2,
    h: 2,
  })
  playerLeft = game.newRectObject({
    x: sizeOneBlock - sizeOneBlock * 0.9,
    y: sizeOneBlock / 5,
    w: 2,
    h: sizeOneBlock / 2,
  })
  playerRight = game.newRectObject({
    x: sizeOneBlock * 0.9 - 2,
    y: sizeOneBlock / 5,
    w: 2,
    h: sizeOneBlock / 2,
  })
  playerCenter = game.newRectObject({
    x: sizeOneBlock / 2 - sizeOneBlock / 2.5 / 2,
    y: sizeOneBlock / 2 - sizeOneBlock / 2.5 / 2,
    w: sizeOneBlock / 2.5,
    h: sizeOneBlock / 2.5,
    fillColor: "red",
  })
  playerBody = game.newAnimationObject({
    animation: tiles.newImage("assets/big_dyna.png").getAnimation(0, 0, 23, 23, 1),
    x: 0,
    y: 0,
    w: sizeOneBlock / 1.1,
    h: sizeOneBlock / 1.1,
  });

  player = game.newMesh({
    x: sizeOneBlock,
    y: sizeOneBlock,
    angle: 0,
    add: [playerTop, playerBottom, playerLeft, playerRight, playerCenter, playerBody]
  });

  player.nowX = 1;
  player.nowY = 1;
  player.plantBomb = false;
  player.currentBombNum = 0;
  player.canWalkOnBomb = false;
  player.damageBlocksMas = [];
  player.seeDoor = false;
  player.seePrize = false;
  player.takedPrize = false;
  player.goDead = false;
  playerDead = false;
  playerGod = false;

  pjs.camera.setPosition(playerBody.getPosition());



  player.bombsMas = [];
  for (var i = 0; i < 10; i++) {
    player.bombsMas.push(addBomb(i))
    player.bombsMas[i].bomb.num = i;
  }



  player.canBombMas = player.bombsMas;
  player.plantingBombMas = [];





  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {


      if (level[i][j].e == undefined) level[i][j].e = 0;
      if (level[i][j].p == undefined) level[i][j].p = 0;

      if (level[i][j].b == 0) {
        whiteBlocks.push([i, j])
      }

    }
  }


  whiteBlocks.splice(0, 3);
  whiteBlocks.splice(26, 1);
  whiteBlocks.splice(40, 1);

  for (var i = 0; i < 54; i++) {
    var blockk = whiteBlocks[getRandomNum(0, whiteBlocks.length - 1)]


    level[blockk[0]][blockk[1]].p = 2;

    whiteBlocks.splice(whiteBlocks.indexOf(blockk), 1);

    if (i == 0) {
      level[blockk[0]][blockk[1]].door = true;
      door.setPosition(pjs.vector.point(blockk[1] * sizeOneBlock, blockk[0] * sizeOneBlock));
    }
    if (i == 3 && levelMas[levelNum - 1].prize > 0) {
      level[blockk[0]][blockk[1]].prize = levelNum;
      prize.setPosition(pjs.vector.point(blockk[1] * sizeOneBlock, blockk[0] * sizeOneBlock));
      prizeMas.length <= levelNum - 1 ? prize.setAnimation(prizeMas[0].prizeImg) : prize.setAnimation(prizeMas[levelNum - 1].prizeImg);

      prize.setAnimation(prizeMas[levelMas[levelNum - 1].prize - 1].prizeImg)


      prize.prizeId = levelMas[levelNum - 1].prize;
    }

  }
  // let numberOfEnemies;
  // let enemyTypesInLevel;

  // enemyInLevels.length > levelNum - 1 ? numberOfEnemies = enemyInLevels[levelNum - 1].level.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : numberOfEnemies = 10;
  // enemyInLevels.length > levelNum - 1 ? enemyTypesInLevel = enemyInLevels[levelNum - 1].level : enemyTypesInLevel = 10;

  numberOfEnemies = levelMas[levelNum - 1].level.reduce((previousValue, currentValue) => previousValue + currentValue, 0);





  for (var i = 0; i < levelMas[levelNum - 1].level.length; i++) {

    for (var j = 0; j < levelMas[levelNum - 1].level[i]; j++) {


      // if (numberOfEnemies != 10) {
      //   for (var j = 0; j < enemyTypesInLevel.length; j++) {
      //     if (enemyTypesInLevel[j] > 0) {
      //       enemyType = j;
      //       enemyTypesInLevel[j]--;
      //     }
      //   }
      // }
      // else {
      //   enemyType = getRandomNum(0, 7);
      // }

      enemyTypes = [
        game.newAnimationObject({
          animation: tiles.newImage("assets/big_dyna.png").getAnimation(426, 215, 16, 18, 5),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 1,
            framesRun: [0, 2],
            framesDie: [3, 4],
            nameEnemy: 'Первый',
            arrowRand: 0,
            moving: false,
            speed: 1.2,
            canThrough: false,
            canPath: false,
            pathActive: false,
            angryDistance: 0,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy2.png").getAnimation(0, 0, 16, 17, 5),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 2,
            framesRun: [0, 2],
            framesDie: [3, 4],
            nameEnemy: 'Второй',
            arrowRand: 0,
            moving: false,
            speed: 1.4,
            canThrough: false,
            canPath: true,
            pathActive: false,
            angryDistance: 3,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy3.png").getAnimation(0, 0, 16, 18, 7),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 3,
            framesRun: [0, 2],
            framesDie: [3, 6],
            nameEnemy: 'третий',
            arrowRand: 0,
            moving: false,
            speed: 1.4,
            canThrough: false,
            canPath: false,
            pathActive: false,
            angryDistance: 0,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy4.png").getAnimation(0, 0, 16, 18, 6),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 4,
            framesRun: [0, 2],
            framesDie: [3, 5],
            nameEnemy: 'Четвертый',
            arrowRand: 0,
            moving: false,
            speed: 1.8,
            canThrough: false,
            canPath: true,
            pathActive: false,
            angryDistance: 3,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy5.png").getAnimation(0, 0, 18, 16, 5),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 5,
            framesRun: [0, 2],
            framesDie: [3, 4],
            nameEnemy: 'Пятый',
            arrowRand: 0,
            moving: false,
            speed: 0.8,
            canThrough: true,
            canPath: true,
            pathActive: false,
            angryDistance: 6,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy6.png").getAnimation(0, 0, 18, 18, 7),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 6,
            framesRun: [0, 2],
            framesDie: [3, 6],
            nameEnemy: 'шестой',
            arrowRand: 0,
            moving: false,
            speed: 1.2,
            canThrough: true,
            canPath: true,
            pathActive: false,
            angryDistance: 3,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy7.png").getAnimation(0, 0, 16, 18, 5),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 7,
            framesRun: [0, 2],
            framesDie: [3, 4],
            nameEnemy: 'Седьмой',
            arrowRand: 0,
            moving: false,
            speed: 1.8,
            canThrough: false,
            canPath: true,
            pathActive: false,
            angryDistance: 6,
            result: [],
            dead: false,
          }
        }),
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/enemies/enemy8.png").getAnimation(0, 0, 18, 18, 6),
          x: 0,
          y: 0,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            typeEnemy: 8,
            framesRun: [0, 3],
            framesDie: [4, 5],
            nameEnemy: 'Восьмой',
            arrowRand: 0,
            moving: false,
            speed: 1.8,
            canThrough: true,
            canPath: true,
            pathActive: false,
            angryDistance: 6,
            result: [],
            dead: false,
          }
        }),
      ]

      var enemyBlock = whiteBlocks[getRandomNum(0, whiteBlocks.length - 1)]



      level[enemyBlock[0]][enemyBlock[1]].e = enemyType;
      whiteBlocks.splice(enemyBlock, 1);

      enemyTypes[0].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[0].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[0].setDelay(15);

      enemyTypes[1].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[1].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[1].setDelay(15);

      enemyTypes[2].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[2].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[2].setDelay(15);

      enemyTypes[3].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[3].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[3].setDelay(12);

      enemyTypes[4].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[4].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[4].setDelay(15);

      enemyTypes[5].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[5].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[5].setDelay(15);

      enemyTypes[6].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[6].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[6].setDelay(15);

      enemyTypes[7].x = sizeOneBlock * enemyBlock[1];
      enemyTypes[7].y = sizeOneBlock * enemyBlock[0];
      enemyTypes[7].setDelay(15);





      enemies.push(enemyTypes[i]);
    }
  }



  // var S_LEFT = 10;
  // function tick() {
  //   console.log('tick');
  //   S_LEFT -= 1;
  //   if (S_LEFT === 0) {
  //     alert('times dead');
  //   } else {
  //     fieldTime.textContent = S_LEFT;
  //     window.setTimeout(tick, 1000);
  //   }
  // };
  // tick();
  //beginTimestamp = Math.floor(game.getTime() / 1000);





}




///////////////////////////////////////////////////////////////////////////










/*//////////////////////////////////////////////////////////////////////////*/










/*//////////////////////////////////////////////////////////////////////////*/

function boom(numBomb) {

  if (player.bombsMas[numBomb] != undefined) {
    if (player.bombsMas[numBomb].planting) {
      level[Math.round(player.bombsMas[numBomb].bomb.y / sizeOneBlock)][Math.round(player.bombsMas[numBomb].bomb.x / sizeOneBlock)].bomb = false;
      player.bombsMas[numBomb].explosion = true;

      player.bombsMas[numBomb].timerExplosion().restart();

      blocksBomb.splice(0, 1);
      player.bombsMas[numBomb].bomb.showRight = true;
      player.bombsMas[numBomb].bomb.showLeft = true;
      player.bombsMas[numBomb].bomb.showTop = true;
      player.bombsMas[numBomb].bomb.showBottom = true;

      player.bombsMas[numBomb].bomb.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(390, 16 * 2, 16, 16, 3));
      exploseAudio.replay();
    }
  }



}

function explosionBoom(numBomb) {


  if (document.querySelector('.notification_bomb_pause').classList.contains("show")) document.querySelector('.notification_bomb_pause').classList.toggle('show');
  if (player.bombsMas[numBomb] != undefined) {
    player.bombsMas[numBomb].bomb.showRight = false;
    player.bombsMas[numBomb].bomb.showLeft = false;
    player.bombsMas[numBomb].bomb.showTop = false;
    player.bombsMas[numBomb].bomb.showBottom = false;
    player.bombsMas[numBomb].bombsExplosionMas = [];
    player.bombsMas[numBomb].planting = false;

    if (player.bombsMas[numBomb].explosion == true) {
      player.bombsMas[numBomb].bomb.setAnimation(tiles.newImage("assets/tiles/bomb.png").getAnimation(0, 0, 16, 16, 3));
      player.bombsMas[numBomb].explosion = false;
    }
  }
}


function exploseDoorFunction() {
  let newEnemy = game.newAnimationObject({
    animation: tiles.newImage("assets/big_dyna.png").getAnimation(144, 343, 16, 16, 5),
    x: door.x,
    y: door.y,
    w: sizeOneBlock,
    h: sizeOneBlock,
    userData: {
      typeEnemy: 5,
      framesRun: [0, 2],
      framesDie: [3, 4],
      nameEnemy: 'Пятый',
      arrowRand: 0,
      moving: false,
      speed: 0.8,
      canThrough: true,
      canPath: true,
      pathActive: false,
      angryDistance: 8,
      result: [],
    }
  });


  pjs.OOP.newTimer(500, function () {
    enemies.push(pjs.OOP.clone(newEnemy));
    numberOfEnemies++;
  }).start();
  pjs.OOP.newTimer(1500, function () {
    enemies.push(pjs.OOP.clone(newEnemy));
    numberOfEnemies++;
  }).start();
  pjs.OOP.newTimer(2000, function () {
    enemies.push(pjs.OOP.clone(newEnemy));
    numberOfEnemies++;
  }).start();
  pjs.OOP.newTimer(2500, function () {
    enemies.push(pjs.OOP.clone(newEnemy));
    numberOfEnemies++;
    exploseDoor = false;
  }).start();

}




document.querySelector('.start_game_button').addEventListener('click', function () {
  document.querySelector('.main_menu').style.display = 'none';
  document.querySelector('.level_menu').style.display = 'flex';
  initLevelsScreen();

});

document.querySelector('.dead_to_menu').addEventListener('click', function () {
  document.querySelector('.dead_menu').style.display = 'none';
  document.querySelector('.level_menu').style.display = 'flex';
  initLevelsScreen();
});

document.querySelector('.dead_to_new').addEventListener('click', function () {
  document.querySelector('.dead_menu').style.display = 'none';
  startGame(levelNum - 1);
});


document.querySelector('.win_to_menu').addEventListener('click', function () {
  document.querySelector('.win_menu').style.display = 'none';
  document.querySelector('.level_menu').style.display = 'flex';
  initLevelsScreen();
});

document.querySelector('.win_to_new').addEventListener('click', function () {
  document.querySelector('.win_menu').style.display = 'none';
  startGame(levelNum - 1);
});

document.querySelector('.win_to_next').addEventListener('click', function () {
  levelNum++;
  document.querySelector('.win_menu').style.display = 'none';
  startGame(levelNum - 1);
});


// document.querySelector('.down_arrow').addEventListener('click', function () {
//   //window.scrollBy(0, 50);
//   //window.scrollTo(0, document.documentElement.clientHeight);
// })

// let wheel = 0;
// window.onwheel = (e) => e.deltaY < 0 ? wheel = 1 : wheel = -1;

// window.addEventListener('wheel', function (e) {

//   e.deltaY < 0 ? wheel = -1 : wheel = 1;
//   if (wheel == 1) {
//     window.scrollBy(0, 100);
//     wheel = 0;
//   }
//   else if (wheel == -1) {
//     window.scrollBy(0, -100);
//     wheel = 0;
//   }
// })





function secretAlert() {
  document.querySelector('.alert-field').style.display = 'flex';
};

document.querySelector('.close-alert').addEventListener('click', function () {
  document.querySelector('.alert-field').style.display = 'none';
});


// window.addEventListener('scroll', function (event) {
//   window.scrollTo(0, 0);
//   event.preventDefault();
// }, false);



function startGame(level) {

  menuAudio.stop();

  document.body.style.background = "url('assets/back1.png')";
  document.querySelector('.level_menu').style.background = "url('assets/back1.png')";

  document.querySelector('.level_menu').style.display = 'none';
  document.querySelector('.game_field_wrap').style.display = 'none';
  document.querySelector('canvas').style.display = 'none';
  document.querySelector('.game_field').style.display = 'block';
  levelNum = level + 1;
  document.querySelector('.level-before-start h2').textContent = `Уровень ${levelNum}`;
  levelAudio1.play();
  gamePreStarted = true;
  preLevelTimeOut = setTimeout(function () {
    gamePreStarted = false;
    if (visibleGame) {
      document.querySelector('canvas').style.display = 'block';
      document.querySelector('.level-before-start').style.display = 'none';
      document.querySelector('.game_field_wrap').style.display = 'flex';

      levelAudio1.stop();
      levelAudio2.play();

      init();
      gameStarted = true;
      beginTimestamp = Math.floor(Date.now() / 1000);
      game.start();
    }
  }, 2700);


}

function deadMenu() {
  document.querySelector('.level-before-start').style.display = 'flex';
  document.querySelector('.game_field_wrap').style.display = 'none';

  document.querySelector('canvas').style.display = 'none';
  playerCanBoom = false;
  playerWallpass = false;
  playerBombPass = false;
  playerExplosionPass = false;
  // playerBoomPower = 1;
  // playerCanBombsNum = 1;
  // playerCanBoom = false;
  // playerSpeed = 4.6; //1.6
  // playerWallpass = false;
  // playerBombPass = false;
  // playerExplosionPass = false;
  fieldBombs.textContent = playerCanBombsNum;
  fieldPower.textContent = playerBoomPower;
  fieldManual.textContent = 'Нет';
  animPlayer(playerBody, 'stay');
  document.querySelector('.dead_menu').style.display = 'flex';

  // if (levelMas[levelNum - 1].prize == 4 || levelMas[levelNum - 1].prize == 5 || levelMas[levelNum - 1].prize == 6 || levelMas[levelNum - 1].prize == 7 || levelMas[levelNum - 1].prize == 8) {
  //   levelMas[levelNum - 1].prize = levelMas[levelNum - 1].oldPrize
  //   localStorage.setItem('levelMas', JSON.stringify(levelMas))
  // }
}

function winMenu() {
  document.querySelector('.level-before-start').style.display = 'flex';
  document.querySelector('.game_field_wrap').style.display = 'none';

  document.querySelector('canvas').style.display = 'none';
  document.querySelector('.win_menu').style.display = 'flex';
}


var endTimestamp;
var numSecondsRemaining;



document.addEventListener('visibilitychange', eventHandler);

function eventHandler() {
  // Проверяем, скрыта ли страница
  if (document.hidden) {
    visibleGame = false;

    if (gamePreStarted) {
      window.clearTimeout(preLevelTimeOut);
      levelAudio1.stop();
    }
    if (gameStarted && !gamePreStarted) levelAudio2.pause();
    else if (!gameStarted && !gamePreStarted) menuAudio.pause();

  } else {
    beginTimestamp = Math.floor(Date.now() / 1000);

    levelSeconds = numSecondsRemaining;
    endTimestamp = beginTimestamp + levelSeconds;
    visibleGame = true;
    if (gamePreStarted) {
      preLevelTimeOut = setTimeout(function () {
        gamePreStarted = false;
        if (visibleGame) {
          document.querySelector('canvas').style.display = 'block';
          document.querySelector('.game_field_wrap').style.display = 'flex';

          levelAudio1.stop();
          levelAudio2.play();
          init();
          gameStarted = true;
          game.start();
        }
      }, 500);
    }

    if (gameStarted && !gamePaused) levelAudio2.play();

    //else if (!gameStarted && !gamePreStarted && !playerDead) menuAudio.play();


  }
}






game.newLoop('myGame', function () {


  document.querySelector('.stats').textContent = `FPS: ${pjs.system.getFPS()}`;


  if (key.isPress("ENTER") && !playerDead) {

    if (gamePaused) {
      levelAudio2.play();
      gamePaused = false
      beginTimestamp = Math.floor(Date.now() / 1000);
      levelSeconds = numSecondsRemaining;
      endTimestamp = beginTimestamp + levelSeconds;
      visibleGame = true;
      document.querySelector('.pause-field').style.display = 'none';
      document.querySelector('canvas').style.display = 'block';
      document.querySelector('.game_field_wrap').style.display = 'flex';


    }
    else {
      let isPlantingBombs = player.bombsMas.some(value => {
        return value.planting
      })
      if (!isPlantingBombs) {
        levelAudio2.pause();
        pauseAudio.stop();
        pauseAudio.play();
        gamePaused = true;
        visibleGame = false;
        animPlayer(playerBody, 'stay');
        player.moving = false;
        document.querySelector('.pause-field').style.display = 'flex';
        document.querySelector('canvas').style.display = 'none';
        document.querySelector('.game_field_wrap').style.display = 'none';

      }
      else {

        document.querySelector('.notification_bomb_pause').classList.add('show');

      }


    }
  }

  if (visibleGame && gameStarted && !gamePaused) {
    endTimestamp = beginTimestamp + levelSeconds;
    numSecondsRemaining = endTimestamp - Math.floor(Date.now() / 1000)

    fieldTime.textContent = numSecondsRemaining;
  }


  if (numSecondsRemaining <= 0) {
    if (!playerDead) {
      player.goDead = true;
      playerDead = true;
    }
  }




  if (player.x > (pjs.camera.getStaticBox().w / 2 + pjs.camera.getStaticBox().x) + 5 && pjs.camera.getStaticBox().w + pjs.camera.getStaticBox().x < level[0].length * sizeOneBlock) {
    pjs.camera.move(pjs.vector.point(playerSpeed, 0));
  }
  else if (player.x < (pjs.camera.getStaticBox().w / 2 + pjs.camera.getStaticBox().x) - 5 && pjs.camera.getStaticBox().x > 0) {
    pjs.camera.move(pjs.vector.point(-playerSpeed, 0));
  }

  if (player.y > (pjs.camera.getStaticBox().h / 2 + pjs.camera.getStaticBox().y) + 5 && pjs.camera.getStaticBox().h + pjs.camera.getStaticBox().y < level.length * sizeOneBlock + resizeBlock) {
    pjs.camera.move(pjs.vector.point(0, playerSpeed));
  }
  else if (player.y < (pjs.camera.getStaticBox().h / 2 + pjs.camera.getStaticBox().y) - 5 && pjs.camera.getStaticBox().y > 0) {
    pjs.camera.move(pjs.vector.point(0, -playerSpeed));
  }



  backgroundObj.draw();
  info_btns_image.draw();
  fieldLevel.draw();
  console.log(info_btns_image.position.x);

  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {

      // game.newAnimationObject({
      //   animation: tiles.newImage("assets/tiles/map/grass.jpg").getAnimation(0, 0, 16, 16, 1), //трава
      //   x: sizeOneBlock * j,
      //   y: sizeOneBlock * i,
      //   w: sizeOneBlock,
      //   h: sizeOneBlock,
      // }).drawFrame(0);

      // game.newImageObject({
      //   file: "assets/tiles/map/grass.jpg",
      //   x: sizeOneBlock * j,
      //   y: sizeOneBlock * i,
      //   w: sizeOneBlock,
      //   h: sizeOneBlock,
      // }).draw();

      // if (level[i][j].b == 9) {
      //   game.newAnimationObject({
      //     animation: tiles.newImage("assets/tiles/map/wall.jpg").getAnimation(0, 0, 16, 16, 1), //Стены
      //     x: sizeOneBlock * j,
      //     y: sizeOneBlock * i,
      //     w: sizeOneBlock,
      //     h: sizeOneBlock,
      //   }).drawFrame(0);
      // }
      if (level[i][j].p != 0) {
        game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/map/brick.png").getAnimation(0, 0, 16, 16, 1), //Кирпич
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
        }).drawFrame(0);
      }
      // if (level[i][j].p != 0) {
      //   game.newRectObject({

      //     x: sizeOneBlock * j,
      //     y: sizeOneBlock * i,
      //     w: sizeOneBlock,
      //     h: sizeOneBlock,
      //     fillColor: 'black'
      //   }).draw();
      // }
      // if (level[i][j].p != 0 && level[i][j].door) {  // Где дверь
      //   game.newRectObject({
      //     x: sizeOneBlock * j,
      //     y: sizeOneBlock * i,
      //     w: sizeOneBlock / 5,
      //     h: sizeOneBlock / 5,
      //     //fillColor: 'yellow',
      //   }).draw()
      // }

      // if (level[i][j].p != 0 && level[i][j].prize) {  // Где приз
      //   game.newRectObject({
      //     x: sizeOneBlock * j,
      //     y: sizeOneBlock * i,
      //     w: sizeOneBlock / 5,
      //     h: sizeOneBlock / 5,
      //     //fillColor: 'blue',
      //   }).draw()
      // }

      if (level[i][j].door && level[i][j].p == 0) {
        door.draw();
        player.seeDoor = true;

        if (numberOfEnemies == enemies.length) playerCanSecret = true;
      }
      if (level[i][j].prize && level[i][j].p == 0 && !player.takedPrize) {
        prize.draw();
        player.seePrize = true;
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


  if (gameStarted && !gamePaused && !playerDead) {
    playerBody.draw();
  }
  else if (playerDead && gameStarted) {
    levelAudio2.stop();
    playerBody.drawToFrame(10);

    if (playerBody.getFrame() == 10) {
      gamePaused = true;
      gameStarted = false;
      deadMenu();
    }
  }




  if (playerDead && player.goDead) {
    playerBody.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(0, 23, 24, 24, 10));
    player.goDead = false;

    deathAudio1.play();
    deathAudio1.setNextPlay(deathAudio2);
  }

  player.nowX = Math.round(player.x / sizeOneBlock);
  player.nowY = Math.round(player.y / sizeOneBlock);


  player.bombsMas.splice(playerCanBombsNum, 10)

  player.canBombMas = player.bombsMas.filter(el => !el.planting);
  player.plantingBombMas = player.bombsMas.filter(el => el.planting || el.explosion);

  if (!playerCenter.isArrIntersect(blocksBomb) && !playerBombPass) {
    player.canWalkOnBomb = false;
  }
  if (playerCenter.isIntersect(door) && player.seeDoor) {
    if (gameStarted && enemies.length == 0) { ///////////////////////////////////////////////////////////////////////////////////////УБРАТЬ КОММЕНТ
      console.log(levelNum);
      if (levelMas.length >= levelNum + 1) levelMas[levelNum].enable = true;
      levelMas[levelNum - 1].finish = true;
      if (playerCanSecret) levelMas[levelNum - 1].secret = true;
      localStorage.setItem('levelMas', JSON.stringify(levelMas))
      gameStarted = false;
      levelAudio2.stop();
      levelAudio1.stop();
      finishAudio.play();

      pjs.OOP.newTimer(3000, function () {
        if (levelMas.length >= levelNum + 1) {
          winMenu();
        }
        else {
          document.querySelector('.dead_menu').style.display = 'none';
          document.querySelector('.level_menu').style.display = 'flex';
          document.querySelector('.level-before-start').style.display = 'flex';
          initLevelsScreen();
        }
      }).start();
    }
    else if (gameStarted && enemies.length > 0) {
      document.querySelector('.notification_enemies').classList.add('show');
    }

  }


  /*//////////////////////////////////////////////////////////////*/

  blocks = [];
  solidBlocks = [];

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
        solidBlocks.push(game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "black",
        }));
      }
      else if (level[i][j].p != 0) {
        blocks.push(game.newAnimationObject({
          animation: tiles.newImage("assets/big_dyna.png").getAnimation(358, 16 * 0, 16, 16, 7),
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          userData: {
            numBlock: { i, j },
          }
        }))
      }

    }
  }


  /*//////////////////////////////////////////////////////////////*/

  if (gameStarted && !gamePaused) {

    enemies.forEach(element => {

      if (!element.dead) element.drawFrames(element.framesRun[0], element.framesRun[1]);
      else element.drawFrames(element.framesDie[0], element.framesDie[1]);


      element.nowX = Math.round(element.x / sizeOneBlock);
      element.nowY = Math.round(element.y / sizeOneBlock);

      if (element.isIntersect(playerCenter) && !playerDead && !playerGod) {

        player.goDead = true;
        playerDead = true;
      }




      if (!element.pathActive) {
        enemyGo(element, element.arrowRand);
      }
      else {
        enemyPathGo(element, element.arrowRand);
      }


    })
  }

  /*//////////////////////////////////////////////////////////////*/





  player.damageBlocksMas.forEach(element => {
    element.drawFrames(0, 4);
  });



  if (gameStarted && !gamePaused && !playerDead) {

    if (key.isPress("D") || key.isPress("A") || key.isPress("W") || key.isPress("S") || key.isUp("D") || key.isUp("A") || key.isUp("W") || key.isUp("S") || key.isPress("RIGHT") || key.isPress("LEFT") || key.isPress("UP") || key.isPress("DOWN") || key.isUp("RIGHT") || key.isUp("LEFT") || key.isUp("UP") || key.isUp("DOWN")) {
      keyDowns = key.getAllKeysDown();

      if (document.querySelector('.notification_enemies').classList.contains("show")) document.querySelector('.notification_enemies').classList.toggle('show');

      if (keyDowns.length > 0) {

        if (keyDowns[keyDowns.length - 1] == "D" || keyDowns[keyDowns.length - 1] == "RIGHT") {
          animPlayer(playerBody, 'right');
        }
        if (keyDowns[keyDowns.length - 1] == "A" || keyDowns[keyDowns.length - 1] == "LEFT") {
          animPlayer(playerBody, 'left');
        }
        if (keyDowns[keyDowns.length - 1] == "W" || keyDowns[keyDowns.length - 1] == "UP") {
          animPlayer(playerBody, 'top');
        }
        if (keyDowns[keyDowns.length - 1] == "S" || keyDowns[keyDowns.length - 1] == "DOWN") {
          animPlayer(playerBody, 'bottom');
        }

      }
      else {
        animPlayer(playerBody, 'stay');
      }
      if (pjs.keyControl.getCountKeysDown() == 0 && player.moving == true) {
        animPlayer(playerBody, 'stay');
        player.moving = false;
      }

      if (playerCenter.isIntersect(prize) && player.seePrize) {
        document.querySelector('.notification_prize').textContent = prizeMas.find(el => el.numPrize == prize.prizeId).namePrize;

        document.querySelector('.notification_prize').classList.add('show');

        pjs.OOP.newTimer(3000, function () {
          if (document.querySelector('.notification_prize').classList.contains("show")) document.querySelector('.notification_prize').classList.toggle('show');
        }).start();

        if (levelMas[levelNum - 1].prize == 1 || levelMas[levelNum - 1].prize == 2 || levelMas[levelNum - 1].prize == 3 || levelMas[levelNum - 1].prize == 4) {
          levelMas[levelNum - 1].prize = 0;
          localStorage.setItem('levelMas', JSON.stringify(levelMas))
        }

        player.takedPrize = true;
        prizeAudio.play();
        prize.w = 0;
        prize.h = 0;
        prizeMas[prize.prizeId - 1].action();
      }
    }


    if (key.isDown("D") || key.isDown("RIGHT")) {
      runAudio1.play();
      player.moving = true;
      player.arrow = 'right';
      if ((!playerRight.isArrIntersect(blocks) || playerWallpass) && !playerRight.isArrIntersect(solidBlocks) && (!playerRight.isArrIntersect(blocksBomb) || player.canWalkOnBomb)) {
        player.setPosition(pjs.vector.point(playerBody.getPosition().x + playerSpeed, playerBody.getPosition().y));
      }

    } else if (key.isDown("A") || key.isDown("LEFT")) {
      runAudio1.play();
      player.moving = true;
      player.arrow = 'left';
      if ((!playerLeft.isArrIntersect(blocks) || playerWallpass) && !playerLeft.isArrIntersect(solidBlocks) && (!playerLeft.isArrIntersect(blocksBomb) || player.canWalkOnBomb)) {
        player.setPosition(pjs.vector.point(playerBody.getPosition().x - playerSpeed, playerBody.getPosition().y));
      }
    }

    if (key.isDown("W") || key.isDown("UP")) {
      runAudio2.play();
      player.moving = true;
      player.arrow = 'up';
      if ((!playerTop.isArrIntersect(blocks) || playerWallpass) && !playerTop.isArrIntersect(solidBlocks) && (!playerTop.isArrIntersect(blocksBomb) || player.canWalkOnBomb)) {
        player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y - playerSpeed));
      }

    } else if (key.isDown("S") || key.isDown("DOWN")) {
      runAudio2.play();
      player.moving = true;
      player.arrow = 'down';
      if ((!playerBottom.isArrIntersect(blocks) || playerWallpass) && !playerBottom.isArrIntersect(solidBlocks) && (!playerBottom.isArrIntersect(blocksBomb) || player.canWalkOnBomb)) {
        player.setPosition(pjs.vector.point(playerBody.getPosition().x, playerBody.getPosition().y + playerSpeed));
      }
    }



    if (key.isPress("Z") || key.isPress("N")) {

      if (level[player.nowY][player.nowX].p == 0 && player.canBombMas.length > 0 && !player.plantingBombMas.some((val) => Math.round(val.bomb.x / sizeOneBlock) === player.nowX && Math.round(val.bomb.y / sizeOneBlock) === player.nowY)) {
        bombAudio.stop();
        bombAudio.play();
        player.canBombMas[0].planting = true;

        player.canWalkOnBomb = true;

        player.canBombMas[0].bomb.setPosition(pjs.vector.point(player.nowX * sizeOneBlock, player.nowY * sizeOneBlock));

        blocksBomb.push(player.canBombMas[0].bomb);
        player.canBombMas[0].bomb.setAnimation(tiles.newImage("assets/tiles/bomb.png").getAnimation(0, 0, 16, 16, 3));
        level[Math.round(player.canBombMas[0].bomb.y / sizeOneBlock)][Math.round(player.canBombMas[0].bomb.x / sizeOneBlock)].bomb = true;

        player.canBombMas[0].bombX = player.nowX * sizeOneBlock;
        player.canBombMas[0].bombY = player.nowY * sizeOneBlock + sizeOneBlock / 4;

        if (!playerCanBoom) player.canBombMas[0].timer().restart();

      }

    }

    if (key.isPress("X") || key.isPress("M")) {

      if (blocksBomb.length > 0 && playerCanBoom) {
        boom(blocksBomb[0].num);
      }
    }

  }

  player.bombsMas.forEach(element => {
    if (element.planting || element.explosion) {
      element.bomb.drawFrames(1, 2);
    }

    if (element.explosion) {

      element.bombsExplosionMas.forEach(function (el) {
        if (el.isArrIntersect(blocksBomb)) {
          boom(blocksBomb[0].num)
        }

        if (el.isIntersect(door) && player.seeDoor && !exploseDoor) {
          exploseDoorFunction();
          exploseDoor = true;
        }

        if ((el.isIntersect(playerCenter) || element.bomb.isIntersect(playerCenter)) && !playerExplosionPass) {
          if (!playerGod) {
            if (!playerDead) player.goDead = true;
            playerDead = true;
          }

        }


        enemies.forEach(function (elEnemy) {
          if (elEnemy.isIntersect(el) && !elEnemy.dead) {
            if (enemies.length <= 1) pauseAudio.play();
            elEnemy.dead = true;
            elEnemy.speed = 0;
            pjs.OOP.newTimer(1000, function () {
              enemies.splice(enemies.indexOf(elEnemy), 1);
            }).start();
          }
        })



        el.drawFrames(2, 3);
      })

      //console.log(element.bombsExplosionMas)


      fooExplosion(0, 1, element, 'showRight');
      fooExplosion(0, -1, element, 'showLeft');
      fooExplosion(1, 0, element, 'showTop');
      fooExplosion(-1, 0, element, 'showBottom');




    }
  });





});





game.setLoop('myGame');
if (gameStarted) {
  game.start();
}

function fooExplosion(x, y, element, arrow) {

  if (arrow == 'showRight') {
    for (var i = 1; i <= playerBoomPower; i++) {
      let explosionArrow;
      if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 0 && level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b != 9 && element.bomb.showRight) {

        explosionArrow = game.newAnimationObject({
          animation: y == 0 ? tiles.newImage("assets/big_dyna.png").getAnimation(582, 16 * 1, 16, 16, 4) : tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),
          x: element.bomb.x + i * sizeOneBlock - sizeOneBlock / 20,
          y: element.bomb.y,
          w: sizeOneBlock - sizeOneBlock / 20,
          h: sizeOneBlock - sizeOneBlock / 20,
        });

        element.bombsExplosionMas.push(explosionArrow);
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b == 9) {
        element.bomb.showRight = false;
        break;
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 2 && element.bomb.showRight) {
        let damageBlock = blocks.filter((el) => {
          if (el.numBlock != undefined && el.numBlock.i == Math.round(element.bomb.y / sizeOneBlock) + (i * x) && el.numBlock.j == Math.round(element.bomb.x / sizeOneBlock) + (i * y))
            return el;
        });

        let block = game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/map/brick.png").getAnimation(16, 0, 16, 16, 5), //Кирпич
          x: damageBlock[0].x,
          y: damageBlock[0].y,
          w: sizeOneBlock,
          h: sizeOneBlock,
        })

        player.damageBlocksMas.push(block);
        setTimeout(() => {
          player.damageBlocksMas.splice(player.damageBlocksMas.indexOf(block), 1);
        }, 500)


        level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p = 0;


        element.bomb.showRight = false;
        break;
      }
    }
    element.bomb.showRight = false;
  }


  if (arrow == 'showLeft') {
    for (var i = 1; i <= playerBoomPower; i++) {
      let explosionArrow;
      if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 0 && level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b != 9 && element.bomb.showLeft) {

        explosionArrow = game.newAnimationObject({
          animation: y == 0 ? tiles.newImage("assets/big_dyna.png").getAnimation(582, 16 * 1, 16, 16, 4) : tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),
          x: element.bomb.x - i * sizeOneBlock + sizeOneBlock / 20,
          y: element.bomb.y,
          w: sizeOneBlock - sizeOneBlock / 20,
          h: sizeOneBlock - sizeOneBlock / 20,
        });

        element.bombsExplosionMas.push(explosionArrow);
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b == 9) {
        element.bomb.showLeft = false;
        break;
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 2 && element.bomb.showLeft) {
        let damageBlock = blocks.filter((el) => {
          if (el.numBlock != undefined && el.numBlock.i == Math.round(element.bomb.y / sizeOneBlock) + (i * x) && el.numBlock.j == Math.round(element.bomb.x / sizeOneBlock) + (i * y))
            return el;
        });

        let block = game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/map/brick.png").getAnimation(16, 0, 16, 16, 5), //Кирпич
          x: damageBlock[0].x,
          y: damageBlock[0].y,
          w: sizeOneBlock,
          h: sizeOneBlock,
        })

        player.damageBlocksMas.push(block);
        setTimeout(() => {
          player.damageBlocksMas.splice(player.damageBlocksMas.indexOf(block), 1);
        }, 500)
        level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p = 0;

        element.bomb.showLeft = false;
        break;
      }
    }
    element.bomb.showLeft = false;
  }


  if (arrow == 'showTop') {
    for (var i = 1; i <= playerBoomPower; i++) {
      let explosionArrow;
      if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 0 && level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b != 9 && element.bomb.showTop) {

        explosionArrow = game.newAnimationObject({
          animation: y == 0 ? tiles.newImage("assets/big_dyna.png").getAnimation(582, 16 * 1, 16, 16, 4) : tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),
          x: element.bomb.x,
          y: element.bomb.y + i * sizeOneBlock,
          w: sizeOneBlock - sizeOneBlock / 20,
          h: sizeOneBlock - sizeOneBlock / 20,
        });

        element.bombsExplosionMas.push(explosionArrow);
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b == 9) {
        element.bomb.showTop = false;
        break;
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 2 && element.bomb.showTop) {
        let damageBlock = blocks.filter((el) => {
          if (el.numBlock != undefined && el.numBlock.i == Math.round(element.bomb.y / sizeOneBlock) + (i * x) && el.numBlock.j == Math.round(element.bomb.x / sizeOneBlock) + (i * y))
            return el;
        });

        let block = game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/map/brick.png").getAnimation(16, 0, 16, 16, 5), //Кирпич
          x: damageBlock[0].x,
          y: damageBlock[0].y,
          w: sizeOneBlock,
          h: sizeOneBlock,
        })

        player.damageBlocksMas.push(block);
        setTimeout(() => {
          player.damageBlocksMas.splice(player.damageBlocksMas.indexOf(block), 1);
        }, 500)
        level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p = 0;

        element.bomb.showTop = false;
        break;
      }
    }
    element.bomb.showTop = false;
  }


  if (arrow == 'showBottom') {
    for (var i = 1; i <= playerBoomPower; i++) {
      let explosionArrow;
      if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 0 && level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b != 9 && element.bomb.showBottom) {

        explosionArrow = game.newAnimationObject({
          animation: y == 0 ? tiles.newImage("assets/big_dyna.png").getAnimation(582, 16 * 1, 16, 16, 4) : tiles.newImage("assets/big_dyna.png").getAnimation(326, 16 * 2, 16, 16, 4),
          x: element.bomb.x,
          y: element.bomb.y - i * sizeOneBlock + sizeOneBlock / 20,
          w: sizeOneBlock - sizeOneBlock / 20,
          h: sizeOneBlock - sizeOneBlock / 20,
        });

        element.bombsExplosionMas.push(explosionArrow);
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].b == 9) {
        element.bomb.showBottom = false;
        break;
      }
      else if (level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p == 2 && element.bomb.showBottom) {
        let damageBlock = blocks.filter((el) => {
          if (el.numBlock != undefined && el.numBlock.i == Math.round(element.bomb.y / sizeOneBlock) + (i * x) && el.numBlock.j == Math.round(element.bomb.x / sizeOneBlock) + (i * y))
            return el;
        });

        let block = game.newAnimationObject({
          animation: tiles.newImage("assets/tiles/map/brick.png").getAnimation(16, 0, 16, 16, 5), //Кирпич
          x: damageBlock[0].x,
          y: damageBlock[0].y,
          w: sizeOneBlock,
          h: sizeOneBlock,
        })

        player.damageBlocksMas.push(block);
        setTimeout(() => {
          player.damageBlocksMas.splice(player.damageBlocksMas.indexOf(block), 1);
        }, 500)
        level[Math.round(element.bomb.y / sizeOneBlock) + (i * x)][Math.round(element.bomb.x / sizeOneBlock) + (i * y)].p = 0;

        element.bomb.showBottom = false;
        break;
      }
    }
    element.bomb.showBottom = false;
  }



}



function animPlayer(pers, arrow) {

  if (arrow == 'right') pers.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(73, 0, 23, 23, 3));
  else if (arrow == 'left') pers.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(142, 0, 23, 23, 3));
  else if (arrow == 'top') pers.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(217, 0, 23, 23, 3));
  else if (arrow == 'bottom') pers.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(0, 0, 23, 23, 3));

  if (arrow == 'stay') pers.setAnimation(tiles.newImage("assets/big_dyna.png").getAnimation(0, 0, 23, 23, 1));
}

function enemyGo(element, arrow) {
  if (!element.moving) {

    element.moveX = element.nowX
    element.moveY = element.nowY
    if (getRandomNum(0, 5) == 1) element.arrowRand = getRandomNum(0, 3);
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


  if (!element.canThrough) {
    if (level[element.moveY + arrowY][element.moveX + arrowX].b == 0 && level[element.moveY + arrowY][element.moveX + arrowX].p == 0 && !level[element.moveY + arrowY][element.moveX + arrowX].bomb) {
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
    if (level[element.moveY + arrowY][element.moveX + arrowX].b == 0 && !level[element.moveY + arrowY][element.moveX + arrowX].bomb) {
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
        if (!element.canThrough) {
          if (level[i][j].b == 9 || level[i][j].p != 0 || level[i][j].bomb) {
            levelGraph[i][j] = 0;
          } else {
            levelGraph[i][j] = 1;
          }
        }
        else {
          if (level[i][j].b == 9 || level[i][j].bomb) {
            levelGraph[i][j] = 0;
          } else {
            levelGraph[i][j] = 1;
          }
        }
      }
    }

    let masLevelGraph = new Graph(levelGraph);

    let start = masLevelGraph.grid[element.nowY][element.nowX];
    let end = masLevelGraph.grid[player.nowY][player.nowX];
    element.result = astar.search(masLevelGraph, start, end);





  }

  if (element.result.length == 0 || element.getDistance(playerCenter.getPosition()) > sizeOneBlock * element.angryDistance) {
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