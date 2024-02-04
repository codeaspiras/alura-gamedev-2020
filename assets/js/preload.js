function preload() {
  images.scenarios.forest01.push(loadImage("assets/images/forest_01/00_Sky.png"));
  images.scenarios.forest01.push(loadImage("assets/images/forest_01/01_Forest.png"));
  images.scenarios.forest01.push(loadImage("assets/images/forest_01/02_Forest.png"));
  images.scenarios.forest01.push(loadImage("assets/images/forest_01/03_Forest.png"));
  images.scenarios.forest01_over = loadImage("assets/images/forest_01/over.png");
  
  images.scenarios.forest02.push(loadImage("assets/images/forest_02/00_Sky.png"));
  images.scenarios.forest02.push(loadImage("assets/images/forest_02/01_Forest.png"));
  images.scenarios.forest02.push(loadImage("assets/images/forest_02/02_Forest.png"));
  images.scenarios.forest02.push(loadImage("assets/images/forest_02/03_Forest.png"));
  images.scenarios.forest02_over = loadImage("assets/images/forest_02/over.png");
  
  images.scenarios.forest03.push(loadImage("assets/images/forest_03/00_Sky.png"));
  images.scenarios.forest03.push(loadImage("assets/images/forest_03/01_Forest.png"));
  images.scenarios.forest03.push(loadImage("assets/images/forest_03/02_Forest.png"));
  images.scenarios.forest03.push(loadImage("assets/images/forest_03/03_Forest.png"));
  images.scenarios.forest03_over = loadImage("assets/images/forest_03/over.png");
  
  images.scenarios.forest04.push(loadImage("assets/images/forest_04/00_Sky.png"));
  images.scenarios.forest04.push(loadImage("assets/images/forest_04/01_Forest.png"));
  images.scenarios.forest04.push(loadImage("assets/images/forest_04/02_Forest.png"));
  images.scenarios.forest04.push(loadImage("assets/images/forest_04/03_Forest.png"));
  images.scenarios.forest04_over = loadImage("assets/images/forest_04/over.png");
  
  images.sprites.witch = loadImage("assets/images/sprites/witch.png");
  images.sprites.slime = loadImage("assets/images/sprites/slime.png");
  images.sprites.floatingSlime = loadImage("assets/images/sprites/flying-slime.png");
  images.sprites.troll = loadImage("assets/images/sprites/troll.png");
  
  images.gameover = loadImage("assets/images/components/game-over.png");
  images.pause = loadImage("assets/images/components/pause.png");
  images.home.background = loadImage("assets/images/components/home.png");
  images.heart = loadImage("assets/images/components/heart.png");
  
  audios.mainScene = loadSound("assets/sounds/main.mp3");
  audios.mainScene.setVolume(0.3);
  audios.jump = loadSound("assets/sounds/jump.wav");
  audios.collision = loadSound("assets/sounds/collision.wav");
  audios.lvlUp = loadSound("assets/sounds/level-up.wav");
  
  fonts.home = loadFont("assets/fonts/main.otf");
  
  sprites.witch = new WitchSprite();
  sprites.slime = new SlimeSprite();
  sprites.floatingSlime = new FloatingSlimeSprite();
  sprites.troll = new TrollSprite();
}