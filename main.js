// 1. Objects and functions

/*
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Per",
    age: 35,
    country: "Norway"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()
*/
//---------------------------------------------------------------------------------------------------------
// 2. if else
/**
let age = 75

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}
 */
//---------------------------------------------------------------------------------------------------------
// 3. loops and arrays

/*
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
/*
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i])
} */
//---------------------------------------------------------------------------------------------------------
// 4. push, pop, unshift, shift

/*
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop();
largeCountries.push("Pakistan")
largeCountries.shift();
largeCountries.unshift('China');
console.log(largeCountries)
*/
//---------------------------------------------------------------------------------------------------------
// 5. logical operators
let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if (dayOfMonth === 13 && weekday === 'Friday') {
  console.log('😱')
} else {
  console.log("other day")
}

//---------------------------------------------------------------------------------------------------------
