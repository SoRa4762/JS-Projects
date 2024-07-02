const lightRed = document.getElementById("light__red");
const lightYellow = document.getElementById("light__yellow");
const lightGreen = document.getElementById("light__green");

const changeToRed = () => {
  lightRed.style.backgroundColor = "red";
  lightYellow.style.backgroundColor = "black";
  lightGreen.style.backgroundColor = "black";
};

const changeToYellow = () => {
  lightRed.style.backgroundColor = "black";
  lightYellow.style.backgroundColor = "yellow";
  lightGreen.style.backgroundColor = "black";
};

const changeToGreen = () => {
  lightRed.style.backgroundColor = "black";
  lightYellow.style.backgroundColor = "black";
  lightGreen.style.backgroundColor = "green";
};

const changeColor = () => {
  changeToRed();
  setTimeout(() => {
    changeToYellow();
    setTimeout(() => {
      changeToGreen();
      setTimeout(() => {
        changeColor();
      }, 1000);
    }, 1000);
  }, 1000);
};

changeColor();
