const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPyramid(height) {
  console.log("\n");
  for (let row = 1; row <= height; row++) {
    const spaces = " ".repeat(height - row);
    const stars = "*".repeat(2 * row - 1);
    console.log(spaces + stars);
  }
  console.log("\n");
}

function askHeight() {
  rl.question("Enter pyramid height (min: 3, max: 100): ", (input) => {
    const height = parseInt(input);

    if (isNaN(height)) {
      console.log("Invalid input. Please enter a number.\n");
      askHeight();
      return;
    }

    if (height < 3) {
      console.log("Too small! Minimum height is 3.\n");
      askHeight();
      return;
    }

    if (height > 100) {
      console.log("Too big! Maximum height is 100.\n");
      askHeight();
      return;
    }

    printPyramid(height);
    rl.close();
  });
}

console.log("=== ASCII Pyramid Generator ===\n");
askHeight();