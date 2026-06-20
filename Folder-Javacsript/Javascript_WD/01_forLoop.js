           // 01_forLoop.js 


    for(let i = 1 ; i <= 10 ; i++){
     //     console.log(i);   
         
    }
     //                                                        <<<     next
   for(let i = 1 ; i <= 10 ; i++){
     //    console.log(3*i);
        
    }

       //                                                       <<<     next
    for(let i = 10 ; i >= 1 ; i--){
     //     console.log(3 * i);
     }

     // .......................                          One time ten table printed
            
     for(let tables = 1 ; tables <= 10 ; tables++ ){
      //  console.log(tables);
         for (let table = 1 ; table <= 10 ; table++) {
        //  console.log(table , "*" , tables , "=", table*tables);
        }
      }

      //                                                ,,,,,,,,,,,,,,,,,,,,,,,,,,   Next


//  Create a file called analyzer.js
// Declare an array called scores with at least 8 mixed numbers (e.g., [78, 92, 45, 88, 60, 73, 100, 12])
// Using a for loop: calculate and log the SUM of all scores
// Using a for loop (or the same one): calculate and log the AVERAGE
// Using a for loop: find and log the LARGEST value
// Using a for loop: find and log the SMALLEST value
// Using a for loop + continue: count how many scores are PASSING (>= 60) and log the count

// Using a for...of loop: count how many scores are 100 (perfect), log result

// Wrap each calculation in a clearly named function (getSum, getAverage, getMax, getMin, countPassing, countPerfect) that takes the array as a parameter


       const scores = ["78" , "92", "42" , "88" , "60", "73" , "12" , "100" ]

        function getsum() {
            let sum = 0
            for (let sumnumbers = 0; sumnumbers < scores.length; sumnumbers++) {
              sum = sum + Number(scores[sumnumbers])
              
            }
            return sum;
        }
        console.log(getsum());                //                    545

     //                                                        ,,,,,,,,,,,,,,,,,,,,,,,,
        function getAverage(arr){
          let sum = getsum(arr)
          let count = arr.length
          return sum / count
        }
        console.log(getAverage(scores));       //                  68.125
      
   //                                                         ,,,,,,,,,,,,,,,,,,,,,,,,,,,
    function getBigestvalue(arr){
        let max = arr[0]
        for (let our = 0; our < arr.length; our++) {
          if (Number(arr[our] > Number(max))) {
              max = Number(arr[our])          
          }
        }
        return max                              //                     100
    } 
    console.log(getBigestvalue(scores));

         //                                                   ,,,,,,,,,,,,,,,,,,,,,,,,
    function getsmallest (arr){
      let min = arr[0]
      for (let p = 0; p < arr.length; p++) {
         if (Number(arr[p]) < Number(min) ) {
             min = Number (arr[p])            //                       12
         }
     }
      return min
    }
    console.log(getsmallest(scores));

      //                                                              ,,,,,,,,,,,,,,,,,,,,
   
      // function getPassing (arr){
      //    let pass = [arr]
      //   for (let x = 0; x < arr.length; x++) {
          
      //      if (Number(arr[x]) >= Number(60)) {
      //         pass.push(Number(arr[x]))
      //      }
      //   }
      //   return pass      //     [ 78 , 92 , 88 , 60, 73 , 100]
      // }
      // console.log(getPassing(scores));
      
        //                                                                ,,,,,,,,,,,,,,,,,,,,,
      function  getPassing(arr){
         let count = 0
         for (let i = 0; i < arr.length; i++) {
           if (Number(arr[i] < 60)) {
               continue;
           }
           count = count + 1
         }
         return count
      }
      console.log(getPassing(scores));
      
      //                                                         ,,,,,,,,,,,,,,,,,
      
      // function getProfect (){
      //   let profect = []
      //   for (const element of profect) {
      //            console.log(element);
                 
      //   }
      //   return profect
      // }
    
      // console.log(getProfect());
      

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


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
     

    




//   

for (let f = 0 ; f <= 10 ; f++){
   // console.log(f);
   
} 
        //                                                     Dice (lodo ka point)
  // dice , role , got  6  
  let roll = 0;
  let count = 0;
  while(roll !== 6){
    roll = Math.floor(Math.random() * 6 ) + 1;
    count++;
   //  console.log("Roll", roll , "Count", count);
    
  }
//   console.log("Stop");

  // ,,,,,,,,,,,,,,,,,,,,,,,,      Question 1 

   //   A traffic light stays red until it turns green — write a
   //  while loop for this situation. 
        let trafficLight = "red";

     while(trafficLight !== "green"){
        
        if(trafficLight === "red"){
          trafficLight = "green"
         } 
         console.log(trafficLight);   //                              green
         //   
       }
       console.log("Light is green ____ Go.");



     //                                  Next
       //     An ATM does not lock until the wrong PIN is entered 3 times — how will you make this with a while loop?

         let creatPIN = "12";
         let enterPIN = "00";
         let attempet = 0;

         while (creatPIN !== enterPIN){
            attempet++
             console.log(attempet);
         if(attempet === 3){
              console.log("ATM Lock");
             break; 
         }       
         }
         console.log("cannot use the PIN");
         

         //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

      //  A student keeps studying until he passes the exam — how will you write 
      // this in a while loop?
      
        let passed = false;

        while(passed === false){
              console.log("continue study");
              passed = true
        }
        console.log("student is passed");
        

      // ,,,,,,,,,,,,,,,,,,,,,,,,,    Good Question 
          

      //  A shop stays open as long as customers are coming — make a while loop for this.
       
         let shop = "open";
         let customers = 0;

         while(shop === "open"){
         customers++;
            console.log("customers: " , customers);
            if(customers === 5){
                shop = "closed" 
            }
            
        }
        console.log("Shop is closed.");
        
   // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,     Good Question

      //  Water keeps boiling until the temperature reaches 100 — simulate 
      // this with a while loop. 

   let water = "boiling";
   let temperature = 0;

   while(water ==="boiling"){
      temperature++;
   console.log(temperature);
      if(temperature === 100){
          water = "boiled"
      }
   }
   console.log("water is boiling.");
   
   
    
    
        
        
