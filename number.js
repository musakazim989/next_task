let checkPrimeNumber = (number) => {
  if (number % 2 == 0) {
    console.log(false)
    console.log("Even number")
  } else {
    console.log(true)
    console.log("Prime number")
  }
}

let inputNumber = 6

checkPrimeNumber(inputNumber)
