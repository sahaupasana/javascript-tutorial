//dates in java script  shown in milli seconds 
let d=new Date()
console.log(d);

console.log(d.toString());
//several other functions available 
//type of date is object 

let mydate=new Date(2023,0,23,5,3,90) // month starts from 0 
console.log(mydate.toDateString());
console.log(mydate.toLocaleString()); // showa the time as well 
// new Date("01-14-2023") mm-day -year format 

//year, month, date, hour, min ,sec ,
let mytimestamp=Date.now()
console.log(mytimestamp)// time elapsed from teh default date 
console.log(mydate.getTime());// time spent from the specifies date 


console.log(Math.floor(Date.now()/1000)) //converting to seconds 

//date.now() gives the current time stamp 


let newDate=new Date()
console.log(newDate.getMonth()+1);// month strats from 0 

// newdate.toLocaleString also has customizations on the formats  

newDate.toLocaleString('default',{
    weekday:"long"
})
