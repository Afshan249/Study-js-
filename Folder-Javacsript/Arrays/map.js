// ── DATASET 1: E-commerce Orders ──────────────────────────────────────
const orders = [
  { id: 1, customer: "Sara",  product: "Laptop",     price: 1200, qty: 1, status: "delivered",  category: "electronics" },
  { id: 2, customer: "Ahmed", product: "Headphones", price: 85,   qty: 2, status: "pending",    category: "electronics" },
  { id: 3, customer: "Lena",  product: "Desk Chair", price: 320,  qty: 1, status: "delivered",  category: "furniture"   },
  { id: 4, customer: "Omar",  product: "Keyboard",   price: 95,   qty: 3, status: "cancelled",  category: "electronics" },
  { id: 5, customer: "Fatima","product": "Monitor",  price: 450,  qty: 1, status: "delivered",  category: "electronics" },
  { id: 6, customer: "Yusuf", product: "Bookshelf",  price: 180,  qty: 2, status: "pending",    category: "furniture"   },
  { id: 7, customer: "Sara",  product: "Webcam",     price: 70,   qty: 1, status: "delivered",  category: "electronics" },
  { id: 8, customer: "Ahmed", product: "Standing Desk", price: 600, qty: 1, status: "pending", category: "furniture"   },
];

// ── DATASET 2: Restaurant Menu ─────────────────────────────────────────
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

// ── DATASET 3: Users / Students ────────────────────────────────────────
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



//                               Section 2 — map
// What it does: Creates a new array by transforming each item. The new array is always the same length as the original. Think of it as: "give me a new version of this array where each item has been changed."

//                    # Exercise 2.1 — Add a total field to orders

// Scenario: Your e-commerce API needs to return each order with a total field (price × qty). The raw data from the database doesn't have it — you compute it on the fly.

// Task: Use map to return a new array where each order has all its original fields plus a total property.
 
// const  totalFieldOrders = orders.map(item => item(0))
const  totalFieldOrder = orders.map(item => item)
console.log(totalFieldOrder);


// Expected result (first item):

// { id: 1, customer: 'Sara', product: 'Laptop', price: 1200, qty: 1, ..., total: 1200 }



//                         # Exercise 2.2 — Extract just the names
// Scenario: You need to show a dropdown list of all customers. You only need their names, not the full order object.

// Task: Use map to get an array of just the customer names from orders.

const justCustomerName = orders.map(item => item.customer)
console.log("JustStudentName: ",justCustomerName);


// Expected: ['Sara', 'Ahmed', 'Lena', 'Omar', 'Fatima', 'Yusuf', 'Sara', 'Ahmed']

//  const number = [2, 4, 5 ,7, 18, 0 ,19, 16 ]
//   for(let i = 0 ; i < number.length; i++){
//     return Math.max(number)
//   }
//   console.log("max",number);
  



//                        # Exercise 2.3 — Apply a 10% discount to the menu
// Scenario: It's a Friday promotion. Your frontend needs to display discounted prices. You don't want to mutate the original menu array — you want a fresh one.

// Task: Use map to create a new array where each item has a discountedPrice field (10% off, rounded to 2 decimal places). Keep all original fields.
const discountArray = menu.map(item => {
    return {
        ...item,
        TenPerDiscount: Number((item.price) * 0.9).toFixed(2)
    }
});
console.log("TenperDis: ",discountArray);




//                         # Exercise 2.4 — Normalize user data for an API response
// Scenario: Your Express API should never expose sensitive internal fields to the client. You need to transform the users array into a "public-safe" shape.

// Task: Use map to return a new array where each user only has: id, name, role, and active. Drop age and scores.
const APIResponce = users.map(item => {
  return {
    id: item.id, 
    name: item.name, 
    role: item.role, 
    active: item.active
  }
})

console.log("API: ",APIResponce);


// Expected result (first item):

// { id: 1, name: 'Alice', role: 'student', active: true }
// Why this matters: This is something you'll do in almost every Express route handler — selecting only the fields the client should see.




//                        # Exercise 2.5 — Compute each student's average score
// Scenario: A teacher's dashboard needs to display each student's name alongside their average score.

// Task: Use map to create an array of objects with name and average (rounded to 1 decimal place). Use reduce inside the map (or a simple loop) to compute the average from the scores array.
const averageOfScore = users.map(item => {
    return {
       name: item.name,
       Avreage: item.scores / 3
    }
})
console.log(averageOfScore);


// Expected result (first item):

// { name: 'Alice', average: 86.5 }