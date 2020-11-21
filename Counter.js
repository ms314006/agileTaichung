class Counter {
  constructor() {
    this.count = 0;
  }

  async setCountFormDatabase() {
    const response = await fetch('https://url/count');
    const { count } = response.json();
    this.count = count;
  }

  increment() {
    this.coumt += 1;
  }
}

module.exports = Counter;
