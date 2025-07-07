let forceMatriz=[
    [5, 0],
    [-2, 3],
    [1, -1]
];

let mass=2;
let totalForce=0;

totalForce=forceMatriz.reduce((sum, row)=>{
	return sum+row.reduce((sumRow, valve)=>sumRow+valve,0)
}, 0); 

acceleration=totalForce/mass;

console.log("sume of force: "+totalForce);
console.log("acceleration is: "+acceleration);
