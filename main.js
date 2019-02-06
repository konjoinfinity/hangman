var hangmanWord = [];
var spacesArray = [];
var hangmanString = "";

const createWord = function() {
  hangmanString = document.getElementById("hangmanword").value;
  console.log(hangmanString);
  hangmanWord.push(document.getElementById("hangmanword").value);
  console.log(hangmanWord);
  createSpaces();
};

const createSpaces = function() {
  for (i = 0; i < hangmanWord[0].length; i++) {
    var space = document.createElement("div-space");
    var letter = document.createTextNode("_ ");
    space.appendChild(letter);
    document.body.appendChild(space);
  }
  console.log(document.querySelectorAll("div-space"));
  spacesArray = hangmanWord[0].length;
  console.log(hangmanWord[0].length);
  document.getElementById("hangmanword").value = "";
};

const checkLetter = function(letter) {
  console.log(letter);
  for (i = 0; i < hangmanWord[0].length; i++) {
    if (hangmanString.charAt(i) == `${letter}`) {
      console.log("match");
    } else {
      console.log("keep guessing...");
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
  console.log(letterA.value);
  checkLetter("a");
});

letterB.addEventListener("click", function(event) {
  console.log(letterB.value);
});

letterC.addEventListener("click", function(event) {
  console.log(letterC.value);
});

letterD.addEventListener("click", function(event) {
  console.log(letterD.value);
});

letterE.addEventListener("click", function(event) {
  console.log(letterE.value);
});

letterF.addEventListener("click", function(event) {
  console.log(letterF.value);
});

letterG.addEventListener("click", function(event) {
  console.log(letterG.value);
});

letterH.addEventListener("click", function(event) {
  console.log(letterH.value);
});

letterI.addEventListener("click", function(event) {
  console.log(letterI.value);
});

letterJ.addEventListener("click", function(event) {
  console.log(letterJ.value);
});

letterK.addEventListener("click", function(event) {
  console.log(letterK.value);
});

letterL.addEventListener("click", function(event) {
  console.log(letterL.value);
});

letterM.addEventListener("click", function(event) {
  console.log(letterM.value);
});

letterN.addEventListener("click", function(event) {
  console.log(letterN.value);
});

letterO.addEventListener("click", function(event) {
  console.log(letterO.value);
});

letterP.addEventListener("click", function(event) {
  console.log(letterP.value);
});

letterQ.addEventListener("click", function(event) {
  console.log(letterQ.value);
});

letterR.addEventListener("click", function(event) {
  console.log(letterR.value);
});

letterS.addEventListener("click", function(event) {
  console.log(letterS.value);
});

letterT.addEventListener("click", function(event) {
  console.log(letterT.value);
});

letterU.addEventListener("click", function(event) {
  console.log(letterU.value);
});

letterV.addEventListener("click", function(event) {
  console.log(letterV.value);
});

letterW.addEventListener("click", function(event) {
  console.log(letterW.value);
});

letterX.addEventListener("click", function(event) {
  console.log(letterX.value);
});

letterY.addEventListener("click", function(event) {
  console.log(letterY.value);
});

letterZ.addEventListener("click", function(event) {
  console.log(letterZ.value);
});
