/*
	Name exercise: bullet
	Description: calculate recoils of bullet
	Autor: luis david conde
	Date: march 15th 2025
*/

let weaponMass=parseFloat(prompt("enter weapon mass"));
let bulletMass=parseFloat(prompt("enter bullet mass"));
let bulletSpeed=parseFloat(prompt("enter bullet speed"));
let multiplication=bulletMass*bulletSpeed;
let recoils=multiplication/weaponMass;

console.log("recoils is "+recoils);
alert("recoils is "+recoils);