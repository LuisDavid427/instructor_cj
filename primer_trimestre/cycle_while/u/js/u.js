let mass=parseFloat(prompt("enter mass"));
let height=parseFloat(prompt("enter height"));

let gravity=9.81;
let sumU=0
let calcCounter=0

let u;

while(height>0){
	u=mass*gravity*height;
	calcCounter++;
	sumU+=u;
	
	alert("gravitational potential energy is: "+u);
	console.log("calculation counter is: "+calcCounter);
	console.log("total gravitational potential energy is: "+sumU);
	
	mass=parseFloat(prompt("enter mass"));
	height=parseFloat(prompt("enter height"));
}
alert("a negative high has been entered");
alert("calculation counter is: "+calcCounter);
alert("total gravitational potential energy is: "+sumU);