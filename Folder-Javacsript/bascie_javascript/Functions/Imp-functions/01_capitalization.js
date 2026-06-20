       
       // # 2.1 Capitalize First Letter                  1

    // 1. Check if the text is empty.
    // 2. If it is empty, return an empty string.
    // 3. Take the first character and convert it to uppercase.
    // 4. Convert all remaining characters to lowercase.
    // 5. Combine them together.
    // 6. Return the formatted text.
    // **Example:** `"hELLO"` becomes `"Hello"`.

    function captialFirstLetter (string){
        if(string === "") return "empty string"
        let firstLetter = string[0].toUpperCase()
        let  remainletter = string.slice(1 , 3).toLowerCase()
        return firstLetter + remainletter   
    }
    // captialFirstLetter("hELLO") 
    // console.log(captialFirstLetter(""));
    // console.log(captialFirstLetter("paKIsTaN")); //                            Pakistan


    // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  Next    2

        // # 2.2 Convert Text to Title Case 
    //   // 1. Check if the text is empty.
    // 2. If it is empty, return an empty string.
    // 3. Split the text into individual words.
    // 4. Capitalize the first letter of each word.
    // 5. Join all words back together with spaces.
    // 6. Return the final text.

    // **Example:** `"hello world"` becomes `"Hello World"`.
     
  function textToTitle(string){
      if(string === "") return "empty string"
     let individual = string.split(" ")
     let capital = individual.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
     })
     return capital.join(" ")
  }
//   textToTitle()
  // console.log(textToTitle("hello word"));         //                          Hello Word
  

  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   Next      3 

        // # 2.3 Count Vowels

    // 1. Check if the text is empty.
    // 2. If it is empty, return 0.
    // 3. Create a list of vowels: A, E, I, O, U (both uppercase and lowercase).
    // 4. Start a counter at 0.
    // 5. Go through each character in the text.
    // 6. If the character is a vowel, increase the counter by 1.
    // 7. After checking all characters, return the counter.

    // **Example:** `"Hello"` contains 2 vowels.

    function  countVowels(string){
      if(!string || string.trim() === " "){ return " empty string"}

      const vowelsletter = "aeiouAEIOU"
      let count = 0 ;
      let vowelsFound = []

      for (char of string) {
            if(vowelsletter.includes(char)){
               count++
              vowelsFound.push(char) 
            }
        }
        return `Total value ${count},and voval found ${vowelsFound.join(" ")}.`
    }
    // countVowels()
    // console.log(countVowels("Hello Word"));
    // console.log(countVowels("Hello Word , Pakistan"));   //                      Ans


    // , ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,    Next   4 

      // # 2.4 Count Consonants

    // 1. Check if the text is empty.
    // 2. If it is empty, return 0.
    // 3. Start a counter at 0.
    // 4. Examine each character in the text.
    // 5. If the character is an alphabet letter and not a vowel:

    //    * Increase the counter by 1.
    // 6. Continue until all characters have been checked.
    // 7. Return the final count.

    // **Example:** `"Hello"` contains 3 consonants.
  
     function consonants (string){
       if(!string || string.trim() === ""){ return "empty string"}

       const consonannt = "qwrtyplkjhgfdszxcvbnmQWRTYPLKJHGFDSZXCVBNM"
       let count = 0;
       let consonantsFound = []

       for(let text of string){
          if(consonannt.includes(text)){
             count++
             consonantsFound.push(text)
          }
       }
       return `Total value ${count} and consonants Found ${consonantsFound}.`
     }
    //  console.log(consonants("hello word"))
    //  console.log(consonants("Hello Word, Pakistan")) //                               Ans 

     // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   Next  5
  

     // # 2.8 Truncate a String

    // 1. Check if the text is empty.
    // 2. If it is empty, return an empty string.
    // 3. Compare the text length with the maximum allowed length.
    // 4. If the text is already within the limit:

    //    * Return it unchanged.
    // 5. Otherwise:

    //    * Cut the text so there is enough space for the suffix.
    //    * Add the suffix (such as "...") at the end.
    // 6. Return the shortened text.

    // **Example:** `"JavaScript Programming"` might become `"JavaScript..."`.
           

    function  TuranCate(string , maximumlength){
      if(!string || string.trim() === " "){ return "empty string"}
     
        if(string.length <= maximumlength){
              return string
        }
        return string.slice(0 , maximumlength) + "..."
    }
    // console.log(TuranCate("javascript programing language", 15))

    // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,    Next    6

          
        // # 2.5 Reverse a String

    // 1. Check if the text is empty.
    // 2. If it is empty, return an empty string.
    // 3. Separate the text into individual characters.
    // 4. Reverse the order of those characters.
    // 5. Join them back together.
    // 6. Return the reversed text.

    // **Example:** `"hello"` becomes `"olleh"`.
   
    function reversedString (string){
       if(!string || string.trim() === " "){return "empty string"}
        
      // return string.split("").reverse().join("")
  //   
  //  
      let stor = []
      for(let char = string.lenght;char >= 0; char--){
        stor.push(char)
        //  return `${char}`
      }

     
      return stor
    }
    console.log(reversedString("Hello Word"));    //                            droW olleH
    //  reversedString(string)


    // ,,,,,,,,,,,,,,,,,,,,,,,,,,,   Next   7
    
       
    //          # 2.6 Check if Text is a Palindrome

    // 1. Check if the text is empty.
    // 2. If it is empty, return false.
    // 3. Convert all letters to lowercase.
    // 4. Remove spaces, punctuation, and special characters.
    // 5. Create a reversed version of the cleaned text.
    // 6. Compare the original cleaned text with the reversed text.
    // 7. If both are identical:

    //    * Return true.
    // 8. Otherwise:

    //    * Return false.

    //    *Example:** `"Madam"` is a palindrome because it reads the same forward and backward.
 
    function  chackingTest (string){
      if(!string || string.trim() === ""){return "false"}
     
        let convert = string.toLowerCase() 
        let removeSpace = convert.split(" ").join("")
        let reverse = removeSpace.split("").reverse().join("")

        return removeSpace === reverse
        // return {
        //   Convert : convert,
        //   RemoveSpace: removeSpace,
        //   Reverse: reverse 
        // }
    }
    // console.log(chackingTest( "madam "));     //                   true
    // console.log(chackingTest( " hello "));       //                   false

    
   // ,,,,,,,,,,,,,,,,,,,,,,,,,,   Next  8 

          
    // # 2.10 Generate Initials

    // 1. Check if the full name is empty.
    // 2. If it is empty, return an empty string.
    // 3. Split the name into separate words.
    // 4. Take the first letter from each word.
    // 5. Convert each letter to uppercase.
    // 6. Join all initials together.
    // 7. Return the result.

    // **Example:** `"Umar Farooq"` becomes `"UF"`.
     

    function generateInitials (name){
      if(!name || name.trim() === ""){return "enter your name"}
      
      let nameSeprat = name.split(" ")
      let firstLet = nameSeprat.map(word => {
           return word[0].toUpperCase()
        })

        return firstLet.join("")
      //  return {
      //    NameSeprat: nameSeprat,
      //    FirstLet:firstLet
      //  }
    } 
    generateInitials("Areeba Fatima")
    // console.log(generateInitials(""));
    // console.log(generateInitials("abeeha fatima sana hadia areeba nadeya"));

    //  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,    Next  9 
     
     
// ## 1.8 Convert Celsius to Fahrenheit

// 1. Take the temperature value in Celsius.
// 2. Multiply it by 9.
// 3. Divide the result by 5.
// 4. Add 32 to the result.
// 5. Return the final value as the temperature in Fahrenheit.

// **Example:** 0°C becomes 32°F.
 
  
  function celsiusToFahremheit (temperature){
   let temper = temperature
   let multiply = temper * 9
   let Divide = multiply / 5
   let add = Divide + 32

   return  add

  }
  //  console.log(celsiusToFahremheit(40));
    // step 2


          // function celsiusFahremheit (temperature){
          // return  (temperature *9 / 5) + 32
          // }
          // console.log(celsiusFahremheit(45));

  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,        Next 10 

     // ## 1.9 Convert Fahrenheit to Celsius

      // 1. Take the temperature value in Fahrenheit.
      // 2. Subtract 32 from it.
      // 3. Multiply the result by 5.
      // 4. Divide the result by 9.
      // 5. Round the answer to 2 decimal places.
      // 6. Return the final value as the temperature in Celsius.

      // **Example:** 68°F becomes 20°C.
   

      function fahrenheitToCelsius(temperatures){
        let Subtract = temperatures - 32
        let multiply = Subtract * 5
        let divide= multiply / 9;
        return  divide.toFixed(2 )
 
      }
      // console.log(fahrenheitToCelsius(32));    // 00.00
      // console.log(fahrenheitToCelsius(10));    // -12.22
      // console.log(fahrenheitToCelsius(60));    // 15.56
      // console.log(fahrenheitToCelsius(30));    // -1.11

      
//         ,,,,,,,,,,,,,,,,,,,,,,,,,,,,  next 


   