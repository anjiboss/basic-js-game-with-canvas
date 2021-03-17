import Paddle from "/js/paddle.js";
import inputHandler from "/js/inputHandler.js";

const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

const gameWidth = 600;
const gameHeight = 600;

canvas.height = gameHeight;
canvas.width = gameWidth;

const paddle = new Paddle(gameWidth, gameHeight);
paddle.draw(ctx);

new inputHandler(paddle);

let lastTime = 0;
const gameLoop = (timeStamp) => {
  let deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  ctx.clearRect(0, 0, gameWidth, gameHeight);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
};

gameLoop();
