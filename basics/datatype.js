"use strict" ; //for using the latest version of the javascript which is by default 
// alert (3+3);   not possible in node js in browser only 

console.log(3
    +3);//readability is poor and has to be maintained always 
//datatypes in javascript 
//integer , string , boolean , 
//undefined - variable in declared but value is not assigned 
//null- empty value is assigned (standalone value)
//symbol for uiquemess 


//non primitive - object 
console.log(typeof(null)); //result will  be object 
console.log(typeof(undefined));//result will be undefined 

let  num="33"
let number =Number(num) //for converting any string into number 
console.log(typeof number)
console.log(number)
/* all conversions
33- 33
33abc-NaN
true -1
NULL-0 
*/
//like Number String Boolean can also be used 



