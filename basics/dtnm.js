// way of defining a number 
const score =40
console.log(score)
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);//converting to string
console.log(balance.toFixed(2));//fixes the precision to 2

const othernum=23.8977
console.log(othernum.toPrecision(3));//strating from teh first digit 

// MAX_VALUE and MIN_VALUE values also exist in the javascript 



// ***************maths ***************
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.3));
//Maths.ceil, floor ,max,min

//random function 
console.log(Math.random()); // generates values between 0 and 1 

const min =10 
const max=20 
// now we want values between this range 
console.log(Math.floor(Math.random()*(max-min+1)+min));
// this is the formula which has to be remembered 
//floor is added to get a perfect whole number 









