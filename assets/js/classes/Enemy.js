class Enemy extends Creature {
  constructor(sprite, position, speed) {
    super(sprite, position);
    this.initialPosition = {
      x: position.x,
      y: position.y
    };
    this.speed = speed;
    this.hitted = false;
  }
  
  move() {
    if(this.position.x < -this.sprite.getDimension().width) {
      this.restart();
    } else {
      this.moveTo(this.position.x - this.speed - (game.scene.speed - 1), this.position.y);
    }
  }
  
  restart() {
    this.dropped = false;
    this.hitted = false;
    this.moveTo(this.initialPosition.x, this.initialPosition.y);
  }
}