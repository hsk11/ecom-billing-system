/* eslint-disable no-undef */
const args = process.argv.slice(2);
const {getCartTotal} = require('./src/services/cart');
if(args.length === 0){
  console.log('Please provide a list of product codes seperated by  like: node cli.js R01 G01');
  process.exit(1);
}

 
const result=getCartTotal(args.map(p => p.trim().replace(/,/g, '')));

console.log('Bill Info\n', result);

