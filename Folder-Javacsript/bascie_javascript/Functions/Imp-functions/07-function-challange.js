                
            
        //    # Challenge — Employee Profile System (Spread + this)

        // Create an object called employee with:
        // name
        // department
        // salary
        // Add two methods:

        // getInfoRegular → regular function
        // getInfoArrow → arrow function
        // Both should try to return:

        // Ali works in IT department
        // Then:

        // Call both methods and observe the output.
        // Explain why one works and the other doesn't.
        // Create a copy of the employee using the spread operator.
        // Change the copied employee's:
        // name
        // salary
        // Verify that the original employee remains unchanged.
        // Add a new property to the copied object:
        // experience: 3
        // using the spread operator during copying.


          const employee = {
            name: "Arslan",
            department: "Sales Departement",
            salary: 1200,
            
            getInfoRegular: function (){
                return `Hi, my name is ${this.name}.`
             },

             getInfoArrow: () => {
                 return `Hi, i'm ${this.name}.`
             }
            }

            console.log(employee);
            console.log("Name: ",employee.name);                // Arslan
            console.log("Department: ",employee.department);    // Sales Departement
            console.log("Salary: ",employee.salary);            //  1200

            console.log("GetRegular: ",employee.getInfoRegular());    // Hi, my name is Arslan

            console.log("GetArrow: ",employee.getInfoArrow());    // Hi, i'm undefined.



       const copyEmpolyee = {age: 22,experience: 3, ...employee}
      //  console.log(copyEmpolyee);

       console.log("Befor, original-employee: ",employee);

       copyEmpolyee.name = "Usman Ali"
       console.log(copyEmpolyee);

       copyEmpolyee.salary = 3500
      console.log(copyEmpolyee);

      copyEmpolyee.department = "Simpal Department"
      console.log(copyEmpolyee);
      
             
      console.log("After, original-employee: ",employee);



      //                                     ,,,,,,,,,,,,,,,,,,,,,,,,,,

   const student = {
     name: "Ahmad", 
     age: 18,
     subject: {
       compulsory: ["Urdu", "enhilsh", "Pak Study"],
       elective: ["Physis", "Math"]
     },
   }
   const studentCopy = {...student}
   console.log(studentCopy);
 
  student.subject.elective("Cham")
  


   const StudentNewCopy = structuredClone(student)
   console.log("StructrcedClone: ",StudentNewCopy);


   



      
       








































            // const originalExpolyee = {name: "Ali", salary: 1500 }
            // // console.log(originalExpolyee);

            // const copyByExpolyee = {department: "IT Department",...originalExpolyee}
            // console.log(copyByExpolyee);

            // copyByExpolyee.name = "Ali Ahmad"
            // console.log("Befor: ",originalExpolyee);

            // console.log(copyByExpolyee);

            // console.log("After: ",originalExpolyee);
            

            // copyByExpolyee.salary = 2500
            // console.log("Befor: ", originalExpolyee);

            // console.log(copyByExpolyee);

            // console.log("After: ", originalExpolyee);

 // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,
            
               //  change the new values

      // employee.name = "Arslan Ayan"
      // console.log(employee);

      // employee.department = "IT Department" 
      // console.log(employee);

      
        // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      
      
      //  spread operator  (Arrow Function )

      const sum = (...copyexpol) => {
          for(let j = 0 ; j < copyexpol.length; j++){
            copyexpol[j]
          }
      }
      // console.log(1,2,3,4,5,6,7,8,8);


      // const sumNum = () => {
      //    for(let k = 0; k < arguments.length ; k++){
      //        arguments[k]
      //    }
      // }

      // console.log(2,3,4,3,2,2,2,4,4);
      



      


      // Regular Function 

      function regular (){
        for(let i = 0 ; i < arguments.length; i++){
          arguments[i]
        }
      }
    //  console.log(6, 3 ,9 ,0 ,3 ,6);


    // Arrow Function 

    const arrow = (...values) => {
      for(let z = 0 ; z < values.length ; z++ ){
          values[z]
      }
    }

    // console.log(1,1,1,1,1,0,0,0,0,0);
    
     



      
      