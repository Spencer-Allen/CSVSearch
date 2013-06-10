var fs = require("fs");
var data = fs.readFileSync("databaseinfo.csv", "utf8");
var myArray = data.split(/\r\n/);

function matchString(input){
  	var regex = new RegExp(input, "gi")
		var searchResults = [] 
		for (i=0; i<myArray.length; i++){
				
				if (regex.test(myArray[i]) == true){
				searchResults.push(myArray[i]);
				}
		}
		console.log("search complete")
		return searchResults;
}

module.exports.matchString = matchString;




