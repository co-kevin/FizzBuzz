for (let i = 1; i <=100; i++) {
  console.log(of(i))
}

function of (num) {
  if (num % 15 === 0) return 'FizzBuzz'
  if (num % 5 === 0) return 'Buzz'
  if (num % 3 === 0) return 'Fizz'
  return num
}
