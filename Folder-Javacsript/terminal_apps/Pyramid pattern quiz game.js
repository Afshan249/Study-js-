const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const C = {
  reset:  "\x1b[0m",
  cyan:   "\x1b[96m",
  yellow: "\x1b[93m",
  green:  "\x1b[92m",
  red:    "\x1b[91m",
  pink:   "\x1b[95m",
  white:  "\x1b[97m",
  bold:   "\x1b[1m",
};

function ask(q) {
  return new Promise((res) => rl.question(q, res));
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function printPyramid(height) {
  console.log();
  for (let row = 1; row <= height; row++) {
    const spaces = " ".repeat(height - row);
    const stars  = "*".repeat(2 * row - 1);
    console.log(C.cyan + spaces + stars + C.reset);
  }
  console.log();
}

function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function starsInRow(row) {
  return 2 * row - 1;
}

function rowWithStars(stars) {
  return (stars + 1) / 2;
}

function generateQuestion(height) {
  const type = randomBetween(1, 3);

  if (type === 1) {
    const row = randomBetween(1, height);
    return {
      question: C.white + `Row ${C.yellow}${row}${C.white} mein kitne stars hain?` + C.reset,
      answer: starsInRow(row),
      hint: `Formula: (2 × row) - 1  →  (2 × ${row}) - 1 = ${starsInRow(row)}`,
    };
  }

  if (type === 2) {
    const stars = 2 * randomBetween(1, height) - 1;
    return {
      question: C.white + `${C.yellow}${stars}${C.white} stars wali row konsi hai?` + C.reset,
      answer: rowWithStars(stars),
      hint: `Formula: (stars + 1) / 2  →  (${stars} + 1) / 2 = ${rowWithStars(stars)}`,
    };
  }

  return {
    question: C.white + `Pyramid ki ${C.yellow}sabse neeche${C.white} wali row mein kitne stars hain?` + C.reset,
    answer: starsInRow(height),
    hint: `Sabse neeche wali row = row ${height}  →  stars = ${starsInRow(height)}`,
  };
}

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return C.green  + "Perfect! Shabaash! 🏆" + C.reset;
  if (pct >= 80)   return C.green  + "Bohat acha! Keep it up!" + C.reset;
  if (pct >= 60)   return C.yellow + "Theek hai, aur practice karo!" + C.reset;
  return           C.red    + "Mehnat karo, agli baar behtar hoga!" + C.reset;
}

async function main() {
  console.log(C.bold + C.cyan + "\n╔══════════════════════════════╗");
  console.log(            "║   Pyramid Pattern Quiz Game  ║");
  console.log(            "╚══════════════════════════════╝" + C.reset);

  // --- get height ---
  let height;
  while (true) {
    const inp = await ask("\nPyramid ki height daalo (min 3, max 15): ");
    height = parseInt(inp);
    if (isNaN(height) || height < 3)  { console.log(C.red + "Min 3 chahiye!\n" + C.reset); continue; }
    if (height > 15)                  { console.log(C.red + "Max 15 rakho taake pyramid screen pe fit ho!\n" + C.reset); continue; }
    break;
  }

  // --- get rounds ---
  let rounds;
  while (true) {
    const inp = await ask("Kitne sawaal chahiye? (3 to 10): ");
    rounds = parseInt(inp);
    if (isNaN(rounds) || rounds < 3)  { console.log(C.red + "Kam se kam 3 sawaal!\n" + C.reset); continue; }
    if (rounds > 10)                  { console.log(C.red + "Zyada se zyada 10!\n"   + C.reset); continue; }
    break;
  }

  // --- show pyramid ---
  console.log(C.yellow + "\nYeh hai teri pyramid — dhyan se dekho!\n" + C.reset);
  printPyramid(height);
  await sleep(800);

  // --- quiz loop ---
  let score = 0;
  let streak = 0;
  let bestStreak = 0;

  for (let q = 1; q <= rounds; q++) {
    const { question, answer, hint } = generateQuestion(height);

    console.log(C.bold + `Sawaal ${q}/${rounds}:` + C.reset + " " + question);

    const inp = await ask("Tera jawab: ");
    const userAns = parseInt(inp);

    if (isNaN(userAns)) {
      console.log(C.red + "Number chahiye tha! Yeh sawaal skip." + C.reset + "\n");
      continue;
    }

    if (userAns === answer) {
      streak++;
      bestStreak = Math.max(bestStreak, streak);
      score++;
      const bonus = streak >= 3 ? C.pink + ` 🔥 ${streak} streak!` + C.reset : "";
      console.log(C.green + "Bilkul sahi!" + C.reset + bonus + "\n");
    } else {
      streak = 0;
      console.log(C.red   + `Galat! Sahi jawab: ${answer}` + C.reset);
      console.log(C.yellow + `Hint: ${hint}` + C.reset + "\n");
    }

    await sleep(400);
  }

  // --- result ---
  console.log(C.bold + C.cyan + "\n══════════ RESULT ══════════" + C.reset);
  console.log(C.white + `Score     : ${C.bold}${score} / ${rounds}${C.reset}`);
  console.log(C.white + `Best Streak: ${C.bold}${bestStreak}${C.reset}`);
  console.log(C.white + `Grade     : ${getGrade(score, rounds)}`);
  console.log(C.cyan  + "════════════════════════════\n" + C.reset);

  const again = await ask("Dobara khelna hai? (y/n): ");
  rl.close();

  if (again.trim().toLowerCase() === "y") {
    rl.close();
    const { execSync } = require("child_process");
    execSync(`node ${__filename}`, { stdio: "inherit" });
  } else {
    console.log(C.green + "\nShukria! Phir milenge!\n" + C.reset);
  }
}

main();