function calculateStrikeDamage(basePower,multiplier){
return basePower*multiplier;
}
/* we can also save the value to a variable for later use
----> const strikeDamage=calculateStrikeDamage(1.6,9.6);
*/
console.log(calculateStrikeDamage(1.6,9.6));
console.log(calculateStrikeDamage(2.4,8.2));
console.log(calculateStrikeDamage(1.2,1.4));

console.log(isNaN())