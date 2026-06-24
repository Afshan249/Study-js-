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


//                           Section 3 — filter
// What it does: Creates a new array with only the items that pass a test (the callback returns true). The new array is the same length or shorter.

//                           # Exercise 3.1 — Only delivered orders
// Scenario: The analytics page only cares about completed orders. Filter out pending and cancelled ones.

// Task: Use filter to get only orders where status === "delivered".
const onlyDeliveredOrders = orders.filter(order => order.status === "delivered")
console.log("Deliver: ",onlyDeliveredOrders);


// Expected: Array of 4 orders (Sara/Laptop, Lena/Chair, Fatima/Monitor, Sara/Webcam).



//                  # Exercise 3.2 — Vegetarian menu items
// Scenario: A customer selects "vegetarian only" in the restaurant app. Show them only the matching items.

// Task: Use filter to get only menu items where isVeg === true.

const vegetarianMenuItems = menu.filter(item => item.isVeg === true)
console.log("isVeg: ",vegetarianMenuItems);







//                    # Exercise 3.3 — High-value orders
// Scenario: The finance team wants to review any order whose total value (price × qty) is above €200.

// Task: Use filter to find all such orders. You'll need to compute price * qty inside the filter callback.

const high_value_orders = orders.filter(order => (order.price * order.qty) > 200)
console.log("High: ",high_value_orders);

// Expected: Laptop (1200), Desk Chair (320), Monitor (450), Keyboard (285), Bookshelf (360), Standing Desk (600).






//                        # Exercise 3.4 — Active students only
// Scenario: When sending automated quiz reminders, only active students should receive them. Inactive accounts are suspended.

// Task: Use filter to get users where role === "student" AND active === true.
const activeStudentsOnly = users.filter(user => (user.role === "student") && (user.active === true))
console.log("Activestudent: ",activeStudentsOnly);


// Expected: Alice, Clara, Eva, Grace.





//                 # Exercise 3.5 — Menu items rated above 4.3
// Scenario: The homepage "Top Picks" section only shows items with a rating above 4.3.

// Task: Filter the menu and then use map on the result to return just the names.

const menuItemsRatedAbove = menu.filter(item => { return item.name}).map(item => item.name)
console.log("justName: ",menuItemsRatedAbove);


// Expected: ['BBQ Chicken Pizza', 'Beef Burger', 'Pasta Carbonara', 'Chocolate Lava Cake']

// Notice: You chained filter then map. This is the most common real-world pattern.

