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

function currentLine(array) {
  var string = "The line is currently "
  if (array.length === 0) {
    string = string + "empty."
  } else {
      for (i = 0; i < array.length; i++) {
        string = string + `${i + 1}. ${array[i]},  `
      }
  }
  return string
}
