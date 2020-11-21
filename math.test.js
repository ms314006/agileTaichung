const { add } = require('./math');

/**
 * 1. 命名清楚
 * 2. 3A 原則
 * 3. 勿放邏輯
 * 4. 單一原則
 * */
test('Test 1 plus 1 will be 2', () => {
  // Arrange
  const expected = 5;

  // Act
  const result = add(1, 4);

  // Assert
  expect(result).toBe(expected);
});

/**
 * 錯誤示範

test('test', () => {
  const array = [[1, 2, 3], [2, 3, 5], [4, 5, 9]];
  array.forEach((item) => {
    expect(add(item[0], item[1])).toBe(item[2]);
  })
});
**/