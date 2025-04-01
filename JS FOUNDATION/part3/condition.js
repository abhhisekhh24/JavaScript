//checking if a number is greater than another number

let num1 = 5
let num2 = 7



if (num1>num2) {
    console.log(num1>num2);
} 

//checking if A STRING IS EQUAL TO ANOTHER TOR NOT// 



let username="CHAI"
let anotherusername="chai"

if (username=anotherusername) {
    console.log("pick another username");

    
}else{
    console.log("you can pick another username");
    
}



//checking eioither a var is no. or not


let score = "23";   //stringed number ("23")

if(typeof score == 'number') {
    console.log("yepn this is anumber");  
}else{
    console.log("not his is not a number");
    
}


//check if a boolean is true or false


let isteaready =  false

if(isteaready ){
    console.log("yes tea is ready");
    
}else{
    console.log("no tea is not ready");
    
}



//array is empty or not

let items = [];

console.log("items.length");

if(items.length==0) {
    console.log("array is empty");
}else{
    console.log("array is not empty");
    
}
