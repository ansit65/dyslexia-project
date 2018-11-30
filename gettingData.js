// @includepath ~/Documents/;%USERPROFILE%Documents; 
// @include basiljs/basil.js; 
 
function draw() { 
  var output = layer("output");
  clear(output);

  margins(20);
  canvasMode(MARGIN);
  function goldenRatio (myValue){
  	var goldenShort = myValue/2.618;
  	var goldenLong = (myValue/2.618)*1.628;
  };

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
 var allWords = words(myTextFrame);

 for (var l = 0; l < allLetters.length; l++){
 	var actualChar = allLetters[l];

 	var myRandom = random(24)
 	var mySin1 = sin(l*0.1);
 	var mySin2 = sin(l*0.1);
 	var ptSize = map(mySin1, 1, -1, 24, myRandom);
 	var baseShift = map(mySin2, 1, -1, myRandom, -myRandom);
 	typo(actualChar, "pointSize", ptSize);
 	typo(actualChar, "baselineShift", ptSize);
 }


} 