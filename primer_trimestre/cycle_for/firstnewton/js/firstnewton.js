/*
	Name exercise: first law newton
	Description: If the net force (F) on an object is zero, it will remain at rest or in uniform movement	
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let numbCalc=parseFloat(prompt("enter how many forces want assess"));
let force;
let counter;

for(counter=0;counter<numbCalc;counter++){
	force=parseFloat(prompt("enter force"));
	if(force==0){
		alert("force at rest");
	}
	else{
		alert("force at uniform motion");
	}
}
