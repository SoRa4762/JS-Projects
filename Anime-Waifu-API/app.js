const waifuImageDiv = document.getElementById("images");
const getImageBtn = document.getElementById("getImageBtn");

const getImage = async () => {
  try {
    await fetch("https://api.waifu.pics/sfw/waifu")
      .then((response) => response.json())
      .then((json) => {
        waifuImageDiv.innerHTML = `<img src = "${json.url}" height = "100%" width = "100%" />`;
      });
  } catch (err) {
    console.log("There was an error trying to fetch Waifu Images: ", err);
  }
};

getImageBtn.onclick = () => getImage();
// console.log(waifuImageDiv)
