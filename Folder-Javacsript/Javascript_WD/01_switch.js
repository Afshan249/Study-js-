    //    01_switch.js   


    
 
// month days calculator 

// for january 31, feb 28 if non leap , 29 if leap year,, march : 30,  an dso on

// leap year finder funciton; 

// function isLeapYear(year) {
//     if((year % 4 === 0 && year % 100 !== 0  ) || year % 400 === 0) {
//         return `${year} is a Leap year, this year February has 29 days`
//     } else {
//         return `${year} is not a leap year, Feb has 28 days`
//     }
// }


     //  365 days , ~ 6 hours   
 
            //   31 days
     // jan , , march , , may , ,july ,augst , october, , december            

            // 30  days
     // april , jun , september , november 
  
          // 28 / 29 days
     // february  
                                                                              //Solve
            function leapYear(year){
            if((year % 4 ===0 && year % 100 !== 0)|| year % 400 === 0){
                return true
            }
            return false
           }
        //    console.log(leapYear(2022));
           


         function isLeapYear(month, year){
            let years 
            switch(month){
                case"january": 
                case"march":
                case"may":
                case"july":
                case"august":
                case"october":
                case"december":
                    years = `In ${month} is 31 days. `
                    break
                case"april":
                case"june":
                case"september":
                case"november":
                    years = `In ${month} is 30 days.`
                    break 
                case"february":
                    years = leapYear(year)
                        ? `In ${month} is 29 days.`
                        : `In ${month} is 28 days.`;
                    break
                default :
                    years = `No month there are avaliable.`    
            }
            return years;
        }
         console.log(isLeapYear("february", 2024));


                         //   <<<<<<<<<<<    NEXT    >>>>>>>>>>>>
             
// print status message based on status code,
// for 200 , 201, okey
// for 301, 302, print resource moved
// for 400, bad request
// 404, not found,
// 401 , unauthorize and so on

// file type categorizations,

// video file has these extension: .mp4, av1, mkv.
// images; jpg, jpeg, png
// audio : mp3, wav, flac
// doc: docx, doc,
// pdf: pdf
// code: .js, .tst. .py. .go
         
                                                                        //    Solve
   function findCategorizations(status){
    let findCategory
    switch(status){
        case ".jpg":
        case ".jpeg":
        case ".png":
             findCategory = "This is image file."
             break
        case ".docx":
        case ".doc":
            findCategory = "This is doc file."
            break
        case ".pdf":
            findCategory = "This is pdf file." 
            break  
        case ".js":
        case ".tst":
        case ".py":
        case ".go":
            findCategory = "This is code file."  
            break
        default:
            findCategory = "There are no file."              

    }
    return findCategory
   } 
   console.log(findCategorizations(".go"));
                                            
                               
                      //   <<<<<<<<<<<    NEXT    >>>>>>                                                  
    

               
// print status message based on status code,
// for 200 , 201, okey
// for 301, 302, print resource moved
// for 400, bad request
// 404, not found,
// 401 , unauthorize and so on
                     


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,                                 switch.js (next)

       
    // switch (expression) {
    // case valeu1: 
    // code 
    // case value2: 
    // code 
    // case value3: 
    // code 
    // default
    // }


        function  getDatNmaeByNum (Number){
                                                            //     Good
             let dayNames =[];

             switch(Number){
                case 0 : 
                     return  "sunday"
                    break;
                case 1 :
                    return " Monday"
                    break; 
                case 2 : 
                   return  "Tuesday"
                     break;
                case 3 : 
                    return "Wednesday"
                     break;
                case 4 : 
                    return "Thresday"
                     break;
                case 5 : 
                     return "friday"
                     break;
                case  6 : 
                    return "saturday"      // string ma write karna say bahala (return karna zaroore ha)
                     break;
                 default : 
                     return  "It is cannot required"                   

             }
             return "required"
        }
        //    console.log(getDatNmaeByNum(1));    //    (iss ma value ko "string" ma write ni karna )
           


        
        function  getDatNmaeByNum (Number){

             let dayNames =[];                            // Good

             switch(Number){
                case 0 : 
                    dayNames.push("sunday")
                    break;
                case 1 :
                    dayNames.push("Monday")
                    // break; 
                case 2 : 
                 dayNames.push("Tuesday")
                    //  break;
                case 3 : 
                    dayNames.push("Wednesday")
                    //  break;
                case 4 : 
                dayNames.push("Thresday")
                    //  break;
                case 5 : 
                    dayNames.push("friday")
                    //  break;
                case  6 : 
                   dayNames.push("saturday")      // string ma write karna say bahala (return karna zaroore ha)
                     break;
                 default : 
                     dayNames.push("It is cannot required")                   

             }
             return dayNames
        }
     //       console.log(getDatNmaeByNum(1));    //    (iss ma value ko "string" ma write ni karna )
           



     // weather... raining, strome , snowing , sunny

    // we can test multiple cases at the same time,  switch is the best here
// we cannot test ranges 
                                                                             // Good
   function chackWeather (weather){
    let userMsge 
    switch (weather){
        case "raning":
        case "strom" :
        case " snowing" :
            return  "get an umbralia"
            break
        case "sunny" :
            return "get sun glasses" 
         deafult : 
            return "weather data not available"      
    } 
    // return "It's available."

   }
//    console.log(chackWeather(""));
   







   function chackWeather (weather){
    let userMsge = [] 
    switch (weather){                                                       // Good
        case "raning":
        case "strom" :
        case " snowing" :
          userMsge.push("get an umbralia")
            // break
        case "sunny" :
            userMsge.push("get sun glasses") 
            break
         deafult : 
           userMsge.push("weather data not available")      
    } 
   
    return userMsge

   }
//    console.log(chackWeather("sunny"));









   
 
// month days calculator 

// for january 31, feb 28 if non leap , 29 if leap year,, march : 30,  an dso on

// leap year finder funciton; 

// function isLeapYear(year) {
//     if((year % 4 === 0 && year % 100 !== 0  ) || year % 400 === 0) {
//         return `${year} is a Leap year, this year February has 29 days`
//     } else {
//         return `${year} is not a leap year, Feb has 28 days`
//     }
// }


     //  365 days , ~ 6 hours   
 
            //   31 days
     // jan , , march , , may , ,july ,augst , october, , december            

            // 30  days
     // april , jun , september , november 
  
          // 28 / 29 days
     // february     

       function leapYearReturn (year){
          if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
               return true
          }
          return false
       }
     //   console.log(leapYearReturn(200))   


     function isLeapYears (leapYears, year){
          let years 
          switch (leapYears){
               case "january": 
               case "march":   
               case "may":      
               case "july": 
               case "august": 
               case "october": 
               case "december": 
                    years = "This month is 31 days."  
                    break
               case "april": 
               case "june": 
               case "september": 
               case "november": 
                    years = "This month is 30 days."     
                    break
               case "february":
                    years = leapYearReturn(year)
                       ? "This month has 29 days."
                       : "This month ha 28 days."; 
                    break
           default : 
                years = " There are month no years."

        }
        return years;
       }
       console.log(isLeapYears("february", 2028));



       // <<<<<<<<<<<<<<<<                                     Next      
    
         
// print status message based on status code,
// for 200 , 201, okey
// for 301, 302, print resource moved
// for 400, bad request
// 404, not found,
// 401 , unauthorize and so on

// file type categorizations,

// video file has these extension: .mp4, av1, mkv.
// images; jpg, jpeg, png
// audio : mp3, wav, flac
// doc: docx, doc,
// pdf: pdf
// code: .js, .ts. .py. .go
         




