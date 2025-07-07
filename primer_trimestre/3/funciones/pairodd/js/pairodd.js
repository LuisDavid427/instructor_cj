

function pairOdd(number){
	if(number%2==0){
		return"pair";
	}
	else{
		return"odd";
	}
}

let number=parseFloat(prompt("enter number"));
console.log(pairOdd(number));