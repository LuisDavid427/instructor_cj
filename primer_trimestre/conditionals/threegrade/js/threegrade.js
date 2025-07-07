/*
	Name exercise: Three numbers
	Description: Three Numbers
	Autor: Luis David Conde
	Date: march 15th 2025
*/

let gradeOne=3.0;
let gradeTwo=4.5;
let gradeThree=3.5;
let fullGradeOne=gradeOne*0.2;
let fullGradeTwo=gradeTwo*0.35;
let fullGradeThree=gradeThree*0.45;
let fullGrade=fullGradeOne+fullGradeTwo+fullGradeThree

if(fullGrade>=4.5){
	console.log("top grade")
}
else if(fullGrade>=3.5 && fullGrade<4.5){
	console.log("Good Grade")
}
else if(fullGrade>=3 && fullGrade<3.5){
	console.log("Average Grade")
}
else{
	console.log("Bad Grade")
}