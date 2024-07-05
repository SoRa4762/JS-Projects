const button = document.getElementById("submit");
const title = document.getElementById("anime-title");
const description = document.getElementById("paragraph");
const image = document.getElementById("image");
const result = document.getElementById("result");

// console.log(input.value);

const submit = async () => {
  const input = document.getElementById("search").value;
  console.log(input);

  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${input}`);
  const data = await response.json();
  result.style.display = "block";
  title.textContent = data.data[0]?.title[0]?.title;
  description.textContent = data.data[0]?.synopsis[0]?.synopsis;
  image.src = data.data[0]?.image_url;
};
