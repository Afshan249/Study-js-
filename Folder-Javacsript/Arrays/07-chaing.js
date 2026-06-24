// ── DATASET 1: E-commerce Orders ──────────────────────────────────────
const orders = [
  { id: 1, customer: "Sara",  product: "Laptop",     price: 1200, qty: 1, status: "delivered",  category: "electronics" },
  { id: 2, customer: "Ahmed", product: "Headphones", price: 85,   qty: 2, status: "pending",    category: "electronics" },
  { id: 3, customer: "Lena",  product: "Desk Chair", price: 320,  qty: 1, status: "delivered",  category: "furniture"   },
  { id: 4, customer: "Omar",  product: "Keyboard",   price: 95,   qty: 3, status: "cancelled",  category: "electronics" },
  { id: 5, customer: "Fatima","product": "Monitor",  price: 450,  qty: 1, status: "delivered",  category: "electronics" },
  { id: 6, customer: "Yusuf", product: "Bookshelf",  price: 180,  qty: 2, status: "pending",    category: "furniture"   },
  { id: 7, customer: "Sara",  product: "Webcam",     price: 70,   qty: 1, status: "delivered",  category: "electronics" },
  { id: 8, customer: "Ahmed", product: "Standing Desk", price: 600, qty: 1, status: "pending", category: "furniture"},
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

// Section 7 — Chaining (The Real World)
// In production code you almost never use just one method. You chain them. Read each problem as a pipeline: filter the data → transform it → reduce it.

//          # Exercise 7.1 — Revenue by category (delivered only)
// Scenario: The analytics dashboard shows revenue broken down by product category — but only counting delivered orders.

// Task: Chain filter (delivered only) → reduce to build:

// make filter find the 
const revenueByCategort = orders.filter( order => {
    return order.status === "delivered"
}).reduce((acc, item) => {
   const total = item.price * item.qty 
  const category = item.category

  if(!acc[category]) {
    acc[category] = 0
  }

  const revinueTotal = acc[category] + total
  acc[category]  = revinueTotal

  return acc

},{})

console.log(revenueByCategort);



// { electronics: 1720, furniture: 320 }







// Exercise 7.2 — Leaderboard of active students
// Scenario: The student portal shows a sorted leaderboard of active students with their average score.

// Task:

// filter — active students only
// map — turn each into { name, average } (average of their scores, 1 decimal)
// Sort by average descending (use .sort((a, b) => b.average - a.average))
// Expected:

// [
//   { name: 'Clara',  average: 96.3 },
//   { name: 'Alice',  average: 86.5 },
//   { name: 'Eva',    average: 81.3 },
//   { name: 'Grace',  average: 49.5 },
// ]
// Exercise 7.3 — Pending order summary for SMS
// Scenario: Your app sends an SMS to the warehouse manager listing all pending orders. Format each as a short string.

// Task:

// filter — pending orders only
// map — turn each into a string like "Ahmed — Headphones x2 (€170.00)"
// .join("\n") and log it
// Exercise 7.4 — Menu price stats
// Scenario: The restaurant owner wants to know the cheapest price, most expensive price, and average price across the whole menu.

// Task: Use reduce (or a combination of map and Math.min/Math.max) to compute all three. Log:

// Min: €6.00 | Max: €15.00 | Avg: €10.25
// Exercise 7.5 — Unique customers who placed orders
// Scenario: The marketing team wants a list of unique customer names to send a newsletter.

// Task:

// map to extract all customer names (duplicates included)
// Use filter with indexOf (or use new Set(...)) to deduplicate
// Expected: ['Sara', 'Ahmed', 'Lena', 'Omar', 'Fatima', 'Yusuf']

