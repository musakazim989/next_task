//a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

let weekDate = (input) => {
  let day = new Date(input).getDay()
  let dayOtTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  return dayOtTheWeek[day]
}

let inputdate = "2023-06-20"
console.log(weekDate(inputdate))

//b. Implement the function to display the day of the week for the current date.

let inputdate2 = new Date()
console.log(weekDate(inputdate2))


//=============================================================
//=============================================================