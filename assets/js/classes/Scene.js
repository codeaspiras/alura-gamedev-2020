class Scene {
  constructor(images, overImage, audio, speed, gravity) {
    this.nextImages = null;
    this.nextOverImage = null;
    this.audio = audio;
    this.speed = speed;
    this.setParallax(images, overImage);
    this.x1 = [];
    this.x2 = [];
    for (let index in images) {
      this.x1.push(0);
      this.x2.push(width);
    }
    this.gravity = gravity;

    if (this.audio) {
      this.audio.loop();
    }
  }
  
  setParallax(images, overImage) {
    this.x1images = [];
    this.x2images = [];
    for(let index in images) {
      this.x1images.push(images[index]);
      this.x2images.push(images[index]);
    }
    this.x1overImage = overImage;
    this.x2overImage = overImage;
    this.nextImages = null;
    this.nextOverImage = null;
  }
  
  
  draw() {
    for (let index in this.x1images) {
      image(this.x1images[index], this.x1[index], 0, width, height);
      image(this.x2images[index], this.x2[index], 0, width, height);
    }
  }

  drawOverImage() {
    if (!this.x1overImage || !this.x1images.length) {
      return;
    }
    let index = this.x1images.length - 1;
    image(this.x1overImage, this.x1[index], 0, width, height);
    image(this.x2overImage, this.x2[index], 0, width, height);
  }
  
  move() {
    for (let index in this.x1) {
      let x1 = this.x1[index],
        x2 = this.x2[index];
      let speed = Math.ceil(this.speed + (index / 2));
      x1 -= speed;
      x2 -= speed;
      if (x1 <= -width) {
        x1 += 2 * width;
        this.executeX1StageTransition(index);
      }
      if (x2 <= -width) {
        x2 += 2 * width;
        this.executeX2StageTransition(index);
      }
      this.checkStageTransition();
      this.x1[index] = x1;
      this.x2[index] = x2;
    }
  }

  executeX1StageTransition(index) {
    if (this.nextImages) {
      this.x1images[index] = this.nextImages[index];
    }
    if (index === this.x1.length-1 && this.nextOverImage) {
      this.x1overImage = this.nextOverImage;
    }
  }

  executeX2StageTransition(index) {
    if (this.nextImages) {
      this.x2images[index] = this.nextImages[index];
    }
    if (index === this.x2.length-1 && this.nextOverImage) {
      this.x2overImage = this.nextOverImage;
    }
  }

  setNextStage(images, overImage) {
    this.nextImages = images;
    this.nextOverImage = overImage;
  }

  checkStageTransition() {
    if (this.x1images == this.nextImages && this.x1images == this.x2images) {
      this.nextImages = null;
    }
    if (this.x1overImage == this.nextOverImage && this.x1overImage == this.x2overImage) {
      this.nextOverImage = null;
    }
  }
}