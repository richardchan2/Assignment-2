//
// this is just a stub for a function you need to implement
//

function getStats(txt) {
	var numChars = txt.length;
    var longestLine = 0;
    var wordArray = new Array();
    var nonEmptyLines = 0;
    var wordAvg = 0;
	var palindromeArray = new Array();
	var numWords = 0;
	var longestWordArray = new Array();
	var arrayLines = txt.split("\n");
	var lines = arrayLines.length;

    if (lines == 1) { // Checks if text file is empty
    	if (arrayLines[0].trim() == 0) {
    		lines = 0;
    	}
    }
	
	for (count = 0; count < lines; count++) { // Converts array into lowercase
		arrayLines[count] = arrayLines[count].toLowerCase();
	}
    
    for (count = 0; count < lines; count++) {
    	if (arrayLines[count].trim() != "") { // Checks for empty lines
    		nonEmptyLines++;
    	}
    	if (arrayLines[count].length > longestLine) { // Checks for longest line
			longestLine = arrayLines[count].length;
		}
   }
   
    
    var tempArray = txt.replace(/[^a-zA-Z 0-9]+/g," "); // Removes all punctuations
    var tempArray = tempArray.replace(/\n/g, " "); // Creates an array of all words without punctuation
    wordArray = tempArray.split(" ");	
    for (count = 0; count < wordArray.length; count++) {
		wordArray[count] = wordArray[count].toLowerCase();
    	wordAvg = wordAvg + wordArray[count].length;
		if (wordArray[count].length != "") { // Counts number of words
			numWords++;
		}
		if (wordArray[count].length > 2) {
			if (wordArray[count] == wordArray[count].split("").reverse().join("") && wordArray[count] != "") { // Checks for palindromes
				palindromeArray.push(wordArray[count]);
			}
		}
    }
	wordAvg = wordAvg/numWords;
    
	wordArray.sort();
	wordArray.sort(function (a, b) { return b.length - a.length });
	var counter = 0;
	if (wordArray.length >= 10) {
		for (count = 0; count < wordArray.length; count++) {
			if (longestWordArray.indexOf(wordArray[count]) == -1 && counter < 10) {
				longestWordArray.push(wordArray[count]);
				counter++;
			}
		}
	}else{
		for (count = 0; count < wordArray.length; count++) {
			if (longestWordArray.indexOf(wordArray[count]) == -1 && counter < wordArray.length) {
				longestWordArray.push(wordArray[count]);
				counter++;
			}
		}
	}
	
	var tempArray = new Array();
	var freqArray = new Array();
	var tempArray2 = new Array();
	for (count = 0; count < wordArray.length; count++) {
		if (tempArray.indexOf(wordArray[count]) == -1 && wordArray[count] != "") {
			tempArray.push(wordArray[count]);
		}
	}
	for (count = 0; count < tempArray.length; count++) {
		var freqCount = 0;
		for (count2 = 0; count2 < wordArray.length; count2++) {
			if (tempArray[count] == wordArray[count2]) {
				freqCount++;
			}
		}
		tempArray2.push(freqCount);
	}
	while (freqArray.length != tempArray.length) {
    	var max = tempArray2[0];
    	var maxIndex = 0;
    	for (var i = 1; i < tempArray2.length; i++) {
        	if (tempArray2[i] > max) {
           		maxIndex = i;
            	max = tempArray2[i];
        	}
    	}
    	freqArray.push(tempArray[maxIndex]+"("+max+")");
    	tempArray2[maxIndex] = 0;
	}
	var x = 0;
	var finalArray = new Array();
	if (freqArray.length >= 10) {
		for (count = 0; count < 10; count++) {
			finalArray.push(freqArray[count]);
		}
	}else{
		finalArray = freqArray;
	}
					   
    return {
    	nChars: numChars, //done
        nWords: numWords, //done
        nLines: lines, //done
        nNonEmptyLines: nonEmptyLines, //done
        maxLineLength: longestLine, //done
        averageWordLength: wordAvg, //done
        palindromes: palindromeArray, //done
        longestWords: longestWordArray,
        mostFrequentWords: finalArray,
    };
}
