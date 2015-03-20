var bQuotes = ["Asså grejen är ju att ",
			  "Jag känner ju personligen att ",
			  "Asså jag känner ju att ",
			  "En fundering... ",
			  "Asså helt allvarligt ",
			  "Jag har ju en kompis å han tycker att ",
			  "T-b-h asså ja' har funderat på en grej ",
			  "Du, jag tror att jag snor en sån här, men helt allvarligt "];

var eQuotes = [". Ehu, ehu, ehu, ehu!",
			   ", men det är min personliga åsikt.",
			   ". *slurp* gluarghlllagruugghhlll...",
			   ", men va fan. Pfft.",
			   ", men det är vad jag känner personligen.",
			   " å de är ju skitlöjligt.",
			   ", men Linux är ju bättre.",
			   ", men... ska vi gå å tjuvröka?",
			   ", men så tycker ju Ben Stiller också och jag hatar allt som Ben Stiller har gjort."];

var parseText = function() {
	var text = document.getElementById('textfield').value,
		results = document.getElementById('result');

	// First get a random begin quote
	var randBQ = Math.floor( Math.random() * bQuotes.length );
	var randEQ = Math.floor( Math.random() * eQuotes.length );

	text[0].toLowerCase();
	results.innerHTML = bQuotes[ randBQ ] + text + eQuotes[ randEQ ];

}