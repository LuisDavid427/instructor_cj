let array=[];
let amount=parseFloat(prompt("enter amount of array elements"));
for(counter=0;counter<amount;counter++){
	let number=parseFloat(prompt("enter element of array"));
	array.push(number);
}
console.log(array);

function sumArray(array){
	return array.reduce((sumRow, valve)=>sumRow+valve ,0)
}



console.log("sume of array ",sumArray(array));