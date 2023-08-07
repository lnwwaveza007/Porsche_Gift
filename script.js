// Matrix characters
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charactersArray = characters.split("");

// Matrix configuration
const fontSize = 16;
const speed = 3;

// Create the canvas and context
const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Calculate the number of columns and rows
const columns = Math.floor(canvas.width / fontSize);
const rows = Math.floor(canvas.height / fontSize);

// Initialize the columns
const matrix = [];
for (let i = 0; i < columns; i++) {
  matrix[i] = 1;
}

// Matrix animation
function drawMatrix() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#00FF00";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < matrix.length; i++) {
    const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    context.fillText(text, i * fontSize, matrix[i] * fontSize);

    if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrix[i] = 0;
    }

    matrix[i]++;
  }
}

// Render loop
function animateMatrix() {
  drawMatrix();
  requestAnimationFrame(animateMatrix);
}

// Start the animation
animateMatrix();

const textElement = document.getElementById('text');
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Enter password';
passwordInput.style.marginTop = '10px';
passwordInput.style.width = '200px';
passwordInput.style.padding = '5px';
passwordInput.style.fontSize = '16px';
passwordInput.style.fontFamily = 'Courier New, monospace';
passwordInput.style.color = '#0f0';
passwordInput.style.backgroundColor = '#000';
passwordInput.style.border = '2px solid #0f0';
passwordInput.style.borderRadius = '5px';
passwordInput.style.outline = 'none';

let index2 = 0;
let isPasswordEntered = false;

function typeText2() {
  textElement1.textContent = "Hint : Your birthday format like this xx/xx\n"
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else {
    textElement.appendChild(passwordInput);
    passwordInput.focus();
    passwordInput.addEventListener('keyup', checkPassword);
  }
}

function checkPassword(event) {
  if (event.key === 'Enter') {
    const password = event.target.value;
    if (password === '08/08') {
      window.location.href = 'real_index.html';
    } else {
      textElement.textContent = 'Access Denied';
    }
    isPasswordEntered = true;
    passwordInput.removeEventListener('keyup', checkPassword);
  }
}

const textElement1 = document.getElementById('text');
const text = "Accessing mainframe...\nBypassing security protocols...\nExtracting sensitive data...\nSystem compromised. . .";

let index = 0;
function typeText() {
  if (index < text.length) {
    textElement1.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }else{
    typeText2();
  }
}

typeText();
