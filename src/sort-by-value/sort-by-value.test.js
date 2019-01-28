const sortByValue = require('./')

test('can sort an array by the child values', () => {
  // Arrange
  const data = [1, 350, 100, 2, 4, 11, , 3]

  // Act
  const result = sortByValue(data)

  // Assert
  expect(data).toEqual([1, 350, 100, 2, 4, 11, , 3])
  expect(result).toEqual([1, 2, 3, 4, 11, 100, 350])
})
