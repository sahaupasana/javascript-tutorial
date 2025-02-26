let myyoutubename="upasana.com"
console.log(myyoutubename);

let anothername=myyoutubename
anothername="chai aur code "
console.log(myyoutubename);

console.log(anothername);

// this was copy by value 

//now we have reference in object 
let user1={
    name :"Upasana",
    age :20
}

console.log(user1);

let user2=user1;
user2.name="Saha"
console.log(user1)//in both change would be saved 
console.log(user2);
