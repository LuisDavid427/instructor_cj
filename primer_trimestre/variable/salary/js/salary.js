/*
	Name exercise: salary
	Description: salary with discount
	Autor: Luis David Conde
	Date: march 15th 2025
*/


let dayWorked=parseFloat(prompt("enter days worked"));
let valveDay=parseFloat(prompt("enter valve of day"));
let salary=dayWorked*valveDay;
let health=salary*0.12;
let pension=salary*0.16;
let arl=salary*0.052;
let discount=health+pension+arl;
let netSalary=salary-discount;

console.log(salary);
console.log(discount);
console.log(netSalary);
console.log(health);
console.log(pension);
console.log(arl);
alert(netSalary);

