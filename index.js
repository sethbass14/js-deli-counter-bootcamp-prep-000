var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  return array.length
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return array[0]
    array.shift()
  }
}
