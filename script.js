let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;
    if (buttonText === 'AC') {
      string = '';
    } else if (buttonText === 'DEL') {
      string = string.slice(0, -1);
    } else if (buttonText === '.') {
      if (!string.includes('.')) {
        string += buttonText;
      }
    } else if (['+', '-', '*', '/'].includes(buttonText)) {
      string += buttonText;
    } else if (buttonText === '=') {
      try {
        string = eval(string).toString();
      } catch (error) {
        string = 'Error';
      }
    } else {
      string += buttonText;
    }
    input.value = string;
  });
});
