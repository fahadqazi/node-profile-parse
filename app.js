//problem: find info about individual user on treehouse website!
//scraper
//Use Node.js to connect to treehouse api and get profile info
var https = require('https');

var userName = "fahadqazdddi";


//print out message
function printMessage(userName, badgeCount, points){
	var message = userName + " has " + badgeCount + " total badge(s) and " + points
					+ " in Javascript"
	console.log(message);
}
//print out error message
function printError(error){
	console.log(error.message);
}

	//1. connect to treehouse API
	var request = https.get("https://teamtreehouse.com/"+userName+".json",function(response){
			var body = "";

	
			response.on("data", function(chunk){
				body += chunk;
			});

			
				response.on("end", function(){
					if(response.statusCode === 200){
						try{
							var profile = JSON.parse(body);
							printMessage(userName, profile.badges.length, profile.points.JavaScript);
						} catch(error){
							//parase Error
							printError(error);
						}
					} else{
						printError({message: "There was an error getting the profile for " + 
						userName });
					}

			});
		
	});


//connection error
request.on("error", printError);




