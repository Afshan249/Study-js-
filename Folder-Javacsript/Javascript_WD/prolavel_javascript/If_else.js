//     // if_else.js


    
// // check if the student passed or failed,. 
// // create three var, name, total marks, obtained marks, passing critaria 33% 
// // const name = "Asim"
// // const totalMarks
//                                                                                  //     thak ha 
//     // const name = "Arslan" ;
//     // const totleMark = 300 ;
//     // const obtainedMake = 108;
       

//     // const passingCriteria = 0.33 * totleMark;   //99
//     // //  console.log(passingCriteria);
    
//     //   if ( obtainedMake >= passingCriteria){
//     //     console.log("pass: ",  ` pass`);
        
//     //   }else {
//     //     console.log("fail: ",  `fail`);
        
//     //   }



//      // check if the student passed or failed,. 
// // create three var, name, total marks, obtained marks, passing critaria 33% 
// // const name = "Arslan"
// // const totalMarks


//       const name = " Arslan";                                                     // thak ha 
//       const totalMarks = 600;
//       const obtaninedMake = 300;
//                                // 33%  * 600
//          const passingCritaria = 0.33 * totalMarks;      
//           // ager marks 198 say above ha to student pass ha otherwise fill
//         //  console.log( " PassingCritaria", passingCritaria);                 //  198

//             if (obtaninedMake >= passingCritaria){
//               console.log("Student Pass: ", `${name} is pass.` );
              
//             }   else {
//               console.log("Student Fail: ", `${name} is fail..`);
              
//             }  




            
             






// //       ## assignemt, calcualte discount , 15 % discount for members. 
// //  is member, purchase amount,
// //    if isMember, then apply 15% discout 
// //   else tell the user to becoem a member.  


//   //  const isMember = false;                                         ////    thak ha  ab 
//   //  const purchaseAmout = 1000;
     
//   //  if ( isMember){
//   //   const discount = 0.15 *purchaseAmout;
//   //   console.log("Discount : ",discount);                 // 150

//   //   const finalAmout =  purchaseAmout - discount ; 
//   //   // console.log( " finalAmout: ",finalAmout);            // 850
    

    
//   //   console.log("True: " ,  `Then apply Adeeba.`);
    
//   //  }else{
//   //   console.log("fails: ", `So, become a member.`);
    
//   //  }






// //       ## assignemt, calcualte discount , 15 % discount for members. 
// //  is member, purchase amount,
// //    if isMember, then apply 15% discout 
// //   else tell the user to becoem a member.  


//       const isMember = false;                                           //  thak ha 
//       const purchaseAmount = 500;
    
//     if (isMember){
//       const discount = 0.15 * purchaseAmount;
//       console.log("Discount: ",discount);                    // 75 

//       const FinalAmount = purchaseAmount - discount;
//       console.log( "FinalAmount: ",FinalAmount);             // 425
//      } else {
//          console.log("Please! Become a member");
         
//      }






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


//                            // Good example 1
//                                                                  // thak ha 
//     // **********************************************************************************************

//      function registeredUserGood (username , email , password , age){
//         if(!username){
//               return "Username is required"; 
//         }   

//         if(username.length < 3){
//             return  "Username too short"
//         }
//         if(!email){
//             return "email is required"
//         }

//         if(!email.includes("@")){
//         return "invalid email format"
//         }

//         if(!password){
//             return "password is requird"
//         }

//         if(password.length < 8){
//            return "password too short"
//         }

//         if(!age){
//           return "age is required"
//         }

//         if(age < 18){
//             return "Must be  18 or older"
//         }

//         return {  
//                 success : true,
//                 user :[username, email , password, age]
//              } 


//      } 

    //  console.log(registeredUserGood('Ali' , 'Arslan@google.come' , "99887700" , 20 ));
                           
                             // <<<<<<<<<<>>>>>>>>>>>>> //
    //                            // Good example2


    //  function registeredUserGood (username , email , password , age){
    //     if(username){
    //           return "Username is required";
    //     }   

    //     if(username.length >= 3){
    //         return  "Username too short"
    //     }

    //     if(email){
    //         return "email is required"
    //     }

    //     if(email.includes("@")){
    //     return "invalid email format"
    //     }

    //     if(password){
    //         return "password is requird"
    //     }

    //     if(password.length >= 8){
    //        return "password too short"
    //     }

    //     if(age){
    //       return "age is required"
    //     }

    //     if(age >= 18){
    //         return "Must be  18 or older"
    //     }

    //     return {  
    //             success : true,
    //             user :[username, email , password, age]
    //          } 


    //  } 

    //  console.log(registeredUserGood('Ali' , 'Arslan@google.come' , "99887700" , 20 ));
                           
     



















    
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
     
              // 1   Good Example 


    // function processPaymentBad (user , amount , paymentMethod){
    //    if( user){
    //         return "user not found"
    //    }

    //    if ( user.isActive){
    //          return "Account is unactive"
    //    }                                                           
    //                                                     //   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //    if(amount >=0){
    //        return "Invalid amount"
    //    }

    //    if( amount <= user.balance){
    //          return "Insufficient balance "
    //    }

    //    if(paymentMethod){
    //       return "paymentMethod required"
    //    }

    //    if(paymentMethod === "card" || paymentMethod === "wallet"){
    //     return "Invalid paymentMethod"
    //    }

    //    user.balance -= amount;
    //    return { 
    //           success : true ,
    //           newBalance: user.balance,
    //    }
    // }            
    // console.log(processPaymentBad( "Arslan", 2000 , "card"  ));

               


                // 2  Good Example 

                                                                                 //thak ha 
    function processPaymentBad (user , amount , paymentMethod){
       if(!user){
            return "user not found"
       }

       if (user.isActive){
             return "Account is unactive"
       }

       if(amount <= 0){
           return "Invalid amount"
       }

       if( amount > user.balance){
             return "Insufficient balance "
       }

       if(!paymentMethod){
          return "paymentMethod required"
       }

       if(paymentMethod !== "card" && paymentMethod !== "wallet"){
        return "Invalid paymentMethod"
       }

       user.balance -= amount;
       return { 
              success : true ,
              newBalance: user.balance
       };

      
    }  
    
     let user = {
            name : "Arslan",
            isActive : true,
            Balance  : 5000 

      }
    console.log(processPaymentBad( user, 2000 , "card"  ));

                    
    























                          //   3rd  example
 
    

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


              
    

                              //    1 good example   
                                                           //       ya to bulcul thak ha 
                              
         function bookAppointmentBad (patient , doctor , date , time){
               if(!patient){
                    return "Patient required"
               }

               if (!patient.name && patient.phone){
                    return "patient information incompalet"
               }

               if(!doctor){
                  return "doctor required"
               }

               if(doctor.available){
                    return "doctor not available "
               }
               if(!date){
                return "date requird"
               }

               if(new Date(date) > new Date()){
                return "Date must be in future "
               }   

               if (!time){
                   return "time requirdS"
               }

               if(!time >= "09: 00" &&  !time <= " 17 : 00" ){
                    return "time must be 9 AM and 5 PM"
               }

                   return {
                      success : true,
                      booking : {
                           patient : patient.name,
                           doctor : doctor.name , 
                           date :   date,
                           time : time 

                      }
                   }

         } 
         console.log(bookAppointmentBad({name: "fatima"},
                                         { name : "Arslan"} , 
                                         {date :'2026-06-10'} ,
                                          {time : '10:00'}
                                        )
                                    );
                                 


