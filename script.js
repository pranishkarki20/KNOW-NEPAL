const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const textArray = ["breathtaking places", " rich cultures" , "fascinating histories", "delicious cuisines", "vibrant traditions"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 50;
let erasingSpeed = 50;
let pauseTime = 800; // Time to wait before erasing

function type() {
  const element = document.getElementById('typing-effect');
  if (textIndex < textArray.length) {
    currentText = textArray[textIndex];

    if (!isDeleting) {
      charIndex++;
      element.textContent = currentText.slice(0, charIndex);
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
      charIndex--;
      element.textContent = currentText.slice(0, charIndex);
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex++;
        setTimeout(type, pauseTime);
      } else {
        setTimeout(type, erasingSpeed);
      }
    }
  } else {
    textIndex = 0; // Reset to the beginning if all texts are typed
    setTimeout(type, pauseTime);
  }
}

type();
