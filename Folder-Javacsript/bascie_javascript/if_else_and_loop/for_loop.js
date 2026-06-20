       // for_loop.js

   for (let table = 1; table <= 10; table++) {
      //    console.log(2*table);
         
   }

   for (let tabl = 10 ; tabl >= 1; tabl--){
      //    console.log(2*tabl)
   }

   for(let i = 10 ; i >= 1 ; i--){
         //  console.log(i);    // 10 , 9, 8, 7, 6, 5, 4, 3, 2, 1,
            
   }

   for(let j = 0 ; j <= 10 ; j++){
         //  console.log(j);       // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            
   }

   for (let u = 1; u <= 10; u++) {
      // console.log("outer side:   ,,,,,,,,,,,,,,,,,,,,,,,,,,,, ",u);
      
      for (let p = 1; p <= 20; p++) {
         // console.log("iner side: ", p);
      }
   }

 // ,,,,,,,,,,,,,,,,,,,,,      

      for (let l = 1; l <= 4; l++) {
         let text = "";
         for (let m = 1; m <= l; m++) {
               text += "*@* "
         }
         // console.log(text);         
         
      }
          //                    ,,,,,,,,,,,,,,,,,


   for (let a = 1; a <= 8; a++) {
      let text = "";
      for (let b = 1; b <= 6; b++) {
            text += "*@* "
      }
      // console.log(text);            //  squar 
      
   }       

   for (let c = 1; c <= 10 ; c++) {
      //  console.log(c);
      for (let v = 1; v <= 10; v++) {
         //   console.log(c ,"*" , v ,"=" , c*v);
      }
   }
      // ,,,,,,,,,,,,,,,,,,,,,,,,,
    
   // 2D loop
   let manager = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
   ]

   for (let s = 0; s < manager.length; s++) {
      for (let t = 0; t < manager[s].length; t++) {
         //  console.log(manager[s][t]);
      }   
   }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,                  seprat even and odd
       
    let Even = [];
    let Odd = [];

   for (let f = 0 ; f <= 10 ; f++){
      // console.log(f); 
      // console.log(f % 2);   
      if(f % 2 === 0 ){
         //  console.log(f);
         Even.push(f)
         
      }
      if(f % 2 !== 0){
         // console.log(f);
         Odd.push(f)
      }
   }
   // console.log(`Even:  ${Even}`)
   // console.log(`Odd: ${Odd}`)

   // console.log(`Even:`, Even)
   // console.log(`Odd:`, Odd)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      
   for(let g = 15 ; g >= 0 ; g--){
      // console.log(g);   
   }
   // console.log(g);          // give error
      
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  

// dice , roll and count   play it 

   let roll = 0;
   let count = 0;

   while(roll !== 6){
      roll = Math.floor(Math.random() * 6) + 1
      count++
      //   console.log("Roll: ",roll, "Count: ", count );
      if(roll === 6){
         //  console.log(roll);
      //  console.log("Roll: ",roll, "Count: ", count );
      }
   }

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   Question 1

   let fruits = ["apple", "mango", "banana", "orange", "grape"];
// for...of se har fruit print karo
    for (let fruit of fruits){
      // console.log(fruit)
    }
  
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   Question 2

   let numbers = [10, 20, 30, 40, 50];
   let total = 0;
// for...of se sab numbers add karo
   for(let num of numbers){
       total +=  num   
   }
   // console.log(total);    // 150
   
     
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,      Question 3

    let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for...of se print karo — but sirf jinme "a" ho
// Output: Karachi, Lahore, Islamabad, Peshawar

   for(let a of cities){
      // console.log(a);       // Output: Karachi, Lahore, Islamabad, Peshawar
   }

  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,      Question 4     
 
   let animals = ["cat", "dog", "lion", "tiger"];
   let index = 0
// for...in se index aur animal dono print karo

   for(let animal in animals){
      index++
      //  console.log(`Index: ${index}, animals: ${animals[animal]}`);    
      
   }       // Output
//                         Index: 1 and animals: cat
//                         Index: 2 and animals: dog
//                         Index: 3 and animals: lion
//                         Index: 4 and animals: tiger


// ,,,,,,,,,,,,,,,,,,,,,,,  Question 5

   let person = {
      name: "Ali",
      age: 20,
      city: "Karachi"
   };
   // for...in se har key aur value print karo

   for(let key in person){
      // console.log(`${key}:   ${person[key]} `)      
   }
 //              Output
//                   name:   Ali 
//                   age:   20 
//                   city:   Karachi

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   Question 6

   let cart = {
      apple: 50,
      milk: 120,
      bread: 80,
      eggs: 200
   };
   // for...in se print karo
   for(let key in cart){
      // console.log(`${key}:   cost ${cart[key]}`);    
   }
   //               Output
//                            apple:   cost 50
//                            milk:   cost 120
//                            bread:   cost 80
//                            eggs:   cost 200

// ,,,,,,,,,,,,,,,,,,,,,,  Question 7

   let students = ["Ali", "Sara", "Ahmed", "Zara"];

// for...of se name print karo
// for...in se index ke saath print karo
      for(let value of students){
         console.log(value)
      }
         //     Output 
         //             Ali
         //             Sara
         //             Ahmed
         //             Zara

      for(let key in students){
         console.log(`${key}: ${students[key]}`)   
      }    
     //        Output 
   //                   1: Ali
   //                   2: Sara
   //                   3: Ahmed
   //                   4: Zara


   //,,,,,,,,,,,,,,,,,,,,   Question 8
       let store = {
         shirts: 10,
         pants: 5,
         shoes: 8
      };
      let items = ["shirts", "pants", "shoes"];
      // for...in se store ki values print karo
      // for...of se items list print karo


      // for(value of store){
      //       console.log(value)
      // }
      for(list in items){
         console.log(items.list);
      }

      //  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,     Question 9

        let number = [1, 2, 3, 4, 5, 6, 7, 8];
        let Evens = [];
        let Odds = [];
      // for...in se index nikalo
      // for...of se check karo even hai ya odd
      
      for(let val in number){
          console.log(`${val}: ${number[val]}`);
      }

      for(let numb of number){
           if(numb % 2 === 0){
              Evens.push(numb)
           }
           if(numb % 2 !== 0){
              Odds.push(numb)
           }
      }
      console.log("Even:  ", Evens);
      console.log("Odd:  ", Odds);