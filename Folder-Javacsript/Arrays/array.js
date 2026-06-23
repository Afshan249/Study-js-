  //                             ARRAYS
  
  const colours = ["pink", "white", "gray", "black"]

  const colours2 = ["red", "offwhite", "darkblack"]

  const universalcolours = ["red", "green", "blue"]

  //.length
  //.toString()
  //.at()
  //.unShift()
  //.shift()
  //.join()
  //.push()
  //.pop()
  //.isArray()
  //.delete()
  //.concat()
  //.copyWithin()
  //.slice()
  //.flat()
  //.splice()
  //.toSplied()
  
  console.log(colours2.concat(colours , universalcolours));   // marge two arrays

  const CombainArray = colours.concat(universalcolours)
  console.log("Comba: ",CombainArray);    // marge two arrays
  

  const combainTwoArray = [...colours, ...universalcolours]
  console.log("CombainArray: ",combainTwoArray);   // marge two arrays

  const anotherArray = [1,6, 4,[8, 9, 5 ,0 ,[0, 5 ,[99,[66]], 1, 5]] ,3, [3,4, 5,6], 8 ,2]
   const real_anotherArray = anotherArray.flat(Infinity)
    console.log("Real_Array: ",real_anotherArray);


    console.log(Array.isArray("Terminal"));  //  false
    console.log(Array.from("Terminal"));  // ['T', 'e', 'r','m', 'i', 'n','a', 'l']
    console.log(Array.of("f"));
    
    

    
    
  // Use only pop or push   
  //      push : add value in array (last index)
  //      pop : remove vaue in array (last index)
  
  // dont's use shift and unshift on large dataset
  //      unshift: add value in array (first index)
  //      shift: remove value in array (first index)


   // console.log(colours.at(1));  
  
  //                                                 0   , 1      can't give the value 2 
  console.log(colours.slice(0, 2));        // [ 'pink', 'white']
  
  console.log(colours.splice(0, 3));
  
  
  // console.log(Array.isArray(colours));              // true
  
    // console.log(colours.delete("pink"));

  const nexted = [2, 3, 4, [1, 2, 3,4]]  /// dont use mixed array, 
//                                           always keep similar data in an array.

  console.log(nexted.flat());     // they are combain the differents arrays ,and return one array
     //                           [2, 3, 4, 1, 2, 3, 4]




     //   Explan splice 

     const girlsNames = ["Aqsa", "Fatima", "Anaya", "Sadia","Sana"]
         // splice show the value who remove  
     console.log(girlsNames.splice(1 ,2));   // [ 'Fatima', 'Anaya' ]
    //                  After 
     console.log(girlsNames);       // remaining init: [ 'Aqsa', 'Sadia', 'Sana' ]

     console.log(girlsNames.splice(0, 1));  // [ 'Aqsa' ]
     //                 After  
     console.log(girlsNames);      // remaining init:  [ 'Sadia', 'Sana' ]
     
     console.log(girlsNames.splice(1 , "Afsha", "Maria", "Maryam"));    // 
     //                                                ['Sadia', 'Maria', 'Maryam', 'Sana'] 
     console.log(girlsNames);
     
     console.log(girlsNames.splice());    // []
     
     
     
     
     
     





     //       Explan slice

    const names = ["Ali", "Ahmad","Arslan","Aden"]
    //               0  ,    1   ,    2   ,   3

    //                                               0   ,     1   ,   2 index  ,   3 exclude
    console.log(names.slice(1 ,3))        // [ 'Ahmad', 'Arslan', "Aden" ]

    //                                         0  ,    1   ,  (2 exclude)  print value befor 2.
    console.log(names.slice(0, 2));       // ["Ali", "Ahmad"]

    //                        print 2 index and after it.            
    console.log(names.slice(2)); //     ["Arslan", "Aden"]

    //                         print last 2 indexs (no change it's index position)
    console.log(names.slice(-2)); //    ["Arslan" , "Aden"]

  //                            copy oraginal array
    console.log(names.slice());   // [ 'Ali', 'Ahmad', 'Arslan', 'Aden' ]
    
    


     const arrayObjects = ["Hen", "Cat", "Sheep"]

      //     old way  
      const newArrayObjects = ["Cow", ...arrayObjects , "Rabbit"]
      console.log(newArrayObjects);     // [ 'Cow', 'Hen', 'Cat', 'Sheep', 'Rabbit' ]
      
      //     new way 
       const [ hen , crow , sheeper, hungerydog] = arrayObjects
       console.log(hen);          // Hen
       console.log(sheeper );      // Sheep
       console.log(hen , crow, sheeper);      // Hen Cat Sheep
       

       
       

      //     skip elements

      const numbers1 = [99, 33, 77, 55, 11, 44, 22,88 ,66]

      const [a , , c, , e, , g, h , ,] = numbers1
      console.log(e);  //   11
      
      console.log(a, c, e, g, h )   //   99 77 11 22 88


      //     Get first two , rest after array

      const alphabets = ["a", "c", "f", "g", "h", "i",]
      const [first , second, ...rest] = alphabets
      console.log(first, second);      // a c
      

    



      //                                ,,,,,,,,,,,,,,,,OBJECTS,,,,,,,,,,,,,,


     // Objects

      const student = { name: "Ali", age: 20 , email:"arslan00@gmail.com",geetInfo: function(){
        return `Hi my name is ${this.name}. My age is ${this.age} and my email is ${this.email}. 
        `} }

        console.log(student.geetInfo()); 
         //                  Hi my name is Ali. My age is 20 and my email is arslan00@gmail.com.
        

      // .keys()
      //.values()
      //.entries()
       //.hasOwn()

      const studentKeys = Object.keys(student)
      console.log(studentKeys);     // [ 'name', 'age', 'email', 'geetInfo' ]

      const studentValues = Object.values(student)
      console.log(studentValues);    // [ 'Ali', 20, 'arslan00@gmail.com', [Function: geetInfo] ]
      
      const studentEntries = Object.entries(student)
       console.log(studentEntries);    
        //                       [ 'name', 'Ali' ],
        //                       [ 'age', 20 ],
        //                       [ 'email', 'arslan00@gmail.com' ],
        //                       [ 'geetInfo', [Function: geetInfo] ]

       const storehasmakes = Object.hasOwn(student,"makes")
       console.log(storehasmakes);         // false 

                      

             

