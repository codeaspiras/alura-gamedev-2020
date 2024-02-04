class OpacityText {
  constructor(text, rgbColor, size, align, position) {
    this.text = text;
    this.rgbColor = rgbColor;
    this.size = size;
    this.align = align;
    this.position = position;
    this.opacity = 1;
    this.operator = -0.01;
  }

  calculate() {
    this.opacity += this.operator;
    if (this.opacity < 0) {
      this.opacity = 0;
      this.operator = 0.01;
    } else if (this.opacity > 1) {
      this.opacity = 1;
      this.operator = -0.01;
    }
  }
  
  draw() {
    if(this.align) {
      textAlign(this.align);
    }
    if(this.size) {
      textSize(this.size);
    }
    this.calculate();
    fill(`rgba(${this.rgbColor}, ${this.opacity.toFixed(2)})`);
    text(this.text, this.position.x, this.position.y);
  }
}