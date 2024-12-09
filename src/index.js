let num1 = 3;
let num2 = 5;
let result = num1 +num2;
console.log(result)
let num3 = 10;
let num4 = 15;
let result2 = num3 +num4;
console.log(result)

// function cookRice (salt, water, rice)
 

function checkAge(){
    let age = prompt (`what is your age?`);
    if (age<6){
        alert(` you are ${age} years old and too young`)
    }else if (age && 17>=age >=6){
        alert(`You are ${age} years old and you have limited options` )
    }else if (age && age >=18){
        alert (` You are ${age} years old you can acess all options`)
    }
}