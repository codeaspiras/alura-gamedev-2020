class FloatingSlime extends Enemy {
  constructor(outputDimension, initialPosition, speed) {
    if(!initialPosition) {
      initialPosition = {
        x: width * 2,
        y: 220
      }
    }
    if(!speed) {
      speed = 7.5;
    }
    super(
      sprites.floatingSlime.getClone(outputDimension),
      initialPosition,
      speed
    );
    this.setEffect(effects.bounce);
  }
}