    //          toolkit.js

    // 1 : Create a file called toolkit.js
    // 2 : Implement each function below TWICE: once as a function declaration and once as arrow    function. Name the arrow versions with a '2' suffix (e.g., addArrow).

    // 3 : greet(name) — returns 'Hello, <name>!' with a default of 'Guest'
    // 4 : add(a, b) — returns a + b
    // 5 :  isEven(n) — returns true/false
    // 6 : max(a, b) — returns the larger of two numbers (without using Math.max)
    // 7 :  describeNumber(n) — returns 'positive', 'negative', or 'zero'
    // 8 :  Call each function at least twice with different inputs and log the results. Organize logs with comment headings.
    
    // Regular function 
    function greet(name ="Guest"){
        return  "Hello" + " " + name + "!"
    }
    console.log(greet("Arslan"));           // Hello Arslan
    console.log(greet("Brother"));           // Hello Brother


    // Arrow function 
    const greetArrow = (name) => { return "Hello" + " " + name}
    console.log(greetArrow("Dear"));          // Hello Dear
    console.log(greetArrow("Frinds"));          // Hello Frinds


//                                        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   Add (a, b)
    //  added two numbers with (Regular Function)

    function addTwoNumbers(a , b){
      return a + b
    }
    console.log(addTwoNumbers(20 , 50));    // 70
    console.log(addTwoNumbers(90 , 20));    // 110

    // added two numbers with (Arrow Function)

    const addedNumberArrow = (a , b) => {
        return a + b
    }
    console.log(addedNumberArrow(60 , 30));     // 90
    console.log(addedNumberArrow(30 , 10));     // 40

    //                                   ,,,,,,,,,,,,,,,,,,,,,,    Regular Function (isEven(n))
   
   function isEven (number){
     if(number % 2 === 0){
        return true
     }

     if(number % 2 !== 0){
        return false
     }
   }
   console.log(isEven(21));
   

   //   Arrow Function (isEven)

    const isEvenArrow = (number) => {
      if(number % 2 === 0){
        return true
      }

      if(number % 2 !== 0){
        return false
      }
    }
    console.log(isEvenArrow(10));


   //                                  ,,,,,,,,,,,,,,,,,,  Regular Function (max())
   function maxNum(a , b){
     if(a > b){
       return a
     } else {
      return b
     }
   }
   console.log(maxNum(10 , 60));

   // Arrow Function (max())
   const maxNumArrow = (a , b) => {
        if(a > b){
          return a
        } else {
          return b
        }
       }
   console.log(maxNumArrow(90 , 120));
   
   


   //                                                   ,,,,,,,,,,,,,,   describeNumber
    // Regular Function 

    function describeNum(number){
        if(number > 0){return "positive"}
        if(number < 0){return "Negative"}
        if(number === 0){ return "Zero"}
    }
    describeNum()
    console.log(describeNum(9));              // Positive
    
    //  Arrow Function 

    const describeNumArrow = (number) => {
      if(number > 0){return "positive"}
      if(number < 0){return "Negative"}
      if(number === 0){return "Zero"}
    }
    console.log(describeNumArrow(-100));       // Negative
    



    


