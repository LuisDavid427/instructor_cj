/*
	Name exercise: Calculation of Force with Newton's Second Law
	Description: 	Create a flowchart that asks for a mass (m) and an acceleration (a) and calculate
			the force (F) applying the formula:
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/


let mass=parseFloat(prompt("enter mass"));
let aceleration=parseFloat(prompt("enter aceleration"));
let force;
let counter=0;
let additionForce=0;

while(mass>0 && aceleration>0){
	force=mass*aceleration;
	alert("Force is: "+force);
	counter++;
	additionForce=additionForce+force;
	console.log("sum of force: "+additionForce);
	console.log("calculation Counter is: "+counter);
	console.log("Force is: "+force);
	mass=parseFloat(prompt("enter mass"));
	aceleration=parseFloat(prompt("enter aceleration"));
}
document.write("sum of force is: " + additionForce);
document.write(", calculation Counter is: "+counter);



