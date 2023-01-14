function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number, index) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  })

  return filteredNumbers;
}
  