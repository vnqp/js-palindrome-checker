const palindromeForm = document.getElementById("palindrome-form");
const palindromeFormInput = document.getElementById("text-input");
const palindromeFormSubmit = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function checkPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const strChars = str.split('');
  const strCharsReversed =  strChars.toReversed();

  console.log(strChars);
  console.log(strCharsReversed);

  for (let i = 0; i < strChars.length; i++) {
    if(strChars[i] !== strCharsReversed[i]) {
      return false;
    }
  }

  return true;
}

function showResults(key, str) {
  if (key) {
    resultText.innerHTML = `${str} is a palindrome`;
  } else {
    resultText.innerHTML = `${str} is not a palindrome`;
  }
}

function runChecker() {
  const inputText = palindromeFormInput.value;
  palindromeFormInput.value = "";

  if (!inputText) {
    alert("Please input a Value");
    return;
  }

  if (checkPalindrome(inputText)) {
    showResults(true, inputText);
  } else {
    showResults(false, inputText);
  }
}

palindromeFormInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    runChecker();
  }
})
palindromeFormSubmit.addEventListener("click", (e) => {
  runChecker();
});