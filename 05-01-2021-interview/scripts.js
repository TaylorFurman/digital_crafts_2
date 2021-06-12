var comp1 = 'Amazon';
var comp2 = 'Microsoft';
var comp3 = 'Google';

var sym1 = 'I';
var sym2 = 'Am';
var sym3 = 'cro';
var sym4 = 'Na';
var sym5 = 'le';
var sym6 = 'abc';


const companies = (comp1 + " " + comp2 + " " + comp3);
const symbols = /[I,Am,cro,Na,le,abc]/g;
const found = companies.match(symbols);

console.log(companies);
console.log(found);

