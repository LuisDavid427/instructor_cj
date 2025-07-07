/*
	Name exercise: Simulation of an Object on an Inclined Plane
	Description: The force parallel to the surface of an inclined plane is 	F_parallel = m * g * sin(θ)	
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let mass=parseFloat(prompt("enter mass of object"));
let numAngles=parseFloat(prompt("enter range of angles"));
let gravity=9.81;
let parallelForce;
let angle;
let counter;
let x;
for(counter=0;counter<numAngles;counter++){
	angle=parseFloat(prompt("enter angle"));
	x=Math.sin(angle);
	console.log("seno of angle is: "+x);
	parallelForce=mass*gravity*x;
	alert("Parallel Force is: "+parallelForce);
	
}
