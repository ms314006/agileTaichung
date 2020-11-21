const { add } = require('./math');
const Counter = require('./MockCounter');

jest.mock('./math');

test('Test execute increment will make count change to 1', () => {
  add.mockReturnValue(1);
  const expected = 1;
  const counter = new Counter();

  counter.increment();

  expect(counter.count).toBe(expected);
})
