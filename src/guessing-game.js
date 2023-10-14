class GuessingGame {
  start = 0;
  end = 0;
  middle = 0;

  constructor() {}

  setRange(min, max) {
    this.start = min;
    this.end = max;
    this.middle = Math.ceil((this.start + this.end) / 2);
  }

  guess() {
    return this.middle;
  }

  lower() {
    this.end = this.middle;
    this.middle = Math.ceil((this.start + this.end) / 2);
  }

  greater() {
    this.start = this.middle;
    this.middle = Math.ceil((this.start + this.end) / 2);
  }
}

module.exports = GuessingGame;
