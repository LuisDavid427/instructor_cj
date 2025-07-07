/*
	Name exercise: first law newton
	Description: If the net force (F) on an object is zero, it will remain at rest or in uniform movement	
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let numbCalc=parseFloat(prompt("enter how many weight want calculation"));
let earth=9.81;
let mars=3.7;
let jupiter=24.8;
let lune=1.6;
let earthW;
let marsW;
let jupiterW;
let luneW;
let conter;
let mass;

for(counter=0;counter<numbCalc;counter++){
	mass=parseFloat(prompt("enter mass"));
	earthW=mass*earth;
	alert("weight of mass on earth is: "+earthW);
	marsW=mass*mars;
	alert("weight of mass on mars is: "+marsW);
	jupiterW=mass*jupiter;
	alert("weight of mass on jupiter is: "+jupiterW);
	luneW=mass*lune;
	alert("weight of mass on lune is: "+luneW);
}