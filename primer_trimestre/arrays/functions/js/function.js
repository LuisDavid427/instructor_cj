let numberOne;
let numberTwo;
let addResult;
let subtResult;
let multiResult;

function addition(numberOne, numberTwo){
	addResult=numberOne+numberTwo;
	return addResult;
}

function subtraction(numberOne, numberTwo){
	subtResult=numberOne-numberTwo;
	return subtResult;
}

function multi(numberOne, numberTwo){
	multiResult=numberOne*numberTwo;
	return multiResult;
}
addResult1=addition(43, 23);
addResult2=addition(13, 23);
addResult3=addition(17, 23);
addResult4=addition(10, 23);
subtResult=subtraction(30, 10);
multiResult=multi(3, 10)

console.log(`Addition 1: ${addResult1}`);
console.log(`Addition 2: ${addResult2}`);
console.log(`Addition 3: ${addResult3}`);
console.log(`Addition 4: ${addResult4}`);
console.log(`subtraction: ${subtraction}`);
console.log(`multiplication: ${multi}`);
console.log(`operations: Add: ${addResult1} | Subst: ${subtResult} | multiplication: ${multiResult}`);
