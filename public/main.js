function main() {
  const numberOfCups = 'one'
  const fullName = 'Erika'

  console.log(`${fullName} drinks ${numberOfCups}cups of coffee each day.`)

  const aboutMe = {
    fullName: 'Erika',
    luckyNumber: 5,
    favoriteMovies: ('Sound of Music', 'Parent Trap', 'Die Hard'),
  }
  console.log(aboutMe)

  const userName = window.prompt('What is your name?')
  console.log(`Hello there ${userName}!`)

  const firstOperand = parseFloat(
    window.prompt(
      'Please give me your two favorite numbers. What is your first favorite number?'
    )
  )

  const secondOperand = parseFloat(
    window.prompt('What is your second favorite number?')
  )

  const sumNumber = secondOperand + firstOperand
  console.log(sumNumber)
  const difference = secondOperand - firstOperand
  console.log(difference)
  const product = secondOperand * firstOperand
  console.log(product)
  const quotient = secondOperand / firstOperand
  console.log(quotient)
  const remainder = firstOperand % secondOperand
  console.log(remainder)

  const message = `The sum of your two favorite numbers is ${sumNumber}. The difference of your two favorite numbers is ${difference}. The product of your two favorite numbers is ${product}.  The quotient of your two favorite numbers is ${quotient}. The remainder when dividing your two favorite numbers is ${remainder}. `

  console.log(message)

  const numbers = [
    48,
    59,
    40,
    40,
    51,
    70,
    98,
    26,
    20,
    8,
    81,
    32,
    51,
    19,
    73,
    63,
    10,
    32,
    48,
    28,
    73,
    65,
    93,
    64,
    58,
    37,
    91,
    22,
    37,
    23,
    85,
    22,
    90,
    68,
    24,
    56,
    80,
    48,
    31,
    5,
    45,
    94,
    18,
    92,
    54,
    31,
    49,
    51,
    58,
    9,
    68,
    37,
    62,
    35,
    9,
    80,
    25,
    86,
    95,
    25,
    37,
    69,
    80,
    1,
    60,
    60,
    95,
    63,
    41,
    93,
    31,
    41,
    71,
    42,
    67,
    60,
    100,
    4,
    14,
    62,
    63,
    59,
    76,
    68,
    73,
    37,
    72,
    1,
    93,
    30,
    49,
    100,
    76,
    27,
    59,
    43,
    74,
    82,
    57,
    77,
  ]

  let smallest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) smallest = numbers[i]
  }
  console.log(smallest)

  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i]
  }
  console.log(largest)

  let sum = 0
  for (let i = 0; (i = numbers.length); i++) {
    sum = sum + 1
  }
  console.log(sum)

  const average = sum / numbers.length

  const statistic = {
    smallest: smallest,
    largest: largest,
    sum: sum,
    average: average,
  }
  console.log(statistic)
}

document.addEventListener('DOMContentLoaded', main)
