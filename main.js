console.log("konjo!");

const hangmanWord = [];

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function(evt) {
  hangmanWord.push(document.querySelector(".text"));
  console.log("konjo");
  event.preventDefault(submitButton);
});
