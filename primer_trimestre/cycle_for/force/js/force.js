let numbCalc=parseFloat(prompt("enter number of calculation"));
let mass=parseFloat(prompt("enter mass"));
let aceleration=parseFloat(prompt("enter aceleration"));
let counter;
let force;

for(counter=1;counter<numbCalc;counter++){
	force=mass*aceleration;
	alert("force is: "+force);
	mass=parseFloat(prompt("enter mass"));
	aceleration=parseFloat(prompt("enter aceleration"));
}
alert("end");