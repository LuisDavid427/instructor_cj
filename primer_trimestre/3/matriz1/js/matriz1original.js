let iterationOne;
let iterationTwo;
let force =[
	[10, 5, 0],
	[4, -3, 2],
	[0, 0, 6]
];
let mass=[2, 4, 3];

let acceleration=[];
let object;
let values;

for(iterationOne=0;iterationOne<force.length;iterationOne++){
	console.log("iteration One "+iterationOne);
	
	let values=[]
;
	for(iterationTwo=0;iterationTwo<force[iterationOne].length;iterationTwo++){

	console.log("iteration two: "+iterationTwo);
	let need=force.length;
	console.log("NEED: "+need);

	console.log(force[iterationOne][iterationTwo]);

	let accel=force[iterationOne][iterationTwo]/mass[iterationTwo];
	console.log("acceleration "+accel);
	values.push(accel)
	};

acceleration.push(values);
};

console.log(acceleration);
