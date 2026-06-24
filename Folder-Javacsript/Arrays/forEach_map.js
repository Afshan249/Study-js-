// JavaScript Array Methods — Practical Exercises

// forEach · map · filter · reduce · find · findIndex · some · every

// Environment: Node.js — run any exercise with node filename.js Style: Arrow functions throughout (since you've covered them)


//                         # DATASET 1: E-commerce Orders
const orders = [
  { id: 1, customer: "Sara",  product: "Laptop",     price: 1200, qty: 1, status: "delivered",  category: "electronics" },
  { id: 2,customer: "Ahmed", product: "Headphones", price: 85,   qty: 2, status: "pending",    category: "electronics" },
  { id: 3, customer: "Lena",  product: "Desk Chair", price: 320,  qty: 1, status: "delivered",  category: "furniture"   },
  { id: 4, customer: "Omar",  product: "Keyboard",   price: 95,   qty: 3, status: "cancelled",  category: "electronics" },
  { id: 5, customer: "Fatima","product": "Monitor",  price: 450,  qty: 1, status: "delivered",  category: "electronics" },
  { id: 6, customer: "Yusuf", product: "Bookshelf",  price: 180,  qty: 2, status: "pending",    category: "furniture"   },
  { id: 7, customer: "Sara",  product: "Webcam",     price: 70,   qty: 1, status: "delivered",  category: "electronics" },
  { id: 8, customer: "Ahmed", product: "Standing Desk", price: 600, qty: 1, status: "pending", category: "furniture"   },
];

//                         #  DATASET 2: Restaurant Menu
const menu = [
  { id: 1, name: "Margherita Pizza",  price: 12.5, category: "pizza",   isVeg: true,  rating: 4.5 },
  { id: 2, name: "BBQ Chicken Pizza", price: 15.0, category: "pizza",   isVeg: false, rating: 4.7 },
  { id: 3, name: "Caesar Salad",      price: 8.0,  category: "salad",   isVeg: true,  rating: 4.2 },
  { id: 4, name: "Beef Burger",       price: 11.0, category: "burger",  isVeg: false, rating: 4.6 },
  { id: 5, name: "Veggie Burger",     price: 9.5,  category: "burger",  isVeg: true,  rating: 4.1 },
  { id: 6, name: "Pasta Carbonara",   price: 13.0, category: "pasta",   isVeg: false, rating: 4.4 },
  { id: 7, name: "Garden Salad",      price: 7.0,  category: "salad",   isVeg: true,  rating: 3.9 },
  { id: 8, name: "Chocolate Lava Cake", price: 6.0, category: "dessert", isVeg: true, rating: 4.8 },
];

//                       # DATASET 3: Users / Students
const users = [
  { id: 1,  name: "Alice",   age: 24, role: "student",  scores: [88, 92, 75, 91],  active: true  },
  { id: 2,  name: "Bob",     age: 30, role: "teacher",  scores: [70, 68, 72, 65],  active: true  },
  { id: 3,  name: "Clara",   age: 22, role: "student",  scores: [95, 98, 100, 92], active: true  },
  { id: 4,  name: "David",   age: 19, role: "student",  scores: [60, 55, 58, 62],  active: false },
  { id: 5,  name: "Eva",     age: 27, role: "student",  scores: [78, 82, 80, 85],  active: true  },
  { id: 6,  name: "Frank",   age: 35, role: "teacher",  scores: [91, 88, 94, 90],  active: true  },
  { id: 7,  name: "Grace",   age: 21, role: "student",  scores: [45, 50, 48, 55],  active: true  },
  { id: 8,  name: "Hamza",   age: 23, role: "student",  scores: [72, 76, 80, 78],  active: false },
];
//                               Section 1 — forEach

// What it does: Loops over an array and runs a function for each item. It does not return anything — it's purely for side effects (logging, accumulating into an outside variable, etc.)

//                             Exercise # 1.1 — Print the menu

// Scenario: You're building a restaurant kiosk. When the app starts, it logs every item on the menu so the kitchen staff can review it.

// Task: Use forEach to print each menu item in this format:

// [1] Margherita Pizza — €12.50 (pizza)
// [2] BBQ Chicken Pizza — €15.00 (pizza)
// ...
// Hint: Use item.id, item.name, item.price.toFixed(2), item.category.

const printEachMenuItem = menu.forEach(((item) => {
    console.log(`[(${item.id}], ${item.name}", "${item.price.toFixed(2)}"  (${item.category})}`);
    // console.log(`[${item.id}] ${item.name} — €${item.price.toFixed(2)} (${item.category})`);
  }))
    
  console.log(printEachMenuItem);
 
// [(1], Margherita Pizza",  "12.50"   (pizza)}
// [(2], BBQ Chicken Pizza", "15.00"   (pizza)}
// [(3], Caesar Salad",      "8.00"    (salad)}
// [(4], Beef Burger",       "11.00"    (burger)}
// [(5], Veggie Burger",     "9.50"     (burger)}
// [(6], Pasta Carbonara",   "13.00"    (pasta)}
// [(7], Garden Salad",        "7.00"  (salad)}
// [(8], Chocolate Lava Cake", "6.00"  (dessert)}






//                     # Exercise 1.2 — Count delivered orders

// Scenario: A warehouse manager needs a quick count of how many orders have already been delivered today.

// Task: Use forEach to loop through orders and count how many have status === "delivered". Log the final count.

let count = 0

const countStatusDeliv = orders.forEach(order => {
  if(order.status === "delivered") {
    count++;
  }
});
console.log("Delivered: ",count)
//                             Delivered:  4
// Expected output: Delivered orders: 4




//                     # Exercise 1.3 — Build a price lookup map

// Scenario: Your backend needs a fast price lookup object so you can get a price by product name instantly — like priceMap["Laptop"] → 1200.

// Task: Start with const priceMap = {}. Use forEach to populate it from the orders dataset.
const priceMap = {}
const costOfProduct = orders.forEach(item => {
  priceMap[item.product] = item.price
})
console.log(priceMap);
 //   output:   {Laptop: 1200, Headphones: 85, 'Desk Chair': 320, Keyboard: 95, Monitor: 450, Bookshelf: 180, Webcam: 70,'Standing Desk': 600}



// Expected result:
// { Laptop: 1200, Headphones: 85, 'Desk Chair': 320, ... }



// Why this matters: This pattern — using forEach to build a lookup object — is extremely common in backend code to avoid repeated .find() calls inside loops.



//                                 Section 2 — map

// What it does: Creates a new array by transforming each item. The new array is always the same length as the original. Think of it as: "give me a new version of this array where each item has been changed."

//                        # Exercise 2.1 — Add a total field to orders

// Scenario: Your e-commerce API needs to return each order with a total field (price × qty). The raw data from the database doesn't have it — you compute it on the fly.

// Task: Use map to return a new array where each order has all its original fields plus a total property.
const TotalFieldOrder = orders.map(item => {
  return {Id: item.id,
         customer: item.customer,
         product: item.product,
         price: item.price,
         qty: item.qty,
         status: item.status,
         category: item.category
  }
})
console.log(TotalFieldOrder);
// Expected result (first item):
// { id: 1, customer: 'Sara', product: 'Laptop', price: 1200, qty: 1, ..., total: 1200 }




//                       # Exercise 2.2 — Extract just the names

// Scenario: You need to show a dropdown list of all customers. You only need their names, not the full order object.

// Task: Use map to get an array of just the customer names from orders.
const justCustomerName = orders.map(item => `${item.customer}`)
console.log("CustomerName: ",justCustomerName);

// Expected: ['Sara', 'Ahmed', 'Lena', 'Omar', 'Fatima', 'Yusuf', 'Sara', 'Ahmed']



//                        # Exercise 2.3 — Apply a 10% discount to the menu

// Scenario: It's a Friday promotion. Your frontend needs to display discounted prices. You don't want to mutate the original menu array — you want a fresh one.

// Task: Use map to create a new array where each item has a discountedPrice field (10% off, rounded to 2 decimal places). Keep all original fields.
 const discountedPrice10Per = menu.map(item =>{ 
   return  {
    ...item,
    discountedprice:  item.price- (Number((item.price) * 0.1).toFixed(2))  
   }
   })
 console.log("Discount: ",discountedPrice10Per);
 //     ok
 



//                         # Exercise 2.4 — Normalize user data for an API response

// Scenario: Your Express API should never expose sensitive internal fields to the client. You need to transform the users array into a "public-safe" shape.

// Task: Use map to return a new array where each user only has: id, name, role, and active. Drop age and scores.

const APIResponce = users.map(propert => {
  return {
    ...propert,
    Age: propert.age,
    scores: propert.scores
  }
});
console.log("API-Responce: ",APIResponce);

// Expected result (first item):

// { id: 1, name: 'Alice', role: 'student', active: true }
// Why this matters: This is something you'll do in almost every Express route handler — selecting only the fields the client should see.





//                       # Exercise 2.5 — Compute each student's average score

// Scenario: A teacher's dashboard needs to display each student's name alongside their average score.

// Task: Use map to create an array of objects with name and average (rounded to 1 decimal place). Use reduce inside the map (or a simple loop) to compute the average from the scores array.
const averagescore = users.filter(user => {
  return user.role === "student"
}).map(student => {


  const average = student.scores.reduce((acc, score) => acc + score,0)/ student.scores.length

  return {
    name: student.name,
    average 
  }
})
console.log(averagescore);

 


// Expected result (first item):

// { name: 'Alice', average: 86.5 }