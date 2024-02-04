class Home {
  constructor() {
    this.adviseText = new OpacityText(
      "pressione qualquer tecla para iniciar",
      "255,255,255",
      22,
      CENTER,
      {
        x: width/2,
        y: height - 30
      }
    );
  }
  
  draw() {
    this._background();
    this._title();
    this._advise();
  }
  
  _background() {
    image(images.home.background, 0, 0, width, height);
  }
  
  _title() {
    fill("#918cb9");
    textFont(fonts.home);
    textAlign(CENTER);
    textSize(height/12);
    text("as aventuras de", width/2, height/5);
    textSize(height/8.5);
    text("Hipsta", width/2, height/3.5);
  }
  
  _advise() {
    this.adviseText.draw();
  }
  
  keyPressed(keyCode) {
    currentScreen = "game";
  }
  
  mousePressed() {
    currentScreen = "game";
  }
}