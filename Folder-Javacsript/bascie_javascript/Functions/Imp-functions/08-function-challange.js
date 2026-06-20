        //     # Challenge — Product Cart System (Spread + this + Array)

        // Create an object called product with:
        // - title
        // - price
        // - inStock (true/false)

        // Add two methods:
        // - getDetailsRegular → regular function
        // - getDetailsArrow → arrow function

        // Both should try to return:
        // "Laptop costs 85000 and is available"

        // Then:

        // 1. Create an ARRAY of 3 products (phones, laptop, headphones)

        // 2. Use a LOOP to print each product's title and price

        // 3. Create a discounted copy of the FIRST product using spread:
        //    - price kam karo (10% discount)
        //    - Add new property: discount: "10%"

        // 4. Verify original product array unchanged raha

        // 5. Explain why getDetailsArrow mein this.title undefined

    const product = {
        title: "Loptop",
        price: 5500,
        inStock: true,

        getDetailsRegular:  function (){
           return `${this.title} price is ${this.price} and it's avaliable.`
       }, 


         getDetailsArrow: () => {
           return `${this.title} price is ${this.price} and it's avaliable.`
   
         },

    }
    console.log(product);
    console.log(product.title);
    console.log(product.inStock);
    console.log(product.price);
    
    console.log(product.getDetailsArrow());
    console.log(product.getDetailsRegular());

      
    const arrayOfProduct = [phones, laptop, handphones]
    
    
    
    
        