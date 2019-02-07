var hangmanWord = [];
var spacesArray = [];
var hangmanString = "";
var clickCounter = 1;

const createWord = function() {
  hangmanString = document.getElementById("hangmanword").value;
  //console.log(hangmanString);
  hangmanWord.push(document.getElementById("hangmanword").value);
  //console.log(hangmanWord);
  hangmanString = hangmanString.toUpperCase();
  createSpaces();
  document.getElementById("enterWord").disabled = true;
};

const createSpaces = function() {
  for (i = 0; i < hangmanWord[0].length; i++) {
    var para = document.createElement(`p${i}`);
    var t = document.createTextNode("_ ");
    para.appendChild(t);
    var parent = document.getElementById("wordboard");
    document.getElementById("wordboard").appendChild(para);
  }
  spacesArray = hangmanWord[0].length;
  //console.log(hangmanWord[0].length);
  document.getElementById("hangmanword").value = "";
};

var lettersCorrect = [];

const checkLetter = function(letter) {
  clickCounter = clickCounter += 1;
  console.log(clickCounter);
  var guess = document.createElement("p");
  //console.log(letter);
  for (i = 0; i < hangmanWord[0].length; i++) {
    if (hangmanString.charAt(i) == `${letter}`) {
      //console.log(`${i}`);
      var blankSpace = document.querySelector(`p${i}`);
      var parent = blankSpace.parentNode;
      var chosenLetter = hangmanString.charAt(i);
      var letterSpace = document.createElement(`p${i}`);
      letterSpace.innerHTML = `${chosenLetter}`;
      parent.replaceChild(letterSpace, blankSpace);
    } else {
      var imageElement = document.getElementById("hangmanimage");
      imageElement.setAttribute("src", `img/${clickCounter}.png`);
    }
  }
  checkWord();
};

const checkWord = function() {
  if (
    document
      .querySelector("#wordboard")
      .innerText.replace(/(\r\n|\n|\r)/gm, "") == hangmanString
  ) {
    console.log("You Win!");
    var para = document.createElement("p");
    var t = document.createTextNode("You Win!");
    para.appendChild(t);
    var parent = document.getElementById("winguesslose");
    document.getElementById("winguesslose").appendChild(para);
  } else {
    return console.log("Keep Guessing...");
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
