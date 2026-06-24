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

//                        Section 6 — some and every
// some → returns true if at least one item passes the test. every → returns true if all items pass the test. Both return a boolean. Used heavily for validation.

//                        # Exercise 6.1 — Are there any cancelled orders?
// Scenario: Before closing the daily report, the system checks if any orders were cancelled so it can send an alert.

// Task: Use some to check if any order has status === "cancelled". Log "Alert: cancelled orders exist" or "All clear".
 const cancelledOrder = orders.some(order =>{ 
   if(true){
      return "Alert: cancelled orders exist"
    }else{
      return "All clear"
    }
    return order.status === "cancelled"
  })
 console.log(cancelledOrder);
 



//                 # Exercise 6.2 — Did all students pass?
// Scenario: A student passes if their average score is 60 or above. Check if the whole class passed.

// Task: Use every to check if all users with role === "student" have a minimum average score of 60. Compute the average per student inside the callback.

const studentPass = users.every(user => user.role ==="student" && user.scores < 60)
// console.log(studentPass);   // false
// const studentPassScore = users.every(user => user.role ==="student")
// console.log( "Scores: ",studentPassScore);  // false


// const studentPassed = users.some(user => user.role ==="student" && user.scores < 60)
//  console.log(studentPassed);  // false

// const roleStudent = users.some(user => user.role ==="student")
//  console.log(roleStudent);  // true






//               # Exercise 6.3 — Is the menu fully vegetarian?
// Scenario: A vegetarian restaurant wants to verify its menu before publishing a "100% veg" badge.

// Task: Use every to check if all items in menu have isVeg === true.
const menuFullyVegetarian = menu.every(item => item.isVeg === true)
const menuFullyVeget = menu.some(item => item.isVeg === true)
console.log(menuFullyVeget);    // true

console.log(menuFullyVegetarian);  // false





//                 # Exercise 6.4 — Does this customer have any delivered orders?
// Scenario: A loyalty program only activates for customers who have at least one delivered order.

// Task: Use some to check if "Sara" has at least one delivered order.
 
const deliveredOrder = orders.some(order => order.customer === "Sara")
console.log("Order: ",deliveredOrder);  // true





