let input = "brand new whale talk"
let vowels = []
let resultArray = []

for (index in input) {
  if (input[index] == "a" || input[index] == "e" || input[index] == "i" ||input[index] == "o" || input[index] == "u" || input[index] == "y") {
    resultArray.push(input[index])

    if (input[index] == "e" || input[index] == "u") {
      resultArray.push(input[index])
    }
  }
}

console.log(resultArray)

let resultString = resultArray.join('')
resultString.toUpperCase()

console.log(resultString)

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

