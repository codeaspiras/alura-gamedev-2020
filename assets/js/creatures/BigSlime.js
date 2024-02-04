class BigSlime extends Slime {
  constructor(outputDimension, initialPosition, speed) {
    if(!outputDimension) {
      outputDimension = {
        width: 73.5,
        height: 70
      }
    }
    if(!initialPosition) {
      initialPosition = {
        x: width * 3,
        y: 0
      }
    }
    if(!speed) {
      speed = 2;
    }
    super(outputDimension, initialPosition, speed);
    this.setEffect(null);
  }
}