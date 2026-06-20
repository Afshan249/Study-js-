     // # 3.1 Validate an Email Address

// 1. Check if the email is empty.
// 2. If it is empty, return false.
// 3. Find the position of the "@" symbol.
// 4. Find the position of the last "." symbol.
// 5. Ensure:

//    * The "@" symbol exists.
//    * The "." comes after the "@" symbol.
//    * There is at least one character after the last ".".
// 6. If all conditions are satisfied:

//    * Return true.
// 7. Otherwise:

//    * Return false.
 
        function vaildateEmail(email){
          if(!email  || email.trim() === ""){return false}
          let isSing = email.index("@")
          let dotSing = email.index(".")
          return {
            IsSing : isSing,
            DotSing: dotSing
          }
          
          } 
          vaildateEmail("nhuredsw.kmijn")
        console.log(vaildateEmail("nhuredsw.kmijn"));
