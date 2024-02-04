class Score {
  constructor() {
    this.score = 0;
    this.lastMinScoreEventIndex = -1;
    this.minScoreEvents = [];
    this.scoreEvents = [];
  }
  
  draw() {
    fill("#fff");
    textSize(40);
    text(Math.floor(this.score), 35, 75);
  }
  
  grow() {
    let oldScore = Number(this.score);
    this.score+=0.10;
    let newScore = Number(this.score);
    this.checkScoreEvents(oldScore, newScore);
  }
  
  checkScoreEvents(oldScore, newScore) {
    if(this.scoreEvents.length) {
    for(let index in this.scoreEvents) {
      this.scoreEvents[index](oldScore, newScore);
    }
    }
    this.checkMinScoreEvents();
  }
  
  checkMinScoreEvents() {
    if(this.lastMinScoreEventIndex < this.minScoreEvents.length-1) {
      let nextEvent = this.minScoreEvents[this.lastMinScoreEventIndex+1];
      if(this.score >= nextEvent.minScore) {
        nextEvent.callback();
        this.lastMinScoreEventIndex++;
      }
    }
  }
  
  restart() {
    this.score = 0;
    this.lastMinScoreEventIndex = -1;
  }
  
  addScoreEvent(callback) {
    this.scoreEvents.push(callback);
  }
  
  addMinScoreEvent(minScore, callback) {
    this.minScoreEvents.push({
      minScore: minScore,
      callback: callback
    });
  }
}