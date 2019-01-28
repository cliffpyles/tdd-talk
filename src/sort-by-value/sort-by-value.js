function sortByValue(data) {
  return [...data].sort((a, b) => {
    return a - b
  })
}

module.exports = sortByValue
