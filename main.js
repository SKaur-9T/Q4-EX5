
function verifyOrder() {
	var order = document.getElementById('inputChoice').value.toLowerCase(); // convert to lowercase

	switch (order) {
		case "b":
			document.getElementById('choiceResult').innerHTML = "You ordered a burger ";
			break;
		case "f":
			document.getElementById('choiceResult').innerHTML = "You ordered fries ";
			break;
		case "s":
			document.getElementById('choiceResult').innerHTML = "You ordered a soda ";
			break;
		default:
			document.getElementById('choiceResult').innerHTML = "Invalid. Please try again.";
			break;
	}
}
