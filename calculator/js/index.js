console.log(`Hello`);
//window.alert(`hi`);

//this is a comment
/* this 
is 
a 
comment
*/

document.getElementById("myH").textContent=`hello i am developer`;


let x;
x=123;
console.log(x);

let fullName ="Mukesh"
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent= `Your name is ${fullName}`;
document.getElementById("p2").textContent= `Your age is ${age}`;
document.getElementById("p3").textContent= `Enrolled ${isStudent}`;

let username;
/*username=window.prompt("what's your username");
console.log(username);
*/
document.getElementById("mySubmit").onclick=function(){
    username =document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`
}
