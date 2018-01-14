var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
  }
  function destructivelyAddElementstoBeginningOfArray(array, element) {
    return array = [element, ...array]
  }