let force=[
	[10, 5, 0],
	[4, -3, 2],
	[0, 0, 6]
];

let mass=[2, 4, 3];

let acceleration=force.map(row =>
	row.map((value, index)=>value/mass[index])
);

console.log(acceleration);
