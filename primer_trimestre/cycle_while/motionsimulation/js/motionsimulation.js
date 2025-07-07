let force=parseFloat(prompt("enter force"));
let mass=parseFloat(prompt("enter mass"));

let time=1;
let timeCounter=0
let totalDistance=0
let velocityi=0

let velocity;
let aceleration;
let distance;

while(0<force>0 ){
	aceleration=force/mass;
	alert("aceleration is: "+aceleration);
	console.log("aceleration is: "+aceleration);
	velocity=velocityi+(aceleration*time);
	distance=velocity*time;
	console.log("distance is: "+distance);
	timeCounter+=time;
	console.log("time of object at motion is: "+timeCounter);
	totalDistance+=distance;
	console.log("total distance of object is: "+totalDistance);
	force=parseFloat(prompt("enter force"));
	
}
alert("object at rest");
alert("total time of object at motion is: "+timeCounter);
alert("total distance of object is: "+totalDistance);