let actionForce=parseFloat(prompt("enter action force"));
let reactionForce=0-actionForce;

let counter=0;
let sumForce=0;

while(actionForce>0){
	reactionForce=0-actionForce;
	alert("reaction force is:  " +reactionForce);
	counter++
	console.log("Forces entered: "+counter);
	sumForce+=actionForce;
	actionForce=parseFloat(prompt("enter action force"));
}
alert("a negative force has entered");