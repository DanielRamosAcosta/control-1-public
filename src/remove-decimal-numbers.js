function removeDecimalNumbers([ head, ...tail ]) {
  if (!head) return []

  return Number.isInteger(head)
    ? [head, ...removeDecimalNumbers(tail)]
    : removeDecimalNumbers(tail)
}

module.exports = {
  removeDecimalNumbers
}
