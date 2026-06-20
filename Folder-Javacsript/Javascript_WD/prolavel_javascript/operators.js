        // Operatores.js

        //  node      vs  browser

        // terminal 

        // js introduction  , HTML 

        // variables
        //  var , let , const 

        // Datatypes            //datatypes ka mutlab ha ka jo let , var or const ma write ha us ka.             datatypes kay ha yo , string, number , boolean , null , undefine , masay koi ha ? 

        // Types conversion
        //scope 
        //turtly and falsely 
        // Primitive and reference  types 
        // Operators
        // math Operators
        // +, -, *, /, **(iss ka mutlab pawer hota ha ), %

         let num1 = 10 ;
         let num2 = 50  ; 
    
         console.log(num1 + num2);        //60
         console.log(num2 - num1);       // 40 
         console.log(num1 * num2);         // 500
         console.log(num1 / num2);        // 0.2
         console.log(num1 ** num2);       // 1e+50
         console.log(num1 % num2);        //  10

   // increment and decrement operators 
               // num1 = 10
   num1  = num1 +1;               
   console.log(num1);              // 11
                // num2 = 50 
   num2 = num2 + 3;
   console.log(num2);               // 53
                                               //    if num1 =50       then 
                                     // num1 = num1 + 5      AND     num1 += 5 ; 
                                        //   both give same anser
            // num1 = 11
        num1 += 5;
        console.log(num1);         //  16
        // num1 =16
        num1 -= 2;  
        console.log(num1);      // 14

             // num1 14 
        num1 /= 2;
        console.log(num1);             // 7
          
               
               // num2 = 53
        num2 *= 2;
        console.log(num2);       // 106
                //   We same use it. 
        //     num2 = 106 
            num2 ++;
            console.log(num2);

            for (let i=1; i <10 ; i++){ }
            

         




        //                          Next 
            //    Pre and post operators
        // post operators
        let number  = 20; 
                // use in colsole ,in post operators 
                   console.log( "number : ", number);             // 20
                   console.log("number ++ : " , number++);       // first print 20 , after update
                   console.log("number after : ", number);         // 21
        let numbers = 30;                
         // Pre operators
               // use in console , pre operators
               console.log("numbers : ", numbers);              // 30
               console.log("--numbers :",  --numbers);    // first update 29, after print 
               console.log("after numbers :", numbers );          // 29
               
                 //    Next

                 //  pahala rea1 ka result  //  0.300000000000000004tha 
                 //    .toFixed() say iss ka result 0.3 ho gaya

          const rea1 = Number((0.1 + 0.2 ).toFixed(2))
           console.log(rea1);                   // 0.3                      
          const  rea2 = 0.3;

                 console.log(rea1 === rea2);                //  true

                 
            let ourNum = 21.987654324
            console.log(Math.floor(ourNum));               // 21 
            console.log(Math.ceil(ourNum));                  //22

                        
            // Ternery operators
            // Formula:         condution ? ture : false
          console.log("20 is even?", (20 % 2) === 0);               //   true
          console.log("21 is even?", (21 % 2) === 0);            //false
          console.log("22 is even?", ( 22 % 2) === 0);              //    true
          console.log("23 is even?", (23 % 2) === 0);            // false
           
             //    Example of ternery operators
     let loggedin = false ;
     // login button , text value ,if loggedin is true , logged true ,otherwise logged false         
           let btntext = loggedin ? "logged true" : "logged is false";
           console.log(btntext);                   //logged is false
           
      

               //  Logical operator
        //    AND && , OR || , NOT !              
           
  //   AND && operator, give the value true, if all condation is true.
  console.log( ("true AND true"), true && true);               // true
  console.log( ("false AND true"), false && true);              // false
  console.log( ("true AND false"), true && false);            // false
  console.log( ("false AND false"), false && false );         // false

    // OR || operator , give the value true , if one condation is true.
      console.log(("true OR true : "), true || true);            // true
      console.log(("true OR false: "), true || false);            // true
      console.log(("false OR true: "), false || true);            //true
      console.log(("false OR false "), false || false );           // false
        
      console.log("", 1 < 2 || 3 === "3");             // true

      

    // NOT ! operator ,   convert the boolean value 

      console.log("NOT true :", !true);            //false
      console.log("NOT false :", !false);             // ture
      console.log("NOT null :", !null);               //true
      console.log("NOT undefined :", !undefined);         //true
      console.log("NOT 0 :", !0 );                      //true

      
         if (!false){
          console.log("This conduction is run.");
          
         }else {
            console.log("This conduction is not run. " );
            
         }


         if (!0){
            console.log("it is run.");
            
         }else{
            console.log("it is not run.");
            
         }
      


         if(!undefined){
            console.log("It is defined.");
            
         } else{
            console.log("it is undefined.");
            
         }

          let age = 10 ;
          let hasIdCard = true; 
          let hasLicence = true;
          let hasDegree = false ;
          let hasRealExperience = true;
              
       //check if the person can  =    age , vote , canjop 
           

       const canVote = age >= 18  && hasIdCard;
        console.log(canVote);
      
      //age must be more then 16 , for hasLicence
        
       const canDrive =  age >= 16 && hasLicence;
        console.log(canDrive);                                // false

       const canApplyOnJop = (age >= 18 && hasIdCard) &&( hasDegree || hasRealExperience);      
       console.log(canApplyOnJop  );
              


      //  nullish operators                        , || , ??
      // condation || Expereation 

      const data = { age :10, name : "asdfg"}
      console.log(data);

  
        const hasData = data || "no data";
        console.log(hasData);

            //There are use in react.
             // &&   
             // ??
      const count = {};
      const hascount = count ?? "not count"  
      console.log(hascount);
  
      //       || , &&     nullish operators
      //       ? :         ternary operators
      //       ?.          optisonal changing