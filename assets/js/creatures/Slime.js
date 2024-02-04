class Slime extends Enemy {
  constructor(outputDimension, initialPosition, speed) {
    if(!initialPosition) {
      initialPosition = {
        x: width,
        y: 0
      }
    }
    if(!speed) {
      speed = 3;
    }
    super(
      sprites.slime.getClone(outputDimension),
      initialPosition,
      speed
    );
    this.setEffect(effects.jumping);
  }
}