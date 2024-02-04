function setup() {
  createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  game.setup();
  
  home = new Home();
  
  screens = {
    home,
    game,
  };
}

function draw() {
  screens[currentScreen].draw();
}

function keyPressed() {
  screens[currentScreen].keyPressed(keyCode);
}

function mousePressed() {
  screens[currentScreen].mousePressed();
}