let game, home, screens;
let currentScreen = "home";
let images = {
  scenarios: {
    forest01: [],
    forest01_over: null,
    forest02: [],
    forest02_over: null,
    forest03: [],
    forest03_over: null,
    forest04: [],
    forest04_over: null
  },
  home: {
    background: null,
  },
  heart: null,
  sprites: {
    slime: null,
    floatingSlime: null,
    troll: null,
    witch: null,
  },
  gameover: null,
  pause: null,
};

let sprites = {
  witch: null,
  slime: null,
  floatingSlime: null,
  troll: null,
}

let audios = {
  mainScene: null,
  jump: null,
  collision: null,
  lvlUp: null
};

let fonts = {
  home: null
};