let counter;
let number;
let cBuzz=0;
let cBass=0;
let modul;
let product;

for(number=1;number<=5;number++){
	
	for(counter=1;counter<=5;counter++){
		
		product=number*counter;
		modul=product%2;
		if(modul==0){
			console.log(number,"*",counter,"=",product, "Buzz");
			cBuzz++;
		}
		else{
			console.log(number,"*",counter,"=",product, "Bass");
			cBass++;
		}
	
	}
}

console.log("total Buzz "+cBuzz);
console.log("total Bass "+cBass);
