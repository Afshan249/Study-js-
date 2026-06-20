//    Data Types:   
// Variable  Declear with Data Types

const  name_of_Student = "Arslan";
console.log(name_of_Student);     // Arslan 
console.log(typeof name_of_Student);       // String 


const  age_of_Student = 15;
console.log(age_of_Student);      // 15 
console.log(typeof age_of_Student);     // Number


const  java_Student = false;
console.log(java_Student);       // false 
console.log(typeof java_Student);        //Boolean

 
let   no_accessable;
console.log(no_accessable);        // undefined
console.log(typeof no_accessable);             // undefined


const temps_of_drop = null;
console.log(temps_of_drop);         // null
console.log(typeof temps_of_drop);         // Object  (typeof null is "object " is the main bug in js.)


// const nice_progress = unique;
// console.log(nice_progress);

const favoritefrood = [];            
console.log(favoritefrood);          // []  
console.log(typeof favoritefrood);         // Object 


const over_Self = {};               
console.log(over_Self);              // {}
console.log(typeof over_Self);            // Object 

     
    
//   Which typeof result was surprising? Why do you think it work that way?
//    Ans:    Common surprsing result:      typeof null   // object
//     Ya javascript ka "old bug " ha 


    
//    The surprising result of "typeof name" which return "object" .
//    it works this way because of a historical bug in javscript
