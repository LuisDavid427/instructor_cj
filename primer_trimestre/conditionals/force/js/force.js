/*
	Name exercise: foce
	Description: calculate the force exerted by an object and
		     Determine if it is greater or less than a threshold value.
	Autor: Luis David Conde sanchez
	Date: march 15th 2025
*/


let mass=parseFloat(prompt("enter mass"));
let aceleration=parseFloat(prompt("enter aceleration"));
let force=mass*aceleration

if(force>=100){
	document.write("force is high");
}
else{
	document.write("force is low");
}
