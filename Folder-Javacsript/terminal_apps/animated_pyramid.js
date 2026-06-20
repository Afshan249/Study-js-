 const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const COLORS = {
  reset:  "\x1b[0m",
  cyan:   "\x1b[36m",
  yellow: "\x1b[33m",
  green:  "\x1b[32m",
  magenta:"\x1b[35m",
  bold:   "\x1b[1m",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRowColors(height) {
  const palette = [
    "\x1b[31m",
    "\x1b[33m",
    "\x1b[32m",
    "\x1b[36m",
    "\x1b[34m",
    "\x1b[35m",
  ];
  const section = Math.ceil(height / palette.length);
  return (row) => palette[Math.floor((row - 1) / section) % palette.length];
}

async function animatePyramid(height, delay) {
  const colorFor = getRowColors(height);

  console.log(`\n${COLORS.bold}${COLORS.cyan}Building your pyramid...${COLORS.reset}\n`);
  await sleep(400);

  for (let row = 1; row <= height; row++) {
    const spaces = " ".repeat(height - row);
    const stars  = "*".repeat(2 * row - 1);
    const color  = colorFor(row);

    process.stdout.write(`${color}${spaces}${stars}${COLORS.reset}\n`);
    await sleep(delay);
  }

  console.log(`\n${COLORS.bold}${COLORS.green}Done! Pyramid of height ${height} complete!${COLORS.reset}\n`);
}

function askQuestion(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

async function main() {
  console.log(`\n${COLORS.bold}${COLORS.magenta}=== Animated ASCII Pyramid ===${COLORS.reset}\n`);

  let height;
  while (true) {
    const input = await askQuestion("Enter pyramid height (min 3, max 100): ");
    height = parseInt(input);
    if (isNaN(height))       { console.log(`${COLORS.yellow}Please enter a valid number.\n${COLORS.reset}`); continue; }
    if (height < 3)          { console.log(`${COLORS.yellow}Too small! Minimum is 3.\n${COLORS.reset}`);     continue; }
    if (height > 100)        { console.log(`${COLORS.yellow}Too big! Maximum is 100.\n${COLORS.reset}`);     continue; }
    break;
  }

  let delay = 100;
  const speedInput = await askQuestion("Animation speed? (1=slow 200ms, 2=normal 100ms, 3=fast 30ms) [default: 2]: ");
  if (speedInput === "1") delay = 200;
  else if (speedInput === "3") delay = 30;

  rl.close();

  await animatePyramid(height, delay);
}

main();  