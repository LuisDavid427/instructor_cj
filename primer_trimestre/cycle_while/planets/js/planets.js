let option=prompt("Choose the gravity: earth, mars or jupiter");
let mass=parseFloat(prompt("Enter mass"));

const earth=9.81;
const mars=3.71;
const jupiter=24.79;

let sumWeight=0;
let calcCounter=0;
let weight;

while(mass>0) {
	if(option==="earth"){
		weight=mass*earth;
	}
	else if(option==="mars"){
		weight=mass*mars;
	}
	else if(option==="jupiter"){
		weight=mass*jupiter;
	}
	else{
		alert("Incorrectly typed data, only earth, mars or jupiter is recognizable");
		option=prompt("Choose the gravity: earth, mars or jupiter");
	}
	calcCounter++;
	sumWeight+=weight;

	console.log("Weight is: " +weight);
	console.log("Sum of weights: " +sumWeight);
	alert("Weight is: " +weight);
    
	mass=parseFloat(prompt("Enter mass"));
	option=prompt("Choose the gravity: earth, mars or jupiter");
}
alert("A negative mass was entered. Calculation ended.");
