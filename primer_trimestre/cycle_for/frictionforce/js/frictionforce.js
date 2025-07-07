/*
	Name exercise: Friction Force
	Description: 
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let numbCalc=parseFloat(prompt("enter how much mass data want calculate"));
let frictionCoefficient=parseFloat(prompt("enter friction coefficient"));

let gravity=9.81;
let normalForce;
let frictionForce;

for(counter=0;counter<numbCalc;counter++){
	mass=parseFloat(prompt("enter mass for calculation normal force"));
	normalForce=mass*gravity;
	alert("Normal Force is: "+normalForce);
	frictionForce=frictionCoefficient*normalForce
	alert("Friction Force is: "+frictionForce);
}

