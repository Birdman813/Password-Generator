const passwordLength = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateButton = document.querySelector("button");
const password = document.getElementById("password");
const length = document.getElementById("length");
const copied = document.getElementById("copied");
const strengthText = document.getElementById("strength-text");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

function generatePassword() {
  let checkedNumber = 0;
  let characterSet = "";
  if (uppercase.checked) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    checkedNumber++;
  }
  if (lowercase.checked) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
    checkedNumber++;
  }
  if (numbers.checked) {
    characterSet += "0123456789";
    checkedNumber++;
  }
  if (symbols.checked) {
    characterSet += "!@#$%^&*()-_+={[}];:?/.,<>";
    checkedNumber++;
  }

  let randomPassword = "";

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    randomPassword += characterSet[randomIndex];
  }
  password.innerHTML = randomPassword;
  copied.innerHTML = "";

  if (checkedNumber == 1) {
    strengthText.innerHTML = "TOO WEAK";
    box1.style.backgroundColor = "#F64A4A";
    box1.style.border = "none";
    box2.style.backgroundColor = "";
    box2.style.border = "";
    box3.style.backgroundColor = "";
    box3.style.border = "";
    box4.style.backgroundColor = "";
    box4.style.border = "";
  }
  if (checkedNumber == 2) {
    strengthText.innerHTML = "WEAK";
    box1.style.backgroundColor = "#FB7C58";
    box1.style.border = "none";
    box2.style.backgroundColor = "#FB7C58";
    box2.style.border = "none";
    box3.style.backgroundColor = "";
    box3.style.border = "";
    box4.style.backgroundColor = "";
    box4.style.border = "";
  }
  if (checkedNumber == 3) {
    strengthText.innerHTML = "MEDIUM";
    box1.style.backgroundColor = "#F8CD65";
    box1.style.border = "none";
    box2.style.backgroundColor = "#F8CD65";
    box2.style.border = "none";
    box3.style.backgroundColor = "#F8CD65";
    box3.style.border = "none";
    box4.style.backgroundColor = "";
    box4.style.border = "";
  }
  if (checkedNumber == 4) {
    strengthText.innerHTML = "STRONG";
    box1.style.backgroundColor = "#A4FFAF";
    box1.style.border = "none";
    box2.style.backgroundColor = "#A4FFAF";
    box2.style.border = "none";
    box3.style.backgroundColor = "#A4FFAF";
    box3.style.border = "none";
    box4.style.backgroundColor = "#A4FFAF";
    box4.style.border = "none";
  }
}

function changePasswordLength() {
  length.innerHTML = passwordLength.value;
}

function copyText() {
  copied.innerHTML = "Copied";
}
