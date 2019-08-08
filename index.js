for (let i = 1; i <=100; i++) {
  if (fizzBuzz(i)) {
    console.log('FizzBuzz')
  } else if (isFizz(i)) {
    console.log('Fizz')
  } else if (isBuzz(i)) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

function fizzBuzz (num) {
  return isFizz(num) && isBuzz(num)
}

function isFizz (num) {
  return num % 3 === 0
}

function isBuzz (num) {
  return num % 5 === 0
}
