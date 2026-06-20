        
//  Practice 1 — generateMultiplier style

// # 1 generateAdder


// Create a factory function generateAdder(n) that returns a function. The returned function takes a number and adds n to it. 

 // Use factory function 

// const add5 = generateAdder(5)
// console.log(add5(10))  // 15
// console.log(add5(3))   // 8

// const add100 = generateAdder(100)
// console.log(add100(50)) // 150

const generateAdder = (n) => {
     return (number) =>{
         return number + n
     }
}
const multiplay = generateAdder(5)
// console.log(multiplay(10));             // 15

const add5 = generateAdder(5)
// console.log(add5(40));                  // 45

const add100 = generateAdder(100)
// console.log(add100(50));               // 150



//                                                   ,,,,,,,,,,,,,,,,,,,,

        //  # 2 generatePower


        // Create generatePower(exponent) that returns a function. The returned function raises a number to that exponent.
        // const square = generatePower(2)
        // console.log(square(4))   
        // console.log(square(9))   

        // const cube = generatePower(3)
        // console.log(cube(3))  
        
        const generatePower = (power) => {
             return (number) => {
                 return number**power
             }
        }
        const squar = generatePower(2)
        // console.log(squar(8));        // 64
        // console.log(squar(4));       // 16
        // console.log(squar(9));      // 81

        const cube = generatePower(3)
        // console.log(cube(3));         // 27
        // console.log(cube(5));        //125
        // console.log(cube(8));        //512


    //                                                           ,,,,,,,,,,,,,,,,,,,,, 
      
    // Practice 2 — generateGreeting style

    // # 3 generateFarewell


    // Create generateFarewell(word) — returns a function that takes a name and returns a goodbye message.
    // const sayBye = generateFarewell("Goodbye")
    // console.log(sayBye("Arslan"))   // "Goodbye, Arslan!"

    // const sayKhuda = generateFarewell("Khuda Hafiz")
    // console.log(sayKhuda("Umar"))  // "Khuda Hafiz, Umar!"
      

    const generateFarewell = (word) => {
         return (name) => {
             return  `${word}, ${name}`
         }
    }
    const sayBye = generateFarewell("GoodBy")
    // console.log(sayBye("Ahmad"));

    const saySlam = generateFarewell("Asslam-o-Alikum")
    // console.log(saySlam("Arslan"));  

    const saykhuda = generateFarewell("Khuda Hafiz")
    // console.log(saykhuda("Usman"));

    const saymorning = generateFarewell("Good Morning")
    // console.log(saymorning("Brother"));

    const sayEvening = generateFarewell("Good Night")
    // console.log(sayEvening("Sister"));
    
    //                                                   ,,,,,,,,,,,,,,,,,,

    // # 4 generateLabel


        // Create generateLabel(category) that returns a function. The returned function takes an item name and returns a label string.
        // const fruitLabel = generateLabel("Fruit")
        // console.log(fruitLabel("Mango"))   // "Fruit: Mango"

        // const cityLabel = generateLabel("City")
        // console.log(cityLabel("Lahore"))   // "City: Lahore"
     
        const generateLabel = (category) => {
            return (name) => {
                return `${category}, ${name}`
            }
        }
        const fruitLabel = generateLabel("Fruit")
        // console.log(fruitLabel("Mango"));             // Fruit, Mango

        const cityLabel = generateLabel("City")
        // console.log(cityLabel("Lahore"));               // City, Lahore

        const shopLable = generateLabel("Shop")
        // console.log(shopLable("Cloth"));           // Shop, Cloth

        //                                                ,,,,,,,,,,,,,,,,,,,,,,
   
        
    // Practice 3 — generateTax style


    // # 5 generateDiscount
    // Create generateDiscount(percent) that returns a function. The returned function takes an original price and returns an object with discount amount and finalPrice.
    // const tenOff = generateDiscount(10)
    // console.log(tenOff(200))
    // // { discount: 20, finalPrice: 180 }

    // const halfOff = generateDiscount(50)
    // console.log(halfOff(400))
    // // { discount: 200, finalPrice: 200 }

  const generateDiscount = (percent) => {
     return (price) => {
         const discount = price * (percent / 100)
        //  console.log(discount);
         
         const finalPrice = price - discount 
        //  console.log(finalPrice);
         
          return `${discount}, ${finalPrice}`
     }
  }
   const tenOff = generateDiscount(10)
//    console.log(tenOff(200));               // 20 , 180

   const halfOff = generateDiscount(50)
//    console.log(halfOff(400));               //  200 , 200

   const twentyOff = generateDiscount(20)
//    console.log(twentyOff(400));              // 80 , 320

   const seventyOff = generateDiscount(70)
//    console.log(seventyOff(400));              // 280, 120
   
   //                                     ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    // # generateShipping
    // Create generateShipping(ratePerKg). The returned function takes a weight in kg and returns { weight, shippingCost }.
    // const dhlRate = generateShipping(50)
    // console.log(dhlRate(3))
    // // { weight: 3, shippingCost: 150 }

    // const localRate = generateShipping(20)
    // console.log(localRate(5))
    // // { weight: 5, shippingCost: 100 }


    const generateShipping = (baiscePerKg , additionalPerKg, maxWereght ) => {
        return (weight) => {
               if(weight <= 1 && weight > 0 ){
                  return baiscePerKg
               }

               if(weight > 1 && weight <= maxWereght){
                const additionalWeight = Math.ceil(weight - 1)
                const total = (additionalWeight * additionalPerKg) + baiscePerKg  
                    return  total
               }

               return `Weight out of range.`

        // const shippingCost = weight * ratePerKg
        // return  `${weight}, ${shippingCost}`
        }
    } 
     const tcsRate = generateShipping(300 , 200 , 16)
     console.log(tcsRate(0.5));
     console.log(tcsRate(1));
     console.log(tcsRate(1.5));
     console.log(tcsRate(3));
    
     console.log(tcsRate(16));
     console.log(tcsRate(17 ));
     console.log(tcsRate(-17 ));  
     
     
      
//     const dhlRate = generateShipping(50)
//     console.log(dhlRate(3));                    // 3, 150

//     const localRate = generateShipping(20)
//     console.log(localRate(5));                 // 5 , 100

//    const tcsRate = generateShipping(300)
//    console.log(tcsRate(5));


 
  
  // OnEach : they are use the operator(sum , add , multply , divid) and return the value.these value give the onSuccess 

  // her value jo onEach say malte ha us ko one variable ma store keya jata ha . yo variable ek array banjate ha . or ya array onSuccess ko mill jate ha 

  // OnSuccess : each value return onEach store in array.This array give onSuccess
  
  //  callback:     pher yo  array callback ma jate ha (shaid)    

    const add = 7 + 9 
    // console.log(add);
    

  const callbackArray = (a , b , operator , callback) => {
      return () => {
          const operat = operator( a + b)
          return operat
      }
  }
  const ret = callbackArray(3 , 4 , add,  )
  console.log(ret());
  
      


   const number = [2, 3, 4, 5, 6, 7]
  const createTheObject = (Array , OnEach , OnSeceses , callback) => {
    return () => {
          
    }
  }


    
    
   











       //                                           ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    //  taxGenerator, 
    // generate US tax, 
    // generatePakTax
   

   const generatetext = (textPersentage) => {
     return (amount) => {
        const textamount = amount * (textPersentage / 100)
        // console.log(textamount);
        
        const grandTotal = amount + textamount
        // console.log(grandTotal);
        
       return `${textamount}, ${grandTotal}`          
     }
   }
   const  taxGenerator = generatetext(10) 
//    console.log(taxGenerator(200));          // 20, 220

   const generateUSText = generatetext(20)
//    console.log(generateUSText(300));        // 60, 360

   const generatePakTax = generatetext(30)
//    console.log(generatePakTax(150));        // 45, 195
   
   
   


    
    
    
        
        
        
        
        
        

        











