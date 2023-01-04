// define a couple of constants for our dark and light modes:
export {}
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';

// define a function that will toggle the theme of the website between dark and light mode:
function toggleTheme(mode: string) {
  if (mode === DARK_MODE) {
    // Set the body's background color to black and the text color to white:
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else if (mode === LIGHT_MODE) {
    // Set the body's background color to white and the text color to black:
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

// create a button that will toggle the theme when clicked:
const button = document.createElement('button');
button.innerHTML = 'Toggle Theme';

// Add an event listener to the button that will call the toggleTheme function when clicked:
button.addEventListener('click', () => {
  // check the current theme by getting the body's background color:
  const currentTheme = document.body.style.backgroundColor;

  if (currentTheme === 'black') {
    toggleTheme(LIGHT_MODE);
  } else {
    toggleTheme(DARK_MODE);
  }
});

// add the button to the page:
document.body.appendChild(button);
