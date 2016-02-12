//problem: find info about individual user on treehouse website!
//scraper
//Use Node.js to connect to treehouse api and get profile info
var https = require('https');
var printer = require('./printer');


function get(userName){
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
							printer.printMessage(userName, profile.badges.length, profile.points.JavaScript);
						} catch(error){
							//parase Error
							printer.printError(error);
						}
					} else{
						printer.printError({message: "There was an error getting the profile for " + 
						userName +"\n" + "Status Code: " + response.statusCode});
					}

			});
		
	});


//connection error
request.on("error", printer.printError);
}

module.exports.get = get;


