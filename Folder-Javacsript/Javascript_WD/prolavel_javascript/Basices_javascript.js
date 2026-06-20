//  name = "Hello Word";

// console.log(name);

    // Data Types   
 //    Primitive  
//     7 types  :    string , Number , Boolner , Null , Undefine , Symbol , BigInt
  
const  name = "Arslan";
const  age = 10;
const Boolner = false;
const Empate =  null;
const  section = undefined;

// const uniqueness 

const num = 8765432111234567987654
console.log(num);

const num1 = 987987987987678768768989n
console.log(typeof num1);


    // Reference (non-Primitive)

    // Array , object , function 

    const array = ["28",  "68", "23" , "90"]  //   it is array.
    console.log(array)
    console.log( typeof array);
    

const object = {
          name :Ali,
          age :78,
          email :"google.com"


}
console.log(object);

    const a = 20;
    const b = 30;
    
const MyFunction = function( a, b){
       
            return    a + b
             console.log(20 , 30);
              
            
}
console.log(20, 30);

    //  ==============================Operctation=================================================
//     == , === , + , - , * , <= , >= , != ,
// &&  , || , ! 

//     Example of loops 

for(let i = 1;i < 10 ;  i++ ){
     console.log(i);
     
}

//  Example      if , else if , else 
  const test = 12; 
  
  if (12 > 15 ){
      console.log("This condution is true");
      
  }  else if ( 10 < 20){
    console.log("This condution is normal");
  }     else{
      console.log("This condution is false");
      
  }


  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,              Access.js

   const age = 22;
       const hasCNIC = true;
       const inCNICExpired = false;

       if (age >= 18 && hasCNIC) {                // true
        // console.log("You can vote.");               // You can vote
        
       }

        if (age >= 18  && hasCNIC && inCNICExpired){
            console.log("Cannot applay for the job");
            
        }  

        // ,,,,,,,,,,,,,,   

        //                                                             Profile.js 


    //    With const fixed value
const userid = 10293;
const accountCreatedAt = "2024-01-15";
const countery = "Pakistan";


// With let Changeable value 
let currentScore = 0;


let isOnline = true;
// let isOnlines = false;
let lastLogn = "2024-06-15  10:15"
        
//    simulate a Scroe update
console.log("Score before: " , currentScore);        //0
    currentScore  = currentScore +10;
 
console.log("Scroe Then: ", currentScore);          // 10 
 currentScore  = currentScore +10;
 
console.log("Scroe After: ", currentScore);          // 20

    
// 
console.log("Online Status: ", isOnline);            // true
console.log("Onlines states: ", isOnlines);           //false


    //   Try to reassige the userId   
    //   userId = 9999
       
    //    const value  fixed hote ha . const value ko reassige ni karta . iss leya error ata ha .         userId = 9999 ma

// 


