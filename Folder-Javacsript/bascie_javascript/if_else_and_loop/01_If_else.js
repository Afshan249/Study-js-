    //  if_else.js

//   1
   // check if the student passed or failed,. 
// // create three var, name, total marks, obtained marks, passing critaria 33% 
// // const name = "Arslan"
// // const totalMarks










// 2

// //  ## assignemt, calcualte discount , 15 % discount for members. 
// //  is member, purchase amount,
// //    if isMember, then apply 15% discout 
// //   else tell the user to becoem a member.  







// 3  
// similarly use if-else ladder to discribe temptrature.
// less then 0 . tell to saty inside, less 10, very cold, / less then 20 cold less then 30, prelsent less then 40, warm stay hydrated. else ; dangerous heat.














//   4
//     // ## : User Registration - BAD vs GOOD


//  // BAD: Deeply nested conditionals (Pyramid of Doom)

 
//               //    Bad example 
// //  function registerUserBad(username, email, password, age) {
// //      if (username) {
// //          if (username.length >= 3) {
// //              if (email) {
// //                  if (email.includes("@")) {
// //                      if (password) {
// //                          if (password.length >= 8) {
// //                              if (age) {
// //                                  if (age >= 18) {
// //                                       // Finally! The actual logic buried deep
// //                                      return {
// //                                          success: true,
// //                                 // https:js-classroom-eight.vercel.app/        message: "User registered successfully!",
// //                                          user: { username, email, age }
// //                                      };
// //                                  } else {
// //                                      return { success: false, message: "Must be 18 or older" };
// //                                  }
// //                              } else {
// //                                  return { success: false, message: "Age is required" };
// //                              }
// //                          } else {
// //                              return { success: false, message: "Password too short" };
// //                          }
// //                      } else {
// //                          return { success: false, message: "Password is required" };
// //                      }
// //                  } else {
// //                      return { success: false, message: "Invalid email format" };
// //                  }
// //              } else {
// //                  return { success: false, message: "Email is required" };
// //              }
// //          } else {
// //              return { success: false, message: "Username too short" };
// //          }
// //      } else {
// //          return { success: false, message: "Username is required" };
// //      }
// //  }
   










    // 5

        // ## Process Payment - Refactoring Exercise

        

        // BAD: Nested version
        // function processPaymentBad(user, amount, paymentMethod) {
        //     if (user) {
        //         if (user.isActive) {
        //             if (amount > 0) {
        //                 if (amount <= user.balance) {
        //                     if (paymentMethod) {
        //                         if (paymentMethod === "card" || paymentMethod === "wallet") {
        //                             // Process payment
        //                             user.balance -= amount;
        //                             return { success: true, newBalance: user.balance };
        //                         } else {
        //                             return { success: false, error: "Invalid payment method" };
        //                         }
        //                     } else {
        //                         return { success: false, error: "Payment method required" };
        //                     }
        //                 } else {
        //                     return { success: false, error: "Insufficient balance" };
        //                 }
        //             } else {
        //                 return { success: false, error: "Invalid amount" };
        //             }
        //         } else {
        //             return { success: false, error: "Account is inactive" };
        //         }
        //     } else {
        //         return { success: false, error: "User not found" };
        //     }
        // }
     //  password strength checker :  it uses regex. advance


                             //           Solve               //







       

//    6

    // ## Nested booking validation

    //  function bookAppointmentBad(patient, doctor, date, time) {
    //      if (patient) {
    //          if (patient.name && patient.phone) {
    //              if (doctor) {
    //                  if (doctor.available) {
    //                      if (date) {
    //                          if (new Date(date) > new Date()) {
    //                              if (time) {
    //                                  if (time >= "09:00" && time <= "17:00") {
    //                                      return { 
    //                                          success: true, 
    //                                          booking: { patient: patient.name, doctor: doctor.name, date, time }
    //                                      };
    //                                  } else { return { success: false, error: "Time must be 9AM-5PM" }; }
    //                              } else { return { success: false, error: "Time required" }; }
    //                          } else { return { success: false, error: "Date must be in future" }; }
    //                      } else { return { success: false, error: "Date required" }; }
    //                  } else { return { success: false, error: "Doctor not available" }; }
    //              } else { return { success: false, error: "Doctor required" }; }
    //          } else { return { success: false, error: "Patient info incomplete" }; }
    //      } else { return { success: false, error: "Patient required" }; }
    //  }








    // 7  
/// score , 0 - 100 

// score should be more then 0 and less then 100.   








// 8

// Concept in simple English:
// Use if/else to check a condition.
// If marks are 60 or more → student passed.
// Otherwise → student failed.
// Challenge: Check Student Pass or Fail

   // TAKE marks
// IF marks are greater than or equal to 60
//     SAY "Passed"
// OTHERWISE
//     SAY "Failed"






// 9
// Guard clause means exiting early when condition fails.
// Challenge: Use Guard Clause for Pass Check
// Concept in simple English:
// First handle the failure case.
// Then continue normal flow.

// TAKE marks
// IF marks are less than 60
//     RETURN "Failed"
// SAY "Guard clause passed"
// RETURN "Passed"





// 10
// Challenge: Validate Score Range
// Concept in simple English:
// Score must stay between 0 and 100.
// Less than 0 or more than 100 is invalid.

// TAKE score
// IF score is less than 0
//     SAY "Score cannot be less than 0"
// IF score is greater than 100
//     SAY "Score cannot be more than 100"
// OTHERWISE
//     SAY "Score is valid"








// 11
// Challenge: Validate Age Range
// Concept in simple English:
// Age should be between 20 and 120.

// TAKE age
// IF age is less than 20
//     SAY "Age cannot be less than 20"
// IF age is greater than 120
//     SAY "Age cannot be more than 120"
// OTHERWISE
//     SAY "Age is valid"








// 12
// Challenge: Validate Age Using OR Operator
// Concept in simple English:
// Use OR (||) when any one invalid condition should fail.



// TAKE age
// IF age is less than 20 OR age is greater than 120
//     SAY "Invalid age"
// OTHERWISE
//     SAY "Age is valid"








// 13
// Challenge: Validate Marks Range
// Concept in simple English:
// Marks must be between 17 and 75.

// TAKE marks
// IF marks are less than 17 OR marks are greater than 75
//     SAY "Marks are invalid"
// OTHERWISE
//     SAY "Marks are valid"









// 14

// Challenge: Validate Username and Password
// Concept in simple English:
// Username should not be empty.
// Password should be at least 8 characters.
// Username and password should not be the same.



// TAKE username and password
// IF username is empty
//     SAY "Username cannot be empty"
// IF password length is less than 8
//     SAY "Password too short"
// IF username equals password
//     SAY "Username and password cannot be same"
// OTHERWISE
//     SAY "Username and password are valid"









// 15
// Challenge: Validate Full Name
// Concept in simple English:
// Both first name and last name are required.

// TAKE first name and last name
// IF first name is empty OR last name is empty
//     SAY "Both names are required"
// OTHERWISE
//     SAY "Full name is valid"








// 16
   
// Challenge: Dashboard Access Validation
// Concept in simple English:
// Only admin or manager can access dashboard.



// TAKE role
// IF role is NOT admin AND role is NOT manager
//     SAY "Access denied"
// OTHERWISE
//     SAY "Access granted"







// 17
// Challenge: Course Enrollment Validation
// Concept in simple English:
// User can enroll only in Python, Golang, or JavaScript.



// TAKE course name
// IF course is NOT python
// AND course is NOT golang
// AND course is NOT javascript
//     SAY "Course not allowed"
// OTHERWISE
//     SAY "Enrollment allowed"








// 18

// Challenge: Payment Method Validation
// Concept in simple English:
// Only card and wallet payment methods are allowed.

// TAKE payment method
// IF payment method is NOT card
// AND payment method is NOT wallet
//     SAY "Payment method not allowed"
// OTHERWISE
//     SAY "Payment method accepted"









// 19

// Challenge: Product Price Validation
// Concept in simple English:
// Product price must be greater than 0
// and not more than 500,000.

// TAKE product name and price
// IF price is less than 0
// OR price is greater than 500000
//     SAY "Invalid product price"
// OTHERWISE
//     SAY "Product added successfully"
        function productPrice( price){
            if(price < 0 || price > 500000){
                return "Invalid product proce"
            }
            return "Product added successfully"
        }
        // console.log(productPrice( 30000));
        // console.log(productPrice( 500001));
        // console.log(productPrice( 10000));
        // console.log(productPrice( 0));
        // console.log(productPrice( -1.0));
        // console.log(productPrice(30000));

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<       next
// 20
// Challenge: Student Transcript Validation
// Concept in simple English:
// Student name cannot be empty.
// CGPA must be between 0.0 and 4.0.

// TAKE student name and CGPA
// IF student name is empty
//     SAY "Student name required"
// IF CGPA is less than 0.0
// OR CGPA is greater than 4.0
//     SAY "Invalid CGPA"
// OTHERWISE
//     SAY "Transcript issued"

    function studentTranscript (name , cgpa){
        if(name.trim() === ""){
            return "Student name is required"
        }

        if(cgpa < 0.0 || cgpa > 4.0){
            return "cgpa between 0.0 to 4.0"
        }
        return ` Name : ${name}, CGPA : ${cgpa}`

    }
    // console.log(studentTranscript("Arslan" , 6.0));
    // console.log(studentTranscript("Arslan" , 5.0));
    // console.log(studentTranscript("" , 0.0));
    // console.log(studentTranscript("Arslan" , 4.0));
    // console.log(studentTranscript("Arslan" , 3.0));
    // console.log(studentTranscript("Arslan" , 2.0));
    // console.log(studentTranscript("Arslan" , 1.0));
    // console.log(studentTranscript("Arslan" , 0.0));
 
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   next
// 21

// Challenge: Delivery Scheduling Validation
// Concept in simple English:
// Delivery can only be scheduled
// if status is "ready" or "packed".

// TAKE order ID and status
// IF status is NOT ready
// AND status is NOT packed
//     SAY "Delivery cannot be scheduled"
// OTHERWISE
//     SAY "Delivery scheduled"

     function  deliverySchedule (orderId , status){
        if(status !== "read" && status !== "packed"){
             return "Delivery cannot be scheduled"
        }
        // return "Delivery scheduled"
        return `${orderId}  , Delivery Scheduled`

     }
    //  console.log(deliverySchedule( 12345 , "packed"));
             //  <<<<<<<<<<<<<<<<<<<<<    next

             //  <<<<<<<<<<<<<<<<,<<<<<<
             
 // Online Shopping Order Validation
// orderId  → 0 se kam nahi hona chahiye
// quantity → 1 se kam nahi hona chahiye
// payment  → sirf "cash" ya "card" hona chahiye     




        function onLineShopping (orderId , quantity, payment){
            if(orderId < 1){
                  return "orderld is required"
            }
             
            if(quantity < 1){
                  return "quantity is required"
            }

            if(payment !== "cash" && payment !== "card"){
                 return "Invalid payment methord"
            }

            return `OrderId: ${orderId},Quantity: ${quantity},Payment: ${payment}`
  
     

            }
        // console.log(onLineShopping(121212 , 5 , "card"));
            

                //  <<<<<<<<<<<<<<<<<<<<<<<<<       next 

// 22
// Challenge: Flight Seat Booking Validation
// Concept in simple English:
// Passenger name cannot be empty.
// Age must be between 1 and 120.
// Seat class must be economy or business.

// TAKE passenger name, age, and seat class
// IF passenger name is empty
//     SAY "Passenger name required"
// IF age is less than 1
// OR age is greater than 120
//     SAY "Invalid age"
// IF seat class is NOT economy
// AND seat class is NOT business
//     SAY "Invalid seat class"
// OTHERWISE
//     SAY "Seat booked successfully"

         function flightSeatBooking (passengername , age , seatclass){
            if(passengername.trim() === ""){
                return  `personname is required `                  // ager " " ha to,error do
            }

                // return `My name is ${passengername.trim()}.`         // Otherwise, name return karo
            if(age < 1 || age > 120 ){
                return "Invalid age"
            }
                //   return "valid age"

            if(seatclass !== "economy" && seatclass !== "business"){
               return "invalid seat class"
            }
            return `${passengername.trim()} , ${age} , ${seatclass}`  // Ali ,110 , business
         }
        //  console.log(flightSeatBooking("   Ali   " , 120 , "business" ));     
    // <<<<<<<<<<<<<<<<  Next     "Test One"

     
// Create a file called grader.js
// Declare a variable score with a number between 0 and 100
// Write an if / else if / else chain that prints: A for 90+, B for 80+, C for 70+, D for 60+, otherwise F
// BEFORE the grading chain, validate the input: if score is not a number OR is outside 0-100, print an error and stop (you can use return inside a function, or nested if)
// Wrap everything inside a function getGrade(score) that returns the letter (or the string 'invalid')
// Call getGrade() with at least 5 different inputs including one invalid (e.g., -5, 45, 72, 88, 101) and log the results
    
    function findGradeOfStudent (score){
         if(typeof score !== "number" || score < 0 || score > 100){
        return `invalid`
         }
         if(score >= 90){
          return `A`
         }else if(score >= 80){
          return `B`
         }else if(score >= 70){
          return `C`
         }else if(score >= 60){
          return `D`
         }else{
            return `Fail`
         }
    }
    // console.log(findGradeOfStudent(101)); // invalid
    // console.log(findGradeOfStudent(-5));  // invalid
    // console.log(findGradeOfStudent(45));  // Fail
    // console.log(findGradeOfStudent(72));  // C
    // console.log(findGradeOfStudent(88));  // B
    // console.log(findGradeOfStudent(90));  // A
    // console.log(findGradeOfStudent(69));  // D
                    // <<<<<<<<<<<<<<<<<<  Next        "Test Two"
 
// Create a file called traffic.js
// Declare a variable light with one of: 'red', 'yellow', 'green', 'off' (any other value is invalid)
// Write a function describeLight(light) that uses a switch statement to return: 'Stop', 'Slow down', 'Go', 'No signal' for each valid value, and 'Unknown' for anything else
// Write a function driverAction(light) that uses a TERNARY (not if-else) to return 'pressing brake' if light === 'red', otherwise 'driving normally'
// Group 'yellow' and 'red' into one combined 'not-green' behavior using intentional switch fall-through (leave a comment saying // fall-through intentional)
// Call both functions with at least 4 different inputs and log each result
   
    function describeLight (light){
      switch(light){
       case "red":
        return `Stop`
       case "yellow":
        return `Slow down`
       case "green":
        return `Go` 
       case "off":
        return `No Signal`
       default:
       return `Unknown`  
      }
    };
    // console.log(describeLight("red"));   // Stop
    // console.log(describeLight("green"));  // Go
    // console.log(describeLight("yellow")); // Slow down
    // console.log(describeLight(""));       // Unknown
    // console.log(describeLight("off"));    // No Signal


    function  driverAction (light){
    //   if(light === "red"){
    //     return `pressing brake`
    //   } else{
    //     return `driving normally`
    //   }
     return light === "red" ?  `pressing brake` : `driving normally`
    }
    console.log(driverAction("green"));   // driving normally
    console.log(driverAction("red"));     //  pressing brake
    console.log(driverAction("yellow"));  // driving normally
    console.log(driverAction("off"));     // driving normally
    
     function shouldSlow (light){
       switch(light){
        case "yellow":
        case "red":    
            return `Slow and Stop`
        default :
          return `false`
       }
     }   
    //  console.log(shouldSlow("green"));  // false
    //  console.log(shouldSlow("yellow")); // Slow and Stop
    //  console.log(shouldSlow("red"));    // Slow and Stop
    //  console.log(shouldSlow("off"));    // false
     
