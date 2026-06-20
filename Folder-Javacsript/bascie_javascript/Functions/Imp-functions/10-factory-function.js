

//   Practice 1 — Number Operations
// #1 generateSubtractor
// Create generateSubtractor(n) — returns a function
// that subtracts n from any number


const generateSubtractor = (n) => {
  return (number) => {
      return [n - number]
  }
}
const print = generateSubtractor(8)
console.log(print(5));

 


//   #2 generateMultiplierWithLimit
// Create generateMultiplierWithLimit(n, limit)
// Returns a function that multiplies number by n
// BUT if result exceeds limit, return "Limit Exceeded!"


//  Practice 2 — Greeting (New Pattern)
// #3 generateFullGreeting
// Create generateFullGreeting(greeting, sign)
// Returns a function that takes a name
// and returns full message with sign at end


//   #4 generateTimeGreeting
// Create generateTimeGreeting(timeOfDay)
// Returns a function that takes a name
// and returns time based greeting


// Practice 3 — Object Return (Tumhari weak point!)
// #5 generateBMI
// Create generateBMI(height) — height in meters
// Returns a function that takes weight in kg
// Returns OBJECT { weight, height, bmi }
// BMI formula = weight / (height * height)


// #6 generateInvoice
// Create generateInvoice(productName, taxPercent)
// Returns a function that takes price
// Returns OBJECT { product, price, tax, total }


//   Practice 4 — Real World 
// #7 generatePasswordChecker
// Create generatePasswordChecker(minLength, mustHaveNumber)
// Returns a function that takes a password string
// Returns OBJECT { password, isValid, reason }




