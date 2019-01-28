const getSlug = require('./')

test('can get a url friendly slug from a sentence', () => {
  // Arrange
  const sentence = 'The quick brown fox jumps over the lazy dog.'

  // Act
  const slug = getSlug(sentence)

  // Assert
  expect(sentence).toEqual('The quick brown fox jumps over the lazy dog.')
  expect(slug).toEqual('the-quick-brown-fox-jumps-over-the-lazy-dog')
})
