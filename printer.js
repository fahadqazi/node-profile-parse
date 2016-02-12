function printMessage(userName, badgeCount, points){
	var message = userName + " has " + badgeCount + " total badge(s) and " + points
					+ " in Javascript"
	console.log(message);
}
//print out error message
function printError(error){
	console.log(error.message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;