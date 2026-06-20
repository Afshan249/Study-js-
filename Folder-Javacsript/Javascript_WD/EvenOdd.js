        // EvenOdd.js
       
        function isEven (num1){
          if(num1 % 2 === 0){
             return `Number ${num1} is even.`
          }else{
            return `Number ${num1} is not even.`
          }
        }
        // console.log(isEven(3));   // Number 3 is not even.
        // console.log(isEven(2));   //  Number 2 is even.
           
         // <<<<<<<<<<<<<<<<<<<<<<    Next 
     
     function isOdd(num){
        if(num % 2 !== 0){
           return `Number ${num} is odd.`
        }else{
         return `Number ${num} is not odd.`   
        }
     }
    //  console.log(isOdd(4));    // Number 4 is not odd.
    //  console.log(isOdd(3));    // Number 3 is odd.
     

   // <<<<<<<<<<<<<<<<<<<<<<   Next 

   
  // function isEvenOrOdd(num2){
  //   let result = []
  //   if(num2 % 2 === 0){
  //     result.push(`Number ${num2} is even.`)
  //   }else{
  //     result.push(`Number ${num2} is even.`)
  //   }
  //  return result

  //   if(num2 % 2 !== 0){
  //    result.push(`Number ${num2} is odd.`)
  //   }else{
  //       result.push(`Number ${num2} is not odd.`)
  //   }
  //   return result
  // }
  // console.log(isEvenOrOdd(22));
  
   // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< next

   function isEvenOrOdd(number){
       let result = []
      if(number % 2 === 0){
        result.push(`Number ${number} is even.`)
        result.push(`Number ${number} is not odd.`)
      } else{
        result.push(`Number ${number} is not even.`)
        result.push(`Number ${number} is odd.`)
      }
      return result
   }
   console.log(isEvenOrOdd(88));  // [ 'Number 88 is even.', 'Number 88 is not odd.' ]
   console.log(isEvenOrOdd(87));  // [ 'Number 87 is not even.', 'Number 87 is odd.' ]

   // <<<<<<<<<<<<<<<<<<<    Next

   function gradeOfStudentmarks(name ,number){
    if(number > 90){
      return `${name} number is ${number} and it's grade is A.  "Excellent"`
    }
    if(number > 80){
      return `${name} number is ${number} and it's grade is B.    "Very Good"`
    }
    if(number > 70){
      return `${name} number is ${number} and it's grade is C.    "Very Good"`
    }
    if(number > 60){
     return `${name} number is ${number} and it's grade is D.     "Good"`
    }
    if(number <= 60){
     return `${name} number is ${number} and it's is Fail.`
    }
    
   }
   console.log(gradeOfStudentmarks("Arslan",99)); // Arslan number is 97 and it's grade is A.  "Excellent"
   console.log(gradeOfStudentmarks("Ali", 88));  // Ali number is 88 and it's grade is B.    "Very Good"
   console.log(gradeOfStudentmarks("Ali", 77)); // Ali number is 77 and it's grade is C.    "Very Good"
   console.log(gradeOfStudentmarks("Ali", 66)); // Ali number is 66 and it's grade is D.     "Good"
   console.log(gradeOfStudentmarks("Ali", 60)); // Ali number is 60 and it's is Fail.
   console.log(gradeOfStudentmarks("Ali", 55)); // Ali number is 55 and it's is Fail.
   
   // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   Next 
     