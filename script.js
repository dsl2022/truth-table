function updateTable() {
	// Get the input fields
	var a1 = document.getElementById("a1").checked;
	var a2 = document.getElementById("a2").checked;
	var a3 = document.getElementById("a3").checked;
	var a4 = document.getElementById("a4").checked;
	
	var b1 = document.getElementById("b1").checked;
	var b2 = document.getElementById("b2").checked;
	var b3 = document.getElementById("b3").checked;
	var b4 = document.getElementById("b4").checked;
	
	// Calculate the results
	var and1 = a1 && b1;
	var and2 = a2 && b2;
	var and3 = a3 && b3;
	var and4 = a4 && b4;
	
	var or1 = a1 || b1;
	var or2 = a2 || b2;
	var or3 = a3 || b3;
	var or4 = a4 || b4;
	
	var xor1 = a1 !== b1;
	var xor2 = a2 !== b2;
	var xor3 = a3 !== b3;
	var xor4 = a4 !== b4;
	
	// Update the table
	document.getElementById("and1").innerHTML = and1;
	document.getElementById("and2").innerHTML = and2;
	document.getElementById("and3").innerHTML = and3;
	document.getElementById("and4").innerHTML = and4;
	
	document.getElementById("or1").innerHTML = or1;
	document.getElementById("or2").innerHTML = or2;
	document.getElementById("or3").innerHTML = or3;
	document.getElementById("or4").innerHTML = or4;
	
	document.getElementById("xor1").innerHTML = xor1;
	document.getElementById("xor2").innerHTML = xor2;
	document.getElementById("xor3").innerHTML = xor3;
	document.getElementById("xor4").innerHTML = xor4;
}

// Add event listeners to the input fields
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", updateTable);
}
