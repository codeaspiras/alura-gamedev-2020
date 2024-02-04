class FloatingSlimeSprite extends Sprite {
  constructor() {
    super(
      "FloatingSlime",
      images.sprites.floatingSlime,
      [
        [0, 0],
        [200, 0],
        [400, 0],
        [0, 150],
        [200, 150],
        [400, 150],
        [0, 300],
        [200, 300],
        [400, 300],
        [0, 450],
        [200, 450],
        [400, 450],
        [0, 600],
        [200, 600],
        [400, 600],
        [0, 750],
      ], {
        width: 200,
        height: 150
      }, {
        width: 62,
        height: 46.5
      }
    );
  }
}