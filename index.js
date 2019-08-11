for (let number = 1; number <= 100; number ++) {
  console.log(say(number))
}

function say (number) {
  if (isFizz(number) && isBuzz(number)) return 'FizzBuzz'
  if (isFizz(number)) return 'Fizz'
  if (isBuzz(number)) return 'Buzz'
  return number
}

function isFizz (number) {
  return number % 3 === 0 || new String(number).includes('3')
}

function isBuzz (number) {
  return number % 5 === 0 || new String(number).includes('5')
}

export { say }