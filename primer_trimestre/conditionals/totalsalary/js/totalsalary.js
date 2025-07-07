/*
	Name exercise: Total Salary
	Description: Total Salary
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/

let salary=parseFloat(prompt("enter salary"));
let minimumSalary2=1423500*2;
let minimumSalary4=1423500*4;
let health=salary*0.12;
let pension=salary*0.16;
let arl=salary*0.052;
let subsidyTransportation=114000;
let discount=health+pension+arl;
let discountSalary=salary-discount;
let retention=discountSalary*0.04;
let calculation;
console.log("health "+health);
console.log("ARL "+arl);
console.log("discount "+discount);
console.log("discountSalary "+discountSalary);

if(discountSalary>minimumSalary4){
	console.log("retention "+retention);
}
else{
	console.log("retention");
}


if(discountSalary<minimumSalary2){
	calculation=discountSalary+subsidyTransportation
	console.log("Total Salary is: "+calculation);
	alert("Total Salary is: "+calculation);
}
else if(discountSalary>minimumSalary4){
	calculation=discountSalary-retention
	console.log("Total Salary is: "+calculation);
	alert("Total Salary is: "+calculation);
}
else{
	console.log("Total Salary is: "+discountSalary);
	alert("Total Salary is: "+discountSalary);
}
