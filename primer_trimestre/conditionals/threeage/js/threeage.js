/*
	Name exercise: Three age
	Description:Three age
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let ageOne=parseFloat(prompt("enter age one"));
let ageTwo=parseFloat(prompt("enter age two"));
let ageThree=parseFloat(prompt("enter age three"));
let addition=ageOne+ageTwo+ageThree
let averageAge=addition/3

if(ageOne>=18){
	console.log("Age One is adult");
	alert("Age One is adult");
}
else{
	console.log("Age One is child");
	alert("Age One is child");
}
if(ageTwo>=18){
	console.log("Age Two is adult");
	alert("Age Two is adult");
}
else{
	console.log("Age Two is child");
	alert("Age Two is child");
}
if(ageThree>=18){
	console.log("Age Three is adult");
	alert("Age Three is adult");
}
else{
	console.log("Age Three is child");
	alert("Age Three is child");
}
if(averageAge>=18){
	console.log("the group is coming of age");
	alert("the group is coming of age");
}
else{
	console.log("the group is not of age");
	alert("the group is not of age");
}