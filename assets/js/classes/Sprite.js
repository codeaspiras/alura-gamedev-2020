class Sprite {
  constructor(name, source, sourceMap, frameDimension, outputDimension) {
    this.name = name;
    this.source = source;
    this.sourceMap = sourceMap;
    this.frameDimension = frameDimension;
    this.outputDimension = outputDimension;
    this.currentFrame = 0;
  }
  
  getDimension() {
    return this.outputDimension;
  }
  
  draw(position) {
    let frame = Math.floor(this.currentFrame);
    image(
      this.source,
      position.x,
      position.y,
      this.outputDimension.width,
      this.outputDimension.height,
      this.sourceMap[frame][0],
      this.sourceMap[frame][1],
      this.frameDimension.width,
      this.frameDimension.height
    );
  }
  
  animate() {
    this.currentFrame += 0.25;
    this.currentFrame %= this.sourceMap.length;
  }
  
  getClone(newOutputDimension) {
    let sourceMap = [];
    for(let index in this.sourceMap) {
      sourceMap.push([this.sourceMap[index][0], this.sourceMap[index][1]]);
    }
    if(!newOutputDimension || typeof(newOutputDimension.width) === "undefined" || typeof(newOutputDimension.height) === "undefined") {
      newOutputDimension = this.outputDimension;
    }
    return new Sprite(
      this.name.toString(),
      this.source,
      sourceMap,
      {
        width: this.frameDimension.width,
        height: this.frameDimension.height
      },
      {
        width: newOutputDimension.width,
        height: newOutputDimension.height
      }
    );
  }
}