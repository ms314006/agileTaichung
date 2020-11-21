const Counter = require('./Counter');

test('Test the original count is 0', () => {
  const expected = 0;
  const counter = new Counter();

  expect(counter.count).toBe(expected);
});

test('The count will be change to value of response after executed setCountFromDatabase', async () => {
  global.fetch = jest.fn().mockResolvedValue(
    { json: () => ({ count: 5 }), }
  );
  const counter = new Counter();
  await counter.setCountFormDatabase();

  expect(counter.count).toBe(5);
});