function greting(name, age){
	return `hi ${name} is ${age}`;
}

let name=prompt("enter name");
let age=parseFloat(prompt("enter age"));

console.log(greting(name, age));