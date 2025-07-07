let acceleration=[2, -1];
let velocity0=[4, 2];
let startingPosition=[0, 0];
let time=[1, 2, 3, 4, 5];
let endPosition=[];

let position=time.map(t=> 
	startingPosition.map((x0, i)=> 
		x0 + velocity0[i]*t+0.5*acceleration[i]*(t**2)
	)
);

endPosition.push(position);
console.log(endPosition);

for(i=0;i<time.length;i++){
	
	console.log(`time[${time[i]}] end position [${endPosition[0][i]}]`);
}




