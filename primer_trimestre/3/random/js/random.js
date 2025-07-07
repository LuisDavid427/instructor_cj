let row=parseFloat(prompt("enter row"));
let col=parseFloat(prompt("enter col"));
let mRandom=[];

for(i=0;i<row;i++){
	rowMatrix=[]
	for(i2=0;i2<col;i2++){
		number=Math.floor(Math.random()*100);
		rowMatrix.push(number);
	}
mRandom.push(rowMatrix)
}

console.log(mRandom);