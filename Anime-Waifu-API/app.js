const waifuImageDiv = document.getElementById("images");
const getImageBtn = document.getElementById("getImageBtn");

const getImage = () => {
  fetch("https://api.waifu.pics/sfw/waifu")
    .then((response) => response.json())
    .then((json) => {
      waifuImageDiv.innerHTML = `<img src = "${json.url}" height = "100%" width = "100%" />`;
    });
};

getImageBtn.onclick = () => getImage();
// console.log(waifuImageDiv)
