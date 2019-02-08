/*
variables: hangmanWord array for entered hangman word to utilize the length
property for looping, entered hangmanword as a string for comparison of a letter
match and word/phrase match, and clickCounter for determining which hangman image
to display.
*/

var hangmanWord = [];
var hangmanString = "";
var clickCounter = 1;

/*
The createWord function first checks to if characters have been entered in the
wordform entry box, if so then it proceeds to assign hangmanWord and
hangmanString to the wordform characters entered.  The function also modifies
hangmanString to all upper case characters for easier comparison for correct
guessed letters and completed words/phrases matching.  Finally it calls the
createSpaces function and disables the Enter Word button to prevent multiple
word/phrase entries.
*/

const createWord = function() {
  if (document.getElementById("hangmanword").value == "") {
    return;
  } else {
    hangmanString = document.getElementById("hangmanword").value;
    //console.log(hangmanString);
    hangmanWord.push(document.getElementById("hangmanword").value);
    //console.log(hangmanWord);
    hangmanString = hangmanString.toUpperCase();
    createSpaces();
    document.getElementById("enterWord").disabled = true;
  }
};

/*
The createSpaces function loops through the hangmanWord array based on the
length.  It checks to ascertain if the hangmanString at specific characters
based on the i variable iteration has any spaces (in the case of phrases or
multiple words) and creates a space (" ") element in the wordboard. If the character
is not a space (an alphanumeric character) the function creates an underscore (_)
for the character based on the i variable interation.  Once the loop has
completed, the wordboard conatins underscores and spaces that match the
wordform/hangmanString entry/value. Finally the function replaces the value from
the word form to a blank string ("") to appear as if the entry has been submitted.
*/

const createSpaces = function() {
  for (i = 0; i < hangmanWord[0].length; i++) {
    if (hangmanString.charAt(i) == " ") {
      var para = document.createElement(`div${i}`);
      var t = document.createTextNode(" ");
      para.appendChild(t);
      var parent = document.getElementById("wordboard");
      document.getElementById("wordboard").appendChild(para);
    } else {
      var para = document.createElement(`div${i}`);
      var t = document.createTextNode("_ ");
      para.appendChild(t);
      var parent = document.getElementById("wordboard");
      document.getElementById("wordboard").appendChild(para);
    }
  }
  //console.log(hangmanWord[0].length);
  document.getElementById("hangmanword").value = "";
};

/*
The function checkLetter first assigns letterFound equal to false for usage
later in the function.  Next it loops through hangmanString comparing each
character to the inputted guess (letter) passed in from the front end when
a letter button is clicked.  If the character matches the letter guessed, the
underscore (_) is replaced with the chosenLetter at the corresponding space in
the wordboard. "Guess correct" is logged in the console. letterFound is then
assigned to be true.  If the letter guessed is not in the hangmanString
(letterFound == false), 1 is added to clickCounter. Then hangmanimage is replaced
with the next image (1.png, 2.png, 3.png, etc).  The checkWord function is called
and letterFound is then reassigned to false.
*/

const checkLetter = function(letter) {
  var letterFound = false;
  //console.log(clickCounter);
  //console.log(letter);
  for (i = 0; i < hangmanWord[0].length; i++) {
    if (hangmanString.charAt(i) == letter) {
      //console.log(i);
      var blankSpace = document.querySelector(`div${i}`);
      var parent = blankSpace.parentNode;
      var chosenLetter = hangmanString.charAt(i);
      var letterSpace = document.createElement(`div${i}`);
      letterSpace.innerHTML = `${chosenLetter}`;
      parent.replaceChild(letterSpace, blankSpace);
      console.log("Guess Correct!");
      letterFound = true;
    } else {
      console.log("konjo");
    }
  }
  if (letterFound == false) {
    clickCounter = clickCounter += 1;
    var imageElement = document.getElementById("hangmanimage");
    imageElement.setAttribute("src", `img/${clickCounter}.png`);
  } else {
    console.log("konjo");
  }
  checkWord();
  letterFound = false;
};

//source: .replace(/(\n)/gm, "") - https://www.textfixer.com/tutorials/javascript-line-breaks.php
/*
The checkWord function checks to see if the entire word or phrase has been
guessed before reaching image 8.  The function first calls the current wordboard
and removes spacing (.replace(/(\n)/gm, "") to prepare for comparison.  Then if
the modified wordboard is equal to hangmanString without spaces, "You Win!"
is console logged.  The hangman image is then replacd with the final winning
image (9.png) and the image class is changed to hinge for css effects.  Otherwise
if the click counter equals 8, "You Lose." is console logged and the hangman
image is then replacd with the final losing image (8.png) and the image class is
also changed to hinge for css effects.
*/

const checkWord = function() {
  if (
    document.querySelector("#wordboard").innerText.replace(/(\n)/gm, "") ==
    hangmanString.replace(" ", "")
  ) {
    console.log("You Win!");
    var imageElement = document.getElementById("hangmanimage");
    imageElement.setAttribute("src", "img/9.png");
    imageElement.setAttribute("class", "hinge");
  } else {
    if (clickCounter == 8) {
      console.log("You Lose.");
      var imageElement = document.getElementById("hangmanimage");
      imageElement.setAttribute("class", "hinge");
    } else {
      console.log("Keep Guessing...");
    }
  }
};

const letterA = document.getElementById("letterA");
const letterB = document.getElementById("letterB");
const letterC = document.getElementById("letterC");
const letterD = document.getElementById("letterD");
const letterE = document.getElementById("letterE");
const letterF = document.getElementById("letterF");
const letterG = document.getElementById("letterG");
const letterH = document.getElementById("letterH");
const letterI = document.getElementById("letterI");
const letterJ = document.getElementById("letterJ");
const letterK = document.getElementById("letterK");
const letterL = document.getElementById("letterL");
const letterM = document.getElementById("letterM");
const letterN = document.getElementById("letterN");
const letterO = document.getElementById("letterO");
const letterP = document.getElementById("letterP");
const letterQ = document.getElementById("letterQ");
const letterR = document.getElementById("letterR");
const letterS = document.getElementById("letterS");
const letterT = document.getElementById("letterT");
const letterU = document.getElementById("letterU");
const letterV = document.getElementById("letterV");
const letterW = document.getElementById("letterW");
const letterX = document.getElementById("letterX");
const letterY = document.getElementById("letterY");
const letterZ = document.getElementById("letterZ");

letterA.addEventListener("click", function(event) {
  //console.log(letterA.value);
  document.getElementById("letterA").disabled = true;
});

letterB.addEventListener("click", function(event) {
  //console.log(letterB.value);
  document.getElementById("letterB").disabled = true;
});

letterC.addEventListener("click", function(event) {
  //console.log(letterC.value);
  document.getElementById("letterC").disabled = true;
});

letterD.addEventListener("click", function(event) {
  //console.log(letterD.value);
  document.getElementById("letterD").disabled = true;
});

letterE.addEventListener("click", function(event) {
  //console.log(letterE.value);
  document.getElementById("letterE").disabled = true;
});

letterF.addEventListener("click", function(event) {
  //console.log(letterF.value);
  document.getElementById("letterF").disabled = true;
});

letterG.addEventListener("click", function(event) {
  //console.log(letterG.value);
  document.getElementById("letterG").disabled = true;
});

letterH.addEventListener("click", function(event) {
  //console.log(letterH.value);
  document.getElementById("letterH").disabled = true;
});

letterI.addEventListener("click", function(event) {
  //console.log(letterI.value);
  document.getElementById("letterI").disabled = true;
});

letterJ.addEventListener("click", function(event) {
  //console.log(letterJ.value);
  document.getElementById("letterJ").disabled = true;
});

letterK.addEventListener("click", function(event) {
  //console.log(letterK.value);
  document.getElementById("letterK").disabled = true;
});

letterL.addEventListener("click", function(event) {
  //console.log(letterL.value);
  document.getElementById("letterL").disabled = true;
});

letterM.addEventListener("click", function(event) {
  //console.log(letterM.value);
  document.getElementById("letterM").disabled = true;
});

letterN.addEventListener("click", function(event) {
  //console.log(letterN.value);
  document.getElementById("letterN").disabled = true;
});

letterO.addEventListener("click", function(event) {
  //console.log(letterO.value);
  document.getElementById("letterO").disabled = true;
});

letterP.addEventListener("click", function(event) {
  //console.log(letterP.value);
  document.getElementById("letterP").disabled = true;
});

letterQ.addEventListener("click", function(event) {
  //console.log(letterQ.value);
  document.getElementById("letterQ").disabled = true;
});

letterR.addEventListener("click", function(event) {
  //console.log(letterR.value);
  document.getElementById("letterR").disabled = true;
});

letterS.addEventListener("click", function(event) {
  //console.log(letterS.value);
  document.getElementById("letterS").disabled = true;
});

letterT.addEventListener("click", function(event) {
  //console.log(letterT.value);
  document.getElementById("letterT").disabled = true;
});

letterU.addEventListener("click", function(event) {
  //console.log(letterU.value);
  document.getElementById("letterU").disabled = true;
});

letterV.addEventListener("click", function(event) {
  //console.log(letterV.value);
  document.getElementById("letterV").disabled = true;
});

letterW.addEventListener("click", function(event) {
  //console.log(letterW.value);
  document.getElementById("letterW").disabled = true;
});

letterX.addEventListener("click", function(event) {
  //console.log(letterX.value);
  document.getElementById("letterX").disabled = true;
});

letterY.addEventListener("click", function(event) {
  //console.log(letterY.value);
  document.getElementById("letterY").disabled = true;
});

letterZ.addEventListener("click", function(event) {
  //console.log(letterZ.value);
  document.getElementById("letterZ").disabled = true;
});
