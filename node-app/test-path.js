const path = require('path');

// ..../node-app
console.log(__dirname);

// .../node-app/test-path.js
console.log(__filename);

//let imagePath = path.join(__dirname,"/dondate.png");
let anotherImagePath = path.join(__dirname,'images/ele.png');
console.log(anotherImagePath);