let string = "";
let memory = 0;

const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    switch (value) {
      case '=':
        try {
          string = eval(string).toString();
          inputField.value = string;
        } catch {
          inputField.value = "Error";
          string = "";
        }
        break;

      case 'C':
        string = "";
        inputField.value = "";
        break;

      case 'M+':
        try {
          memory += parseFloat(eval(string) || 0);
          string = "";
          inputField.value = "";
        } catch {
          inputField.value = "Error";
        }
        break;

      case 'M-':
        try {
          memory -= parseFloat(eval(string) || 0);
          string = "";
          inputField.value = "";
        } catch {
          inputField.value = "Error";
        }
        break;

      case 'MR':
        string = memory.toString();
        inputField.value = string;
        break;

      case 'MC':
        memory = 0;
        inputField.value = "";
        string = "";
        break;

      default:
        string += value;
        inputField.value = string;
    }
  });
});

// Dark mode toggle
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
