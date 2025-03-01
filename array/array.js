//array
const myarr=[0,1,2,3,4,5,true,"upasana"]
// resizable and mixture of data types 
console.log(myarr[6]);
//array copy shallow copy ( copy by reference )

//array methods 
myarr.push(6)// pop also exists 
//unsift(value ) used to add a value to the beginning 
//shift () similar to pop but pops the first element 
console.log(myarr);

// questions asked in functions 
console.log(myarr.includes(false));
console.log(myarr.indexOf(3));

const another=myarr.join(); // binds and convers the array to a string

console.log(another );


//slice splice - exracting a part of teh array 
console.log("original  ",myarr);

const arra=myarr.slice(1,4)
console.log(arra);
console.log("after slice ",myarr);

const arrb=myarr.splice(1,4)
console.log(arrb);
console.log("after splice ",myarr);

// slice extracts before the limit and spilce upto teh limit 
// slice does nor change the oroginal array but splice changes the original array 








