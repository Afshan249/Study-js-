// const fs = require('fs');

// const height = 20;
// let pyramid = '';

// for (let i = 1; i <= height; i++) {
//   const spaces = ' '.repeat(height - i);
//   const stars = '*'.repeat(2 * i - 1);
//   pyramid += spaces + stars + '\n';
// }

// console.log(pyramid);

// fs.writeFileSync(`pyramid_height${height}.txt`, pyramid);

// console.log(`Pyramid printed in terminal! Also saved to: pyramid_height${height}.txt`); 

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



const fs = require('fs');

const height = 6;
const width = 15;

let rectangle = '';

for (let i = 0; i < height; i++) {
  rectangle += '*'.repeat(width) + '\n';
}

console.log(rectangle);

fs.writeFileSync(`rectangle_height${height}_width${width}.txt`, rectangle);

console.log(`Rectangle printed in terminal! Also saved to: rectangle_height${height}_width${width}.txt`);