const Time = require('./Time');

test('Test the original count is 0', () => {
  global.Date = jest.fn(function(){
    return {
      getHours: () => 3
    };
  });
  const expected = 3;
  const time = new Time();

  const result = time.getHours();

  expect(result).toBe(expected);
})
