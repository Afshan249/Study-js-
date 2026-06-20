       
       // Callback function 
        const add = (a, b ) => a + b;       

        const callbackArray = (a , b ,operator) => {
         return () => {
             const result = operator(a , b)
             return result
         }
        }
        const rat = callbackArray(4, 6, add)
        console.log(rat());          // 10

        //                                          ,,,,,,,,,,,,,,,,

        //   Assignment 2: Divide ka case


        const divided = (c , d) => c / d 
        const multiply = (c, d) => c * d
        const subtract = (c, d) => c - d


        const dividedCallbackArray = (c, d, operator) =>{
            return () => {
                if(d === 0){return "Cannot divide by Zero."}
                 const result = operator(c , d)
                 return result
            }
        }
        const DividedTheValue = dividedCallbackArray(180, 0 , divided)
        console.log(DividedTheValue());     //  Cannot divided by Zero.

        const rat3 = dividedCallbackArray(280, 5, divided)
        console.log(rat3())              //   56

        const rat1 = dividedCallbackArray(215 , 150, subtract)
        console.log(rat1());                // 65

        const rat2 = dividedCallbackArray(12 , 12, multiply)
        console.log(rat2());                // 144
        
         //                                            ,,,,,,,,,,,,,,,,,
     // OnEach : they are use the operator(sum , add , multply , divid) and return the value.these value give the onSuccess 

  // her value jo onEach say malte ha us ko one variable ma store keya jata ha . yo variable ek array banjate ha . or ya array onSuccess ko mill jate ha 

  // OnSuccess : each value return onEach store in array.This array give onSuccess
  
  //  callback:  iss ma ana wale her cheez ek function hone chaheya      





        const showResult = (resultArray) => {return `Final Result:  ${resultArray}`}
        const squar = (num) => { return num * num} 

          const number = [3, 5, 7, 9, 1, 6]
      const callbackTheArray = (array , onEach , onSuccess) => {
          return () => {
             const resultArray = []
               for(let i = 0 ; i < array.length; i++){
                const result = onEach(array[i])
                resultArray.push(result)
            }
            return onSuccess(resultArray)
          }
      }
      const resultInAll = callbackTheArray(number , squar , showResult)
      console.log(resultInAll());             // Final Result:   9,25,49,81,1,36   
      

      ///                                              ,,,,,,,,,,,,,,,,,,,,,,


//       Assignment 2 — Array Filter (onEach + onSuccess)
// 1. Ek array banao: const ages = [12, 18, 25, 8, 30, 15]

// 2. onEach callback banao "isAdult" jo check kare number 18 ya usse zyada hai ya nahi
//    (true/false return kare)

// 3. onSuccess callback banao "showAdults" jo sirf "true" wale results ka count batae
//    Example: "Total Adults: 3"

// 4. callbackTheArray(array, onEach, onSuccess) 

     const isAdult = (number) => {
        if(number >= 18 ){
            return true
        }else{
            return false
        }
        
    }
     const showAdultes = (Adults) => {

        let count = 0
        for(let s = 0; s < Adults.length; s++){
            if(Adults[s] === true) {
                count++
            }
        }
        return `Number is adult is ${count}.`
    }

    const ages = [12, 18, 25, 8, 30, 15]

    const humanAge = (array , onEach , onSuccess) => {
         return (number) => { 
               const Adults = []
             for(let a = 0 ; a < array.length ; a++){
                const Adult = onEach(array[a])
                Adults.push(Adult)
             }
             return onSuccess(Adults)
         }
    } 
    const result1 = humanAge(ages ,isAdult , showAdultes )
    console.log(result1());      // Number is adult is 3 ( true)
    []
  
//                              ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

   // validate users

// function validateUser(user, onSuccess, onError)  , receive use data , call on Error in case of error, and if success, called onSuccess and return validated data

const testUser = { name: "Osman", age: 25 };




// console.log(
//   validateUser(
//     testUser,
//     (validatedUser) => console.log(`user is validated: `, validatedUser),
//     (errorMsg) => console.log(`fix this error first: ${errorMsg}`),
//   ),
// );




