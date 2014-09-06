alert("JavaScript works! bossplaya ");

var myHomeAddress = "the batcave";
var myWardrobe = "\"Make sure you dress fly\"";
var Car1 = "pull out the old school";
var Atm1 = 0;
var Valet1;
var Vip1 = true;
var GoToBar = true;
var GoHome = " Time to go parking lot Pimp!";

//my confirms 
myHomeAddress = prompt(" Enter your destination address ", "Club cheetah 333 Dairy Aire Drive");
myWardrobe = confirm(" Are you feeling fancy");
Atm1 = parseInt(prompt(" How much you ballin wit tonite PLAYA!?!?"));

Valet1 = prompt(" you want to park in the garage or the street ");
Vip1 = confirm(" you wanna get a table or naw "); 


//my outputs
console.log(" You know what time its is after the club we take'em then to " + myHomeAddress + ".");

console.log(" make sure you keep " + Atm1+ "reciept.");
console.log(" the amount you paid " + Valet1 + ".");
//console.log( Vip1 + "then what you get all that money for?");


//if vip1 is = true
	//(" Damn boy!! You ready to make it rain huh!!!");
//else
	//("then what you get all that money for?");
if (Vip1==true){
	console.log(" Damn boy!! You ready to make it rain huh!!! ");
}else{
	console.log(" then what you get all that money for?");
}	

