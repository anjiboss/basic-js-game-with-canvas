export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 150;
    this.height = 30;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
    this.curSpeed = 0;
    this.velocity = 30;
  }

  moveLeft() {
    this.curSpeed = -this.velocity;
  }
  moveRight() {
    this.curSpeed = this.velocity;
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.curSpeed / deltaTime;
    if (
      this.position.x <= 0 ||
      this.position.x >= this.gameWidth - this.width
    ) {
      this.curSpeed = 0;
    }
  }
}
