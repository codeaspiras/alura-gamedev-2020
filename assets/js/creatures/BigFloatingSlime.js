class BigFloatingSlime extends FloatingSlime {
  constructor(outputDimension, initialPosition, speed) {
    if(!outputDimension) {
      outputDimension = {
        width: 120,
        height: 90
      };
    }
    if(!initialPosition) {
      initialPosition = {
        x: width * 3,
        y: 440
      }
    }
    if(!speed) {
      speed = 5;
    }
    super(outputDimension, initialPosition, speed);
  }
}