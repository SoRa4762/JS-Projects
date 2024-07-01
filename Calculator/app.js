const display = document.getElementById("display");
console.log(display);
const appendToDisplay = (input) => {
  display.value += input;
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
};

const clearDisplay = () => {
  display.value = "";
};
