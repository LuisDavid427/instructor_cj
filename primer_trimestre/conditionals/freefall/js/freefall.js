/*
	Name exercise: Comparison of two bodies in free fall
	Description: 	Design a flow diagram that receives the mass of two falling bodies
			free, calculate the gravitational force of each one and determine:
			• Which body exerts the greatest gravitational force.
			• If both forces are equal
	Autor: Luis David Conde sanchez
	Date: march 15th 2025
*/


let massOne=parseFloat(prompt("enter mass the object one"));
let massTwo=parseFloat(prompt("enter mass the object Two"));
gravity=9.81;
let forceOne=massOne*gravity;
let forceTwo=massTwo*gravity;

if(forceOne==forceTwo){
	document.write("have are the some gravitational force");
}
else if(forceOne>forceTwo){
	document.write("mass One has more gravitational force that mass Two");
}
else{
	document.write("mass two has more gravitational force that mass one");
}