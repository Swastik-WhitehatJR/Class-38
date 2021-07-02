var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var cars, car1, car2, car3, car4;

var allPlayers;

var form, player, game;

var distance = 0;


function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }
}
