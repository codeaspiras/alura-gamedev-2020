class Creature {
  constructor(sprite, position) {
    this.sprite = sprite;
    this.position = position;
    this.currentFrame = {
      row: 0,
      column: 0
    };
    this.effects = null;
    this.currentEffect = 0;
    this.dropped = false;
  }
  
  isVisible() {
    let dim = this.getDimension();
    return (this.position.x > -dim.width) && (this.position.x < width);
  }
  
  callDropEffect() {
    this.dropped = true;
    let oldEffects = this.effects;
    this.setEffect(effects.drop);
    this.effects.push(() => {
      this.effects = oldEffects;
      this.currentEffect = 0;
    });
  }
  
  getPosition() {
    return {
      x: this.position.x,
      y: height - this.getDimension().height - game.floor - this.position.y
    };
  }
  
  getDimension() {
    return this.sprite.getDimension();
  }
  
  setEffect(effectHandler) {
    if(!effectHandler) {
      this.effects = null;
      this.currentEffect = 0;
      return;
    }
    this.effects = effectHandler(this);
    this.currentEffect = 0;
  }
  
  draw() {
    this.sprite.draw(this.getPosition());
  }
  
  animate() {
    this.sprite.animate();
    if(this.effects) {
      this.effects[this.currentEffect]();
      this.currentEffect = (this.currentEffect + 1) % this.effects.length;
    }
  }
  
  moveTo(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
  
  moveDown(y) {
    this.position.y-= y;
  }
  
  moveUp(y) {
    this.position.y+= y;
  }
}