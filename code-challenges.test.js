// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
  // fdescribe("take in number>2 give array", () => {
  //   it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
  //     expect(takeIn2GiveFib(fibLength1)).toEqual([array])
  //     expect(takeIn2GiveFib(fibLength2)).toEqual([array])
  //   })
  // })

// a) Create a test with expect statements for each of the variables provided.

//const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

//const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
//pseudocode
//create a function called takeIn2GiveFib
//the function will take in a number greater than 2 and give us an array of that numbers fibonacci sequence
// fibonacci sequence is The sequence follows the rule that each number is equal to the sum of the preceding two numbers.
//need to consider built in method. maybe our input number should be an array as well. Or will need to figure out how to make number data type into an array of numbers.
//I think I will need to use some sort of iteration or for loop.
//use to string method to convert number to string and then string to array.
//input: number >3
//output: [0,1,1,2,3]
// const takeIn2GiveFib = () => {
//   if(fibLength1 > 2) {
//     return fibLength1[0] + fibLength1[1], i++
//   } else if(fibLength2 >2) {
//     return fibLength2[0] + fibLength2[1]
//   }
// }
//ReferenceError: i is not defined
// Originally I was trying to think of a way to convert a number data type into a string and then into an array. Maybe the return statements should look like something to contain return array[]

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// fdescribe("sorted from least to greatest", () => {
//   it("takes in an object and returns an array of the values sorted from least to greatest", () => {
//     expect(funcArrayStudy1(studyMinutesWeek1)).toEqual(arrayStudyWeek1)
//     expect(funcArrayStudy2(studyMinutesWeek1)).toEqual(arrayStudyWeek2)
//   })
// })
  //good error message
// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
//pseudocode
//function name is leastToGreatest
//input: an object
//output: an array of numbers from least to greatest.
//studyMinutesWeek1 is a key with a value of {sunday: 90,
  // monday: 30,
  // tuesday: 20,
  // wednesday: 15,
  // thursday: 30,
  // friday: 15,
  // saturday: 60}
//studyMinutesWeek2 is a key with a value of {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// I will want to use map method to check every element if it is lower than the next number
//return that number if it is lower and then iterate through the rest.

// I think i need to try to destructure the object
// I'm going to return to this problem
// I forgot about the hint!
//obkect.values will return an array of the values. I can then used a built in method like .sort to put them in order of smallest to greatest.

// const arrayStudyWeek1 = Object.values(studyMinutesWeek1) 
      

// const funcArrayStudy1 = (arrayStudyWeek1) => {
//   return arrayStudyWeek1.sort((a, b) => a - b)}

// const arrayStudyWeek2 = Object.values(studyMinutesWeek2)
// const funcArrayStudy2 = (arrayStudyWeek2) => {
//   return arrayStudyWeek2.sort((a, b) => a - b)
// }
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("array returns array of sum", () => {
  it("takes in an array and returns an array of the accumulating sum.", () => {
    expect(transactionSum(accountTransactions1)).toEqual()
    expect(transactionSum(accountTransactions2)).toEqual()
    expect(transactionSum(accountTransactions3)).toEqual()
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []
// Test passed
// b) Create the function that makes the test pass.
//pseudocode
//function called transactionSum
//input: accountTransactions1, accountTransactions1, accountTransactions3
//output: array of number sumed together.
// I think I can use .map that way the same length array is returned.
// My brain is fried.
    const transactionSum = () => {

    }