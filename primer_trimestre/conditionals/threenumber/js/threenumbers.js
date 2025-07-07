/*
	Name exercise: Three numbers
	Description: Three Numbers
	Autor: Luis David Conde
	Date: march 15th 2025
*/

let numberOne=15;
let numberTwo=13;
let numberThree=15;


if(numberOne==numberTwo && numberOne==numberThree){
	console.log("Are equals");
}
else if(numberOne>numberTwo && numberTwo>numberThree){
	console.log("Number One is greater");
}
else if(numberOne==numberTwo && numberOne>numberThree){
	console.log("Number One and Number Two are equals, and are greaters that Number Three");
}
else if(numberTwo==numberThree && numberTwo>numberOne){
	console.log("Number Two and Number Three are equals, are greaters that Number Three");
}
else if(numberOne==numberThree && numberThree>numberTwo){
	console.log("Number One and number three are equals, and are greaters that two");
}
else if(numberTwo>numberThree){
	console.log("Number Two is greater");
}
else{
	console.log("Number Three is greater");	
}
