/*
	Name exercise: Arrays
	Description:
	Autor: Luis David Conde Sanchez
	Date: march 15th 2025
*/
let vector=[]
let iteration;
let number;

for(iteration=0;iteration<15;iteration++){
	number=Math.floor(Math.random()*100);
	vector.push(number);
}
console.log(vector);

let max=Math.max(...vector);
let min=Math.min(...vector);

console.log("Maximo "+max);
console.log("Minimo "+min);

let pair=vector.filter(number=>number%2==0);
let odd=vector.filter(number=>number%2!==0);

console.log("pair "+pair);
console.log("odd "+odd);
