        //   challenge-guard-calss.js


      // Vary Simpal Exampal
       function onlineFoodDelivery(personname , personphone , pamentmathord){
            if(personname === ""){
                return `personname is required`
            }

            if(personphone === ""){
                return `personphone is required`
            }

            return `Name : ${personname}, Phone : ${personphone}`
       }
    //    console.log(onlineFoodDelivery("", "8976"));         // personname is required
    //    console.log(onlineFoodDelivery("Arslan", "8976"));    // Name : Arslan, Phone : 8976
    //    console.log(onlineFoodDelivery("Arslan", ""));        // personphone is required
    //    console.log(onlineFoodDelivery("", ""));              // personname is required

            //   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<  next
    // 1   CNIC Validator      
// CNIC must not be empty
// CNIC must be exactly 13 characters long (without dashes)
// CNIC must not contain any letters — only digits are valid


   function validateCNIC(cnic) {
    // Guard 1: empty check
    if(cnic === ""){
         return `CNIC must not be empty`
    }
     // Guard 2: length check    
    if(cnic.length !== 13){
         return `CNIC must be exactly 13 characters long`
    }
     // Guard 3: digits only check
    if(isNaN(cnic)){
      return `CNIC must not contain any letters — only digits are vali`
    }

    return`CNIC is valid : ` + cnic;
} 
    // console.log(validateCNIC("9876543212139"));       //  CNIC is valid : 9876543212139
    // console.log(validateCNIC("98765432121349"));     //  CNIC must be exactly 13 characters long
    // console.log(validateCNIC("9876543212134"));     //   CNIC is valid : 9876543212134
    // console.log(validateCNIC("987654321"));    //    CNIC must be exactly 13 characters long
    // console.log(validateCNIC(""));              //   CNIC must not be empty
    
   //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Next

  // 2      University GPA System
//  Student name must not be empty
// CGPA must be a valid range: 0.0 to 4.0
// Semester number must be between 1 and 8
// To be eligible for scholarship, CGPA must be 3.5 or above — but this is NOT a guard clause, this is logic that goes after the guards  

      function checkScholarship(studentName, cgpa, semester) {
    // Guard 1: name
     if(studentName === ""){
        return `Student name must not be empty`
     }

    // Guard 2: CGPA range
     if(cgpa < 0 || cgpa > 4.0){
        return `CGPA must be a valid range: 0.0 to 4.0`
     }

    // Guard 3: semester range
     if(semester < 1 || semester > 8){
        return `Semester number must be between 1 and 8`
     }

    // Scholarship logic — write this after your guards
    if (cgpa >= 3.5) {
        return studentName + " is eligible for scholarship";
    }

    return studentName + " is not eligible — CGPA below 3.5";
}
   // console.log(checkScholarship("Ali", 4.0, 4.5));       // Ali is eligible for scholarship
   // console.log(checkScholarship("Ali", 0, 4.5));         // Ali is not eligible — CGPA below 3.5
   // console.log(checkScholarship("Ali", 4.0, 5.5));       // Ali is eligible for scholarship
   // console.log(checkScholarship("", 4.0, 4.5));         //    Student name must not be empty
     //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    Next

//  3    Online Food Order
// Customer name must not be empty
// Phone number must not be empty
// Delivery address must not be empty
// Order amount must be greater than 0
// Order amount must not exceed Rs. 50,000 per order
// Payment method must be "cash", "easypaisa", or "jazzcash"    
     

   function onlineFoodDelivery(customerName , customerPhone , customerAddress, amount, payment){
      if(customerName === ""){
           return `Customer name must not be empty`
      }  
      if(customerPhone === ""){
       return `Phone number must not be empty`
      } 
      if(customerAddress === ""){
         return `Delivery address must not be empty`
      }  
      if(amount < 0 || amount > 500000){
        return `order amount must greater then 0 and must not exceed 500000`
      }
      if(payment !== "cash" && payment !== "easypaisa" && payment !== "jazzcash"){
         return ` Payment method must be "cash", "easypaisa", or "jazzcash"`
      }
      return ` Order conform :
      CustomerName : ${customerName},
      CustomerPhone : ${customerPhone},
      CustomerAddress : ${customerAddress},
      Amount : ${amount},
      Pament : ${payment} `
   }
   // console.log(onlineFoodDelivery("", "", "" , ""));   // name is not be empty
   // console.log(onlineFoodDelivery("Ali", "", "" , "500000"));    // phone name is not be empty
   // console.log(onlineFoodDelivery("Ali", "0987654321", "" , "500000"));    // Delivery address must not be empty 
   // console.log(onlineFoodDelivery("Ali", "0987654321", "House 12 Street 5 Lahore" , "500001"));
   // console.log(onlineFoodDelivery("Ali", "0987654321", "House 12 Street 5 Lahore" , "50000", "cash"));
   
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   Next 

// 4     Salary Slip Generator
// Employee ID must not be empty
// Basic salary must be between Rs. 25,000 and Rs. 500,000
// Bonus percentage must be between 0 and 50 (it is okay to have 0 bonus)
// Department must be "engineering", "marketing", "sales", or "hr"   

       function departmentSystem(employeeId , salary , bonus , department ){
            if(employeeId === ""){
                return `Employee ID must not be empty`
            }
            if(salary < 25000 || salary > 500000){
               return `Basic salary must be between Rs. 25,000 and Rs. 500,000`
            }
            if(bonus < 0 || bonus > 50){
             return `Bonus percentage must be between 0 and 50`
            }
            if(department === "engineering" && department === "marketing" && department === "sales" && department === "hr"){
                return `Department must be "engineering", "marketing", "sales", or "hr"`
            }
            return `conform :
             EmployeeId : ${employeeId},
             Salary : ${salary},
             Bonus : ${bonus},
             Department : ${department}`
       }
      //  console.log(departmentSystem("EMP999", 25000 , 3 , "hr"));

       //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Next

//5   Property Listing
// // Owner name must not be empty
// City must not be empty
// Property size (in Marla) must be between 3 and 500
// Price must be greater than 0
// Listing type must be "rent" or "sale"
// Property type must be "house", "apartment", "plot", or "commercial"
       
   function properties(name , city , propertiesSize , price, Listing, property){
      if( name === ""){
       return `Owner name must not be empty `
      }
      if(city === ""){
       return `City must not be empty`
      }
      if(propertiesSize < 3 || propertiesSize > 500){
           return `Property size (in Marla) must be between 3 and 500`
      }
      if(price <= 0){
         return ` Price must be greater than 0`
      }
      if(Listing !== "rent" && Listing !== "sale"){
         return `Listing type must be "rent" or "sale"`
      }
      if(property !== "house" && property !== "apartment" && property !== "plot" && property !== "commercial"){
         return ` Property type must be "house", "apartment", "plot", or "commercial"`
      }
      return `Confirmed 
      Name: ${name}, 
      City: ${city},
      Size: ${propertiesSize} ,
      Price: ${price}, 
      Listing: ${Listing},
      Property: ${property}`
   }
   // console.log(properties("Ali" , "Loher" , 10 , 0, "sale"));  //Price must be greater then 0
   // console.log(properties("Ali" , "Loher" , 0 , 0));   // Property size must be between 3 and 500
   // console.log(properties("Ali" , "" , 10 , 0));    // City must not be empty
   // console.log(properties("" , "Loher" , 10 , 0));    // Owner name must not be empty
   // console.log(properties("Ali" , "Loher" , 10 , -1)); // Price must be greater than 0 
   // console.log(properties("Ali" , "Loher" , 10 , 4, "rent", "commercial")); // Confirmed 
                                                                              // Name: Ali, 
                                                                              // City: Loher,
                                                                              // Size: 10 ,
                                                                              // Price: 4, 
                                                                              // Listing: rent,
                                                                              // Property: commercial 
   
   //   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<       Next 

// 6  Exam Registration
// Student name must not be empty
// Roll number must not be empty
// Age must be between 14 and 25
// Percentage in previous class must be between 33 and 100 (minimum passing is 33%)
// Exam type must be "matric" or "intermediate"
// Fee paid must be exactly true — the fee boolean must be true


// Hint: for the last condition: The fee parameter is a boolean (true or false). A guard that checks if
//  fee is not paid would be: if (feePaid !== true) or more simply if (!feePaid).     
 
function examRegistration (studentName , rollnumber , age, previousPercentage ,Exam , feepaid){
    if(studentName === ""){
         return ` Student name must not be empty`              
    }                       // ???????????????????????????????????????????????????????   feePaid
    if(rollnumber === ""){                                              
         return `Roll number must not be empty`
    } 
    if(age < 14 || age > 25){
     return ` Age must be between 14 and 25`
    }
    if(previousPercentage < 33 || previousPercentage > 100){
   return `Percentage in previous class must be between 33 and 100`
    }

    if(Exam !== "matric" && Exam !== "intermediate"){
       return `Exam type must be "matric" or "intermediate"`
    }
    if (feepaid !== true) {
       return `Fee paid must be exactly true — the fee boolean must be true`
    }

    return `Confirmed
      StudentName: ${studentName},
      RollNumber: ${rollnumber},
      Age: ${age},
      PrevisonPercentage: ${previousPercentage},
      Exam: ${Exam},
      Feepaid: ${feepaid}
      `
     
}
      // console.log(examRegistration("Usman" , "5" , 25));
      // console.log(examRegistration("Usman" , "5" , 25, 100 ,"matric" , true));
                                                                  // Confirmed
                                                                  //       StudentName: Usman,
                                                                  //       RollNumber: 5,
                                                                  //       Age: 25,
                                                                  //       PrevisonPercentage: 100,
                                                                  //       Exam: matric
      // console.log(examRegistration("" , "5" , 25, 100 ,"matric")); //  Student name must not be empty
      // console.log(examRegistration("Usman" , "" , 25, 100 ,"matric"));  // Roll number must not be empty
      // console.log(examRegistration("Usman" , "5" , 13, 100 ,"matric"));  // Age must be between 14 and 25
      // console.log(examRegistration("Usman" , "5" , 25, 101 ,"matric"));   // //   Percentage in previous class must be between 33 and 100 
      // console.log(examRegistration("Ali" , "5" , 25, 100 ,"mat")); //    Exam type must be "matric" or "intermediate"


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        Next 




// 7    Password Strength Checker
// Password must not be empty
// Password must be at least 8 characters
// Password must not exceed 32 characters
// Password and confirm password must match — if they do not match, return "Passwords do not match"
// Username must not be empty
// Password must not be the same as the username — a person should not use their name as password


// Think carefully about the order of your guards. Some checks depend on others being true first. For example,
//  there is no point checking if passwords match if the password is empty.
 
  
function checkerStrengthPassword ( userName , password , ConfirmedPassword){
    if (userName === ""){
      return `Username must not be empty`
    }
    if(password === ""){
      return `Password must not be empty`
    }
    if(password.length < 8){
       return `Password must be at least 8 characters`
    }
    if(password.length > 32){
       return `Password must not exceed 32 characters`
    }
    if(password === userName){
       return ` Password cannot same of youer user name.`
    }
    if(password !== ConfirmedPassword){
       return `Passwords do not match`
    }
    return `correct :
    Username: ${userName},
    Password: ${password},
    Confirmed: ${ConfirmedPassword}`

}
      // console.log(checkerStrengthPassword("Ahmad" , "88831", "88831" ));   // Password must be at least 8 characters
      // console.log(checkerStrengthPassword("Ahmad" , "66666666666666666666666666666666666666", "66666666666666666666666666666666666666" ));   // Password must be exceed 32 characters
      // console.log(checkerStrengthPassword("Ahmad" , "99988888831", "98765432156" )); // Passwords do not match   
      // console.log(checkerStrengthPassword("Ahmad" , "98765432156", "98765432156" )); // correct :
      //                                                                                  //  Username: Ahmad,
      //                                                                                  //  Password: 98765432156,
      //                                                                                  //  Confirmed: 98765432156   
      // console.log(checkerStrengthPassword("Ahmad" , "Ahmadaadd", ""));     // Passwords do not match
      // console.log(checkerStrengthPassword("Ahmadadd" , "Ahmadadd" , "Ahmadadd"));   //  Password cannot same of youer user name.


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Next 



// 8   Flight Seat Booking
// Passenger name must not be empty
// CNIC or passport number must not be empty (it is the ID field — just check it is not empty)
// Age must be at least 2 (infants under 2 cannot be booked online)
// Age must not exceed 120
// Seat class must be "economy" or "business"
// Number of bags must be between 0 and 2 for economy, but this rule only applies to economy — for business class, bags can be 0 to 4
   
     function flightSeatBooking(passengerName , IdNumber , age , seatClass , numberOfBags){
       if(passengerName === ""){
          return `Passenger name must not be empty`
       }
       if(IdNumber === ""){
         return `CNIC or passport number must not be empty`
       }
       if(age < 2){
            return `Age must be at least 2`
       }
       if(age > 120){ 
         return `Age must not exceed 120`
       }   
       if (seatClass !== "economy" && seatClass !== "business"){
           return `Seat class must be "economy" or "business"`
       }
       if(seatClass === "economy" && (numberOfBags < 0 || numberOfBags > 2) ){
           return `Economy class, bags must be 0 to 2`
       }
       if(seatClass === "business" && (numberOfBags < 0 || numberOfBags > 4)){
           return `Business class, bags must be 0 to 4`
       }
       return `Correct: 
        PassengerName: ${passengerName},
        IdNumber: ${IdNumber},
        Age: ${age},
       SeatClass: ${seatClass}
        `
     } 
   //   console.log(flightSeatBooking("Ali", "9876", 3 , "economy", 3 ));      //      Economy class, bags must be 0 to 2  
   //   console.log(flightSeatBooking("Ali", "9876", 3 , "economy", 2 ));      //      Correct: 
   //                                                                               //   PassengerName: Ali,
   //                                                                               //   IdNumber: 9876,
   //                                                                       Age: 3,
   //                                                                       SeatClass: economy 
  
// >>>>>>>>>>>>>>>>>>>>>>     Next





//    9      Medical Appointment System

//  Patient name must not be empty
// Patient age must be between 0 and 120
// Doctor specialization must be one of: "general", "cardiology", "orthopedic", "neurology", "pediatrics"
// If patient age is under 18, the only allowed specialization is "general" or "pediatrics" — a child cannot directly book cardiology, orthopedic, or neurology without going through general first
// Appointment slot must be "morning", "afternoon", or "evening"
// Contact number must not be empty


 function medicalAppointmentSystem (patientName , patientAge , doctorSpecialization , appointmentSlot , contactNumber){
    if(patientName === ""){
     return `Patient name must not be empty`
    }
    if(patientAge < 0 || patientAge > 120){
      return `Patient age must be between 0 and 120`
    }
      if(contactNumber === ""){
      return `Contact number must not be empty`
    }
   
    if(doctorSpecialization !== "general" && doctorSpecialization !== "cardiology" && doctorSpecialization !== "orthopedic" && doctorSpecialization !== "neurology" && doctorSpecialization !== "pediatrics"){
       return `Doctor specialization must be one of: "general", "cardiology", "orthopedic", "neurology", "pediatrics"`
    } 
    
    if(appointmentSlot !== "morning" && appointmentSlot !== "afternoon" && appointmentSlot !== "evening"){
      return `AppointmentSlot:must be morning , afternoon , evening`
    }
    if(patientAge > 18 && doctorSpecialization !== "general" && doctorSpecialization !== "padiater"){
      return `Child under 18 can only book in "general" or "pediatrics"`
    }
   
    return `Confrom :
    PatientName: ${patientName}
    PatientAge: ${patientAge}
    DoctorSpecialization: ${doctorSpecialization}
    ContactNumber: ${contactNumber}
    `
 }
      // console.log(medicalAppointmentSystem("" , "20" , "cardiology", "0987654" ));   // Patient name must not be empty
      // console.log(medicalAppointmentSystem("Ali" , "222" , "cardiology", "0987654" ));    // Patient age must be between 0 and 120
      
      // console.log(medicalAppointmentSystem("Ali", "18" , "orthopedic" ,"morning" , 987655432));  // Confrom :
      //                                                                                              //  PatientName: Ali
      //                                                                                              //  PatientAge: 10
      //                                                                                              //  DoctorSpecialization: orthopedic
      //                                                                                              //  ContactNumber: 987655432
      // console.log(medicalAppointmentSystem("Ali", "70" , "orthopedic" ,"morn" , 987655432));  //  AppointmentSlot:must be morning , afternoon , evening
      // console.log(medicalAppointmentSystem("Ali", "70" , "orthope" ,"morning" , 987655432));  //  Doctor specialization must be one of: "general", "cardiology", "orthopedic" ,"neurology", "pediatrics"
    

      //   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    Next 




  //   10     Bank Account Transfer (Full System)
//    Sender account number must not be empty
// Receiver account number must not be empty

// Sender and receiver account numbers must NOT be the same — you cannot transfer money to yourself

// Transfer amount must be greater than 0
// Transfer amount must not exceed Rs. 500,000 per transaction
// Transfer amount must be in whole rupees only — no paisas allowed. Hint: amount % 1 !== 0 is true when a number
//  has a decimal part. 500.50 % 1 gives 0.5. 500 % 1 gives 0.
// Transfer type must be "ibft" or "raast"
// Remarks field can be empty, but if it is filled, it must not exceed 100 characters

      function bankAccountTransfer (senderAccountNumber , receiverAccountNumber , amount , transferTypes , remarksFilled){
         if(senderAccountNumber === ""){
             return ` Sender account number must not be empty`
         }
         if(receiverAccountNumber === ""){
           return `Receiver account number must not be empty`
         }

         if(senderAccountNumber === receiverAccountNumber){
            return `Sender and receiver account numbers must NOT be the same`
         } 
         if(amount <= 0 ){
          return `Transfer amount must be greater than 0`
         }
         if(amount > 500000){
          return `Transfer amount must not exceed Rs. 500,000 per transaction`
         }
         if(amount % 1 !== 0){
           return `Transfer amount must be in whole rupees — no paisas allowed.`
         }
         if(transferTypes !== "ibft" && transferTypes !== "raast"){
            return `Transfer type must be "ibft" or "raast"`
         }
         if(remarksFilled !=="" && remarksFilled.length > 100){
            return `Remarks field must not exceed 100 characters`
         }

         return `Confrom: 
           SenderNumber: ${senderAccountNumber},
           ReceiverNumber: ${receiverAccountNumber},
           Amount: ${amount}
           TransferTypes: ${transferTypes}, 
           RemarksFilled: ${remarksFilled} `
      }
      // console.log(bankAccountTransfer("" , "Arslan"));  // Sender account number must not be empty
      // console.log(bankAccountTransfer("ali" , ""));  // Receiver account number must not be empty
      // console.log(bankAccountTransfer("ali" , "ali"));   // Sender and receiver account numbers must NOT be the same
      // console.log(bankAccountTransfer("Ali", "Arslan"));  // Transfer type must be "ibft" or "raast"
      // console.log(bankAccountTransfer("Ali", "Arslan" , 0, "ibft")); // Transfer amount must be greater than 0
      console.log(bankAccountTransfer("Ali", "Arslan" , 1, "ibft" , "90")); //   confrom : 
                                                                  // SenderNumber: Ali,
                                                                  // ReceiverNumber: Arslan,
                                                                  // Amount: 1
                                                                  // TransferTypes: ibft, 
                                                                  // RemarksFilled: 90 
      // console.log(bankAccountTransfer("Ali", "Arslan" ,500000, "raast","a".repeat(101)));


    