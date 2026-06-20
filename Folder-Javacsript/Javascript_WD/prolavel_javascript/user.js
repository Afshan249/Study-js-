        
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
        
    //     //<<<<<<<<<<<<<<<<<<<<<<
    // function processPaymentGood (user , amount , paymentMethod){

    //     console.log(paymentMethod !== "card" && paymentMethod !== "wallet");
        
    //    if(!user){
    //         return "user not found"
    //    }

    //    if (!user.isActive){
    //          return "Account is unactive"
    //    }

    //    if(amount <= 0){
    //        return "Invalid amount"
    //    }

    //    if( amount > user.balance){
    //          return "Insufficient balance "
    //    }

    //    if(!paymentMethod){
    //       return "paymentMethod required"
    //    }

    //    if(paymentMethod !== "card" && paymentMethod !== "wallet"){
    //     return "Invalid paymentMethod"
    //    }

    //    user.balance -= amount;
    //    return { 
    //           success : true ,
    //           newBalance: user.balance
    //    };

      
    // }  
    //     const user = {
    //         name : "Arslan",
    //         isActive : true,
    //         balance  : 5000            // B
    //      }
    // console.log(user);           //      iss ko console ni keya tha
         
    // console.log(processPaymentGood( user, 3000 , "card"  ));

                          



       //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    


       // assignemt, validate registration, 
// validate email,
// password is required, must be more then 8 chars, 
// age must be >= 18
// agreedtoTandC .

   function validatereagistration ( email , password , age , agreedtoTandC){
            if(email.includes("@)")){
                return " email is invalied"
            }

            if(password.length < 1 || password.length > 8){
                return "must be between 1 to 8 chars"
            }

            if(age < 18  || age > 65){
                return " age must be between 18 to 65"
            }

             if(!agreedtoTandC){
                 return "required to agreed T N C"
             }

             return {
                success : true,
                user : {
                     email : email,
                     password: password,
                     age : age,
                     agreedtoTandC : agreedtoTandC
                }
             }
   }
       console.log(validatereagistration("user@google.com", '12345678' , 64, true));
       