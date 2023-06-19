//Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

let mySqrRoot = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  let sqrRoot = Math.sqrt(sum)

  console.log(sqrRoot)
}

let givenArr = [2, 1, 4, 3]

mySqrRoot(givenArr)
