let force=parseFloat(prompt("enter force"));
let distance=parseFloat(prompt("enter distance"));
let totalWork=0;
let calcCounter=0;
let work;


while(distance>0){
	work=force*distance;
	alert("mechanical work is: "+work);
	totalWork+=work;
	calcCounter++;
	console.log("the total calculation are: "+calcCounter);
	console.log("the total work is: "+totalWork);
	force=parseFloat(prompt("enter force"));
	distance=parseFloat(prompt("enter distance"));
}
alert("a negative distance has been entered");
document.write("the total calculation are: "+calcCounter);
document.write(", the total work is: "+totalWork);