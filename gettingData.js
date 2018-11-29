// @includepath ~/Documents/;%USERPROFILE%Documents; 
// @include basiljs/basil.js; 
 
function draw() { 
  var output = layer("output");
  clear(output);

  canvasMode(MARGIN);

  var urlDaria = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=&search=dyslexia";
	 // wikiData[0]: array of single letters: d y s l e x i a ;
	 // wikiData[1]: array of titles for further reading
	 // wikiData[2]: array of description for wikiData[1].topics
	 // wikiData[3]: array of links matching wikiData[1].topics

	var urlDysArt = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&titles=Dyslexia";	 
  
 var wikiJSON = loadString(urlDaria);
 var wikiData = JSON.decode(wikiJSON);

 var myText = "";

 	var wikiPart = wikiData[2];

 	for(var j = 0; j < wikiPart.length; j++){

 		// println("wikiPart: "+j+": "+wikiPart[j]);

 		newText = wikiPart[j];
 		if(i = 2){

 			myText = myText+newText;
 		} // end if
 	 } // end j-loop

 var myTextFrame = text(myText, 0, 0, width, height);

 var allLetters = characters(myTextFrame);

 for (var l = 0; l < allLetters.length; l++){
 	var actualChar = allLetters[l];
 	var mySin = sin(l*0.2);
 	var ptSize = map(mySin, 1, -1, 36, 8);
 	typo(actualChar, "pointSize", ptSize);
 }

} 