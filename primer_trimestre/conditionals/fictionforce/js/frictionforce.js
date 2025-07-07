/*
	Name exercise: Calculation of the Friction of an Object on a Surface
	Description: 	Design a flow chart that calculates the friction force between a
			object and the surface on which it moves.
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let gravity=9.81;
let mass=parseFloat(prompt("enter mass"));
let coefficient=parseFloat(prompt("enter friction coefficient"));
let normal=mass*gravity;
let frictionF=coefficient*normal;


if(frictionF>=50){
	document.write("friction is high");
}

else{
	document.write("friction is low");
}