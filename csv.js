const fs = require ("fs");
csv = require('csv-parser');

var result = [];
fs.createReadStream('transactions.csv')
.pipe(csv({ Headers : false}))
.on("data", data => result.push(Object.values(data)));
//.on("end", () => console.log(result));

const data = result;
console.log(data);