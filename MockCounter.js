const { add } = require('./math');

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count = add(this.count, 1);
  }
}

module.exports = Counter;
