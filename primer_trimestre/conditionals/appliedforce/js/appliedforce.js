/*
	Name exercise: Calculation of the acceleration of an object subjected to a force
	Description: 	Design a flow diagram that allows calculating the acceleration of a
			object subjected to a force given its mass
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let mass=parseFloat(prompt("enter mass"));
let force=parseFloat(prompt("enter force"));
let aceleration=force/mass;
let threshold=5

if(aceleration>=threshold){
	document.write("aceleration is high");
}
else{
	document.write("aceleration is low");
}