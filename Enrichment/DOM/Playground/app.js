//selectors
const h1 = document.getElementById("main__div-heading");
console.log(h1);
h1.style.color = "green";

// document.getElementsByTagName();
const htest = document.querySelector("h1");
console.log(htest);

//create and add elements
const mainDiv = document.getElementById("main__div");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
const body = document.querySelector("body");
const newDiv = document.createElement("div");
body.appendChild(newDiv);
// mainDiv.appendChild(newParagraph);
newDiv.appendChild(newParagraph);
newDiv.classList.add("new-div");
newDiv.style.display = "flex";

//image
const img = document.createElement("img");
newDiv.appendChild(img);
img.src =
  "https://c4.wallpaperflare.com/wallpaper/92/460/849/your-name-kimi-no-na-wa-space-anime-wallpaper-preview.jpg";
