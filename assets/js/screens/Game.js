class Game {
  constructor() {
    this.debug = false;
    this.gameover = false;
    this.paused = false;
    this.scene = null;
    this.score = null;
    this.player = null;
    this.health = null;
  }

  setup() {
    this.health = new Health(2, 5);
    this.scene = new Scene(
      images.scenarios.forest01,
      images.scenarios.forest01_over,
      audios.mainScene,
      1,
      1
    );
    this.floor = 70;
    this.score = new Score();
    this.score.addScoreEvent((oldScore, newScore) => {
      if(Math.floor(newScore/50) > Math.floor(oldScore/50)) {
        audios.lvlUp.play();
        this.scene.speed++;
        this.health.up();
      }
    });
    this.score.addMinScoreEvent(80, () => {
      this.scene.setNextStage(
        images.scenarios.forest02,
        images.scenarios.forest02_over
      );
    });
    this.score.addMinScoreEvent(180, () => {
      this.scene.setNextStage(
        images.scenarios.forest03,
        images.scenarios.forest03_over
      );
    });
    this.score.addMinScoreEvent(330, () => {
      this.scene.setNextStage(
        images.scenarios.forest04,
        images.scenarios.forest04_over
      );
    });
    this.player = new Player(
      sprites.witch, {
        x: 10,
        y: 0
      }
    );
    this.enemies = [
      new Slime(),
      new BigSlime(),
      new FloatingSlime(),
      new BigFloatingSlime(),
      new Troll()
    ];
  }

  draw() {
    this.scene.draw();
    this.player.draw();
    this.score.draw();
    this.health.draw();
    for (let index in this.enemies) {
      this.enemies[index].draw();
    }
    this.scene.drawOverImage();
    if (this.paused) {
      image(
        images.pause,
        width / 2 - 128,
        height / 2 - 128
      );
      return;
    }
    this.process();
    this.animate();
  }

  process() {
    let enemy = this.player.hasCollisionWith(this.enemies, this.debug);
    if (enemy && !enemy.hitted) {
      this.health.down(enemy);
      audios.collision.play();
    }
  }

  animate() {
    this.scene.move();
    this.player.animate();
    this.player.gravity(this.scene.gravity);
    for (let index in this.enemies) {
      let enemy = this.enemies[index];
      enemy.animate();
      enemy.move();
      if (enemy.isVisible() && enemy instanceof FloatingSlime && !enemy.dropped) {
        if (Math.floor(Math.random() * 10) > 5) {
          enemy.callDropEffect();
        } else {
          enemy.dropped = true;
        }
      }
    }
    this.score.grow();
  }

  jump() {
    if (this.gameover || this.paused) {
      this.play();
    }
    this.player.jump(audios.jump);
  }

  play() {
    if (this.gameover) {
      this.restart();
    }
    this.paused = false;
    if (!this.scene.audio.isLooping()) {
      this.scene.audio.loop();
    }
    loop();
  }

  pause() {
    this.paused = true;
    if (this.scene.audio.isLooping()) {
      this.scene.audio.pause();
    }
    noLoop();
  }

  restart() {
    this.gameover = false;
    for (let index in this.enemies) {
      this.enemies[index].restart();
    }
    this.score.restart();
    this.scene.setParallax(images.scenarios.forest01, images.scenarios.forest01_over);
    this.scene.speed = 1;
    this.health.restart();
  }

  setGameOver() {
    this.gameover = true;
    if (this.scene.audio.isLooping()) {
      this.scene.audio.stop();
    }
    image(
      images.gameover,
      width / 2 - 210,
      height / 2 - 80
    );
    noLoop();
  }

  keyPressed(keyCode) {
    if (keyCode === UP_ARROW) {
      this.jump();
    } else if (keyCode === ENTER || keyCode === 32) {
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    }
  }

  mousePressed() {
    this.jump();
  }
}