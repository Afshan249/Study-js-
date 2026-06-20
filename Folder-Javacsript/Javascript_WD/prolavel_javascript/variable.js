//  scopes in javascript 

// 1:  global scope                           ya variable sub jaga access ho sakta ha 
//                               function ka under be       OR        function ka baher be 

// 2: function scope                          ya variable srif function ka under he access ho sakta ha 
//                               function ka baher error mela ga 

// 3 : block scrops                           ya just   " {}"     iss ka under he access karta ha
//                                 "{}"     iss sa baher error mela ga 


// var   :     global scope , function scope      ,      ya block scope ka follow ni kar ta 
//  Let :    global scope ,   block scope         ,
// const:    globalscope   , block scope          , 


    
// var a = 10 ;     var again declear kar na say error ni data 
// var a = 10 ; 

// Var :            we can declare (samename) again  ((undefine))   and  access initiazation
//                                                                                                       ( ager same variable declara ho jaya to javascript pahala variable ko ignor kar date ha )



// let a = 10;
// let a =         ya  again declara kar na say error daga jub iss ko run kara ga 

// Let :       cannot declaration (samename)          ((give error))   But    access initiazation



// Const  :       cannot  declaration  again and  cannot access initiazation again 

    //  const a = 10;
    //  const a = 10;   


        // const a = 10 ;

        // console.log(a);
        // console.log(typeof a);
        
        

     const Function = function (){
         var golbal = "golbal scope"
         let fun = " function scope "
         const block = " bolck scope"


         console.log(golbal);
         console.log(fun);
         console.log(block);
           }
           Function ("Function")