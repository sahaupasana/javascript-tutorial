const marvel_heroes=["thor","ironman" ,"captain"]
const dc_heroes =["superman","flash","batman"]

//marvel_heroes.push(dc_heroes); // array under array pushed 
// console.log(marvel_heroes)

const newmarvel_heroes=marvel_heroes.concat(dc_heroes); // same problem arises if assignment is not done 

console.log(newmarvel_heroes);

//spread operator = a glass spreads on breaking 
const allheroes=[...marvel_heroes,...dc_heroes] // spreads all the elements 
console.log(allheroes);

//array containing arrays  can be put into one arrayusing the flat operation 
const confusing=[1,2,3,[4,5],[6,7,[8,9]]];
const newconfusing=confusing.flat(Infinity);//any desired depth can be given 
console.log(newconfusing);


//forming arrays from input 
console.log(Array.isArray("upasana"));// answer is false becoz it is a string
console.log(Array.from("Upasana"));

console.log(Array.from({name:"hitesh"}));//not possible case so would not create an array 
//returns empty array 

console.log(Array.of("upasana")); // difference from array.from creates as one element 

console.log(Array.of(100,200,300));









