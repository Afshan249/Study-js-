       //   06-expenses.js

        //  02 : Declare an array called expenses with at least 5 objects, each having { name:   string, amount: number, category: 'food' | 'transport' | 'utilities' | 'other' }
        // 03 :  Write addExpense(list, name, amount, category) that returns a NEW array with the expense appended (use spread, don't mutate)
        // 04 : Write total(list) that returns the sum of all amounts
        // 05:  Write totalByCategory(list, category) that returns the sum of amounts in that category (use a for loop + continue)
        // 06 : Write mostExpensive(list) that returns the expense object with the highest amount
        // 07 : Write summary(list) that calls the other functions and logs a formatted report: total,   total per category, and the most expensive item
        // 08 :  Call summary(expenses) to see everything at once. Then call addExpense to produce a new list, and call summary again on the new list. 


        const expenses = [
            {name : "sum" , amount : 2010 , category :'food' },
            {name : "Ali" , amount : 1122 , category :"transport"},
            {name : "Arslan" , amount : 1300 , category : "other"},
            {name : "Hussain" , amount : 900 , category : "utilities"},
            {name : "Ali" , amount : 1122 , category :"transport"},
        ]
        // console.log(expenses);
        

         
        function addExpense (list, name, amount, category){
            return expenses
        }
        // console.log(addExpense());

          function total(list){
            let sumOfAmount = 0
            for(let w = 0; w < list.length ; w++){
             sumOfAmount = sumOfAmount + list[w].amount
            }
            return sumOfAmount
          }
          console.log(total(expenses));        //  6454

       //                                                              name

        //   function addName(list){
        //     let addname = ""
        //     for (let s = 0; s < list.length; s++) {
        //        addname = addname + list[s].name + " " 
        //     }
        //     return addname

        //   }
        //   console.log(addName(expenses));    //    sum Ali Arslan Hussain Ali 
          
          
         //                                                      category

        //  function totalByCategory(list , category){
        //     let addCategory = ""
        //     for(let c = 0; c < list.length; c++ ){
        //       addCategory = addCategory + list[c].category + " "
        //     }
        //     return addCategory
        //  }
        //  console.log(totalByCategory(expenses));  //  food transport other utilities transport 
         
         

          function totalByCategory(list , category){
            let addCategory = 0
            for(let c = 0; c < list.length; c++ ){
                if(list[c].category !== category){
                   continue
                }
                // console.log(list[c].amount);
                
              addCategory = addCategory + list[c].amount 
            }
            return addCategory
         }
         console.log(totalByCategory(expenses, "food"));     // 2010
         console.log(totalByCategory(expenses, "banana"));   // 
         console.log(totalByCategory(expenses, "other"));   //  1300
         console.log(totalByCategory(expenses, "transport"));   // 
