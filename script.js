const palindromeForm = document.getElementById("palindrome-form");
const palindromeFormInput = document.getElementById("text-input");
const palindromeFormSubmit = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function checkPalindrome(str) {
  const strChars = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
  console.log(strChars)
  const strCharsReversed =  strChars.toReversed();

  for (let i = 0; i < strChars.length; i++) {
    if(strChars[i] !== strCharsReversed[i]) {
      return false;
    }
  }

  return true;
}

function showResults(key, str) {
  resultText.innerHTML = key ? `<span class="bold">${str}</span> is a palindrome` 
  : `<span class="bold">${str}</span> is not a palindrome`

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