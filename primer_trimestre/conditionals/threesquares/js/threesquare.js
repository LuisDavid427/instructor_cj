/*
	Name exercise: three squares
	Description: Create a code that calculates the area of ​​three squares given their sides
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/


let sideOne=parseFloat(prompt("enter sideOne"));
let sideTwo=parseFloat(prompt("enter sideTwo"));
let sideThree=parseFloat(prompt("enter sideThree"));

let areaOne=sideOne*sideOne;
let areaTwo=sideTwo*sideTwo;
let areaThree=sideThree*sideThree;

if(areaOne==areaTwo && areaOne==areaThree){
	console.log("Are equals");
	alert("Are equals");
}
else if(areaOne>areaTwo && areaTwo>areaThree){
	console.log("Area One is greater");
	alert("Area One is greater");
}
else if(areaOne==areaTwo && areaOne>areaThree){
	console.log("Area One and Area Two are equals, and are greaters that Area Three");
	alert("Area One and Area Two are equals, and are greaters that Area Three");
}
else if(areaTwo==areaThree && areaTwo>areaOne){
	console.log("area Two and area Three are equals, and are greaters that area One");
	alert("area Two and area Three are equals, and are greaters that area One");
}
else if(areaOne==areaThree && areaThree>areaTwo){
	console.log("area One and area three are equals and are greaters that area two");
	alert("area One and area three are equals and are greaters that area two");
}
else if(areaTwo>areaThree){
	console.log("area Two is greater");
	alert("area Two is greater");
}
else{
	console.log("area Three is greater");
	alert("area Three is greater");
}