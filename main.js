var hangmanWord = [];

const createWord = function() {
  hangmanWord.push(document.getElementById("hangmanword").value);
  console.log(hangmanWord);
  createSpaces();
};

const createSpaces = function() {
  for (i = 0; i < hangmanWord[0].length; i++) {
    var space = document.createElement("P");
    var letter = document.createTextNode("_ ");
    space.appendChild(letter);
    document.body.appendChild(space);
  }
};
