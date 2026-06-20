    
         // getinitial 
      //  i have creat a function that revers user name that is mostly two words combintion and then  get the first char of each word join them and uppercase and then return
      // creatre two varabales ,
      // split the full name on the basis of space
      // store them in array , 
      // create a variable call initial 
      // Ietureat over the array 
      // get the first element and the cancatnat in to the initial 
      // return the variable in the uppercase

   function getinitial(fullname){
      let fullNameArray = fullname.split(" ");
      let initials = ""
      for(word of fullNameArray){
         initials= initials + word[0].toUpperCase() + " "
         }
      return initials
   }
   console.log(getinitial("salam aziz"));     //   S A



   // ,,,,,,,,,,,,,,,,,,,,,

   function greating (name){
     let fullnam = name.split(" ")
     let initial = ""
     for(write of fullnam){
      initial = initial + write[0].toUpperCase() + " "
     }
     return initial
   }
   console.log(greating("arslan mubeen"));

   //     ,,,,,,,,,,,,,,,,,,
    // creat a function return the fullnam   
    // just return the first letter of fullnam with split and both in uppercase

    function studentName(studentFullName){
      let studentName = studentFullName.split(" ")
      let initial = ""
      for(work of studentName){
        initial = initial + work[0].toUpperCase() + " "
      }
      return initial
    }
    console.log(studentName("areeba"));
    
//     ,,,,,,,,,,,,,,,,,,   reverce
// create a function return the reverce word with for loop

   function  reverceFullName(reverceName){         //???????????????????????????????????????????
       let initials = ""
      for(let a = reverceName.length - 1 ; a >= 0 ; a--){
         let current = reverceName[a]
         // console.log(a);
         
         initials = initials + current
         console.log(initials);
         
     }
     let result = initials === reverceName
   //   return result
   } 
   console.log(reverceFullName("write"));
   

   

   //   ,,,,,,,,,,,,,,,,,,,  Next   
  

   // create a function convert the celsius into the fahrenhiet 
   // F = (c * 9/5) + 32
   //  
   function celsiusToFahremheit(temC){
       
      let tempF = (temC * 9/5) + 32
       return tempF
   }
   // console.log(celsiusToFahremheit(-40));     //  104



   // ,,,,,,,,,,,,, 

      // create a function convert the  fahrenhiet into the  celsius 
      // C = (F - 32) * 5/9

      function fahrenheitToCelsius(tempF){
         let tempC = (tempF - 32) * 5/9
         return tempC
      }
      // console.log(fahrenheitToCelsius(92));        

   // ,,,,,,,,,,,,,,,,,,,

       //  print the stare pattren ladder shap of given height
       // create a function make the stare stap by stap in for loop


       function counter (n){

        for(let i = 1; i <= n; i++){
         console.log("*".repeat(i));
         }

       }
      //  console.log(counter(5));
       
      

   // ,,,,,,,,,  

   function count(num){
    
      for(let o = 1 ; o <= 20; o++){
        console.log("*".repeat(o));
        
      }
   }
   // console.log(count(10));
   

      ///             ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 
   
     



      ///     spread operator  (Arrow Function )

      const sum = (...parameter) => {
          for(let a = 0; a < parameter.length; a++){
              parameter[a]
          }
      }
      console.log(9, 9, 9, 9, 9, 9, 9, 9);
      


      // Regular Function 

      function regular(){
         for(let i = 0 ; i < arguments.length; i++){
            arguments[i]
         }
      }
      console.log(8, 8, 8, 7, 7, 7, 7, 7);
      
