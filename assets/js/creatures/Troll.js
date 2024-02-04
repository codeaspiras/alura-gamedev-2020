class Troll extends Enemy {
  constructor(outputDimension, initialPosition, speed) {
    if(!initialPosition) {
      initialPosition = {
        x: width * 7,
        y: -30
      }
    }
    if(!speed) {
      speed = 4;
    }
    super(
      sprites.troll.getClone(outputDimension),
      initialPosition,
      speed
    );
  }
}