class Health {
  constructor(lifeCount, maxLifeCount) {
    this.lifeCount = lifeCount;
    this.initialLifeCount = lifeCount;
    this.maxLifeCount = maxLifeCount;
  }
  
  
  down(enemy) {
    if(enemy.hitted || !this.lifeCount) {
      return;
    }
    enemy.hitted = true;
    this.lifeCount--;
    if(this.lifeCount <= 0) {
      game.setGameOver();
    }
  }
  
  up() {
    this.lifeCount++;
    if(this.lifeCount > this.maxLifeCount) {
      this.lifeCount = this.maxLifeCount;
    }
  }
  
  draw() {
    let span = 0;
    for(let heart = 1; heart <= this.lifeCount; heart++) {
      image(images.heart, 20 + span, 20, 20, 20);
      span += 30;
    }
  }
  
  restart() {
    this.lifeCount = this.initialLifeCount;
  }
}