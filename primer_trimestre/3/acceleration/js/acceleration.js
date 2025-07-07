function acceleration(force, mass){
	return (force/mass)
}
let mass=parseFloat(prompt("enter mass"));
let force=parseFloat(prompt("enter force"));

console.log(acceleration(force, mass));