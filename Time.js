class Time {
  constructor() {
    this.date = new Date();
  }

  getHours() {
    return this.date.getHours();
  }
}

module.exports = Time;
