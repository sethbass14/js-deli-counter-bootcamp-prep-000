var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  name = array.shift()
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${name}.`
  }
}

function currentLine(array) {
  var string = "The line is currently: "
  if (array.length === 0) {
    string = "The line is currently empty."
  } else {
      for (var i = 0; i < array.length; i++) {
        string = string + `${i + 1}. ${array[i]},  `
      }
  }
  return string
}
