// THIS Does not to link with anything, just needed for the original list of breweries

// need axios
var axios = require("axios");
// need to convert xml to json
var convert = require("xml-js");

axios.get("http://beermapping.com/webservice/loccity/e068110cb84a4220dc1a32f3b0b6c17d/austin,tx").then(
	function(response) {
		// debugger;
		// console.log(response.data);
		var XMLresult = response.data;
		var JSONresult = convert.xml2js(XMLresult, {compact: true, spaces: 2});
		// console.log(Object.keys(JSONresult));
		// debugger;

		var barArray = JSONresult.bmp_locations.location;

		// for (let i = 0; i < barArray.length; i++) {
		//     // var barName = barArray[i].name._text;
		//     // console.log(barName);

		// }  
		var i = 0;
		if (i < barArray.length) {
			function testBreweries () {
				var Bartype = barArray[i].status._text;
				// <street>12801 Shops Parkway, Ste 100</street>
				// {/* <city>Austin</city> */}
				// {/* <state>TX</state> */}
				// {/* <zip>78738</zip> */}
				if (Bartype === "Brewpub" || Bartype === "Brewery") {
					console.log("INSERT INTO breweryTable (name, address) VALUES (\"" + barArray[i].name._text + "\",\"" + barArray[i].street._text + " " + barArray[i].city._text + " " + barArray[i].state._text + " " + barArray[i].zip._text + "\");");
					// // console.log();
                
					//                 console.log(
					// `
					// {
					// brewer_name: "${barArray[i].name._text}",
					// address: "${barArray[i].street._text}, ${barArray[i].city._text}, ${barArray[i].state._text}, ${barArray[i].zip._text}"
					// }, 
					// `
					//                 );

					i++;
					testBreweries();
				} else {
					i++;
					testBreweries();
				}
			}

			testBreweries();
		} else {
			return;
		}
	});
