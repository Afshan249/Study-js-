// Declearation 
// Variable             var , let  , const
// Data types          2 types :            Primitive  OR  Refecence (non-Primitive)
// Primitive    
// 7 types  :     string , number , Boolner , null , Undefine , symbol , BigInt
 let firstname = "Arslan";
 console.log(firstname.length);
 console.log(firstname);

 let email ="Arslan@gooloe.com"
 console.log(email);
 console.log(email.length);
 console.log(email.toUpperCase);
 console.log(email.toLowerCase);

//  Example :

// index start    0,     
// number start   1
// Refecence  (non-Primitine)
// Array , Object , Function 
let star = [1, 2, 3, 4,]      // array

let star1 = {
    name: "GoodName"         //  object 
}

// const funcrton = fun(strong)= {
//           name ="Pathon"
// }                                 //Function 
// console.log("function");






// truely  OR    falsely

let nam = "Javascript";
let work = "all webpage"

// console.log(`My good name ${nam}. I'm control the ${work}.`);

// console.log( "2 + 6" ,      `${2 + 6}`)
// console.log( "5 - 10" ,     `${5 - 10}`);

// console.log("1"+ 2);
// console.log(2 +"3");
// console.log(1 + 5 + "1");
// console.log( 5 * 5 + "9");

let str1 = "usman"
console.log(str1);
console.log(typeof str1);


let result = Boolean(str1)
console.log(result);
console.log(typeof result);

let age = 20;
console.log(String(age));
console.log(typeof age);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> next

//       Difference between Primitive and Reference ( non-Primitive)
// Primitive :     We use just "let" in primitive .

let Name1 = ["Afshan"]
let Name2 = Name1                          //return value 
// console.log(Name1);                           
// console.log(Name2);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< next

// Reference  :      we use just "const" in reference
// 3 Types of Reference :      Array , function , object 


// Array:


const primitive = ["String"]
const Primitive1 = primitive         // 
// console.log(primitive);
// console.log(Primitive1);


Primitive1.push("Added in array. with push ");
// console.log(Primitive1);
// console.log(primitive);
primitive.push("")

let Array = ["20", "40", "60", "80"];

let Array1 = Array;

//     console.log(Array);
//     console.log(Array1);
// Array :
//Ya thak ha     ( muja iss ke samaj be a gaye ha )
Array.push("100", "120", "140")
//     console.log(Array1);
//     console.log(Array);

Array1.push("10", "30", "50")
//     console.log(Array1);
//     console.log(Array);






// function : 
const great = function (found) {
    return {
        name: "ali",
        email: " Arslan@google.com"
    };
};
    console.log(great());

    const great_1 = great
    console.log(great_1())


    function sayHi() {
        console.log("Arslan");

    }
    let a = sayHi;
    let b = a;

    //    console.log(a);                        //function
    //    console.log(b);
    //                                           //  Ya thak ha 
    b.newValue = "Hello";
    //    console.log(a);
    //    console.log(b);

    a.nextValue = "Hello Word";
    //    console.log(a);
    //    console.log(b);



    //  Object  :  
    let user1 = {
        name: "Ali"
    };
    let user2 = user1

    // console.log(user1);
    // console.log(user2);                                //Object
    //  Ya thak ha  
    user1.name = "Ahmad";
    // console.log(user1.name);
    // console.log(user2.name);




    let Start_1 = {
        name: "javasctipt",
        email: "Arslan@malik.com"
    }

    let Start_2 = Start_1;
    //   console.log(Start_1);
    //    console.log(Start_2);                      //Object
    //Ya thak ha     (muja iss ke samaj a gaye ha )
    Start_2.email = "Aralan@arslan.com"
    //        console.log(Start_1.email);
    //        console.log(Start_2.email);

    Start_1.name = "Fatima";
//        console.log(Start_1);
//        console.log(Start_2);












