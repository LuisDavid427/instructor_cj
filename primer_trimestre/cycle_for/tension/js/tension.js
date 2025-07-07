/*
	Name exercise: Calculating Tension in a Rope
	Description: When an object hangs from a rope, the tension in the rope is calculated as T = m * g, if there is no 			additional acceleration.
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let numObject=parseFloat(prompt("enter number of objects that want calculate"));
let mass;
let tension;
let counter;

let gravity=9.81

for(counter=0;counter<numObject;counter++){
	mass=parseFloat(prompt("enter mass"));
	tension=mass*gravity;
	alert("tension is: "+tension);
}



