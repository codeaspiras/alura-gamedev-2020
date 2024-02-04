class Player extends Creature {
  constructor(sprite, position) {
    super(sprite, position);
    this.jumps = 0;
    this.jumpStrength = 0;
  }
  
  jump(jumpSound) {
    if(this.jumps === 2) {
      return;
    }
    
    this.jumps++;
    this.jumpStrength += 30;
    jumpSound.play();
  }
  
  gravity(sceneGravity) {
    this.position.y += this.jumpStrength;
    this.jumpStrength -= sceneGravity;
    
    if(this.position.y <= 0) {
      this.jumps = 0;
      this.position.y = 0;
      this.jumpStrength = 0;
    }
  }
  
  animate() {
    super.animate();
  }
  
  hasCollisionWith(enemies, debug) {
    let playerPos = this.getPosition(),
        playerDim = this.getDimension(),
        precision = 0.7;
    for(let index in enemies) {
      let enemy = enemies[index];
      let enemyPos = enemy.getPosition(),
          enemyDim = enemy.getDimension();
      if(debug) {
        noFill();
        rect(playerPos.x, playerPos.y, playerDim.width * precision, playerDim.height * precision);
        rect(enemyPos.x, enemyPos.y, enemyDim.width * precision, enemyDim.height * precision);
      }
      let hit = collideRectRect(playerPos.x, playerPos.y, playerDim.width * precision, playerDim.height * precision, enemyPos.x, enemyPos.y, enemyDim.width * precision, enemyDim.height * precision);
      if(hit) {
        return enemy;
      }
    }
    return false;
  }
}