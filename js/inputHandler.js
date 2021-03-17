export default class inputHandler {
  constructor(paddle) {
    addEventListener("keypress", (e) => {
      switch (e.key) {
        case "a":
          paddle.moveLeft();
          break;
        case "d":
          paddle.moveRight();
          break;

        default:
          break;
      }
    });
  }
}
