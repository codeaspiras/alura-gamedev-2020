class SlimeSprite extends Sprite {
  constructor() {
    super(
      "Slime",
      images.sprites.slime,
      [
        [0, 0],
        [105, 0],
        [210, 0],
        [315, 0],
        [0, 100],
        [105, 100],
        [210, 100],
        [315, 100],
        [0, 200],
        [105, 200],
        [210, 200],
        [315, 200],
        [0, 300],
        [105, 300],
        [210, 300],
        [315, 300],
        [0, 400],
        [105, 400],
        [210, 400],
        [315, 400],
        [0, 500],
        [105, 500],
        [210, 500],
        [315, 500],
        [0, 600],
        [105, 600],
        [210, 600],
        [315, 600],
      ], {
        width: 105,
        height: 100
      }, {
        width: 63,
        height: 60
      }
    );
  }
}