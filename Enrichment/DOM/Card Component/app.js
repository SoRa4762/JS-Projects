const data = [
  {
    title: "Kimi no Nawa",
    img: "https://c4.wallpaperflare.com/wallpaper/92/460/849/your-name-kimi-no-na-wa-space-anime-wallpaper-preview.jpg",
    description:
      "Kimi no Nawa is a Japanese animated series created by Makoto Shinkai.",
  },
  {
    title: "Naruto",
    img: "https://w0.peakpx.com/wallpaper/198/283/HD-wallpaper-minato-neon-naruto-black-shippuden-simple-hokage-anime.jpg",
    description:
      "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.",
  },
  {
    title: "Bleach",
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/10/bleach-thousand-year-blood-war-anime-season-2-art.jpg",
    description:
      "Bleach is a Japanese manga series written and illustrated by Tite Kubo",
  },
  {
    title: "Bleach",
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/10/bleach-thousand-year-blood-war-anime-season-2-art.jpg",
    description:
      "Bleach is a Japanese manga series written and illustrated by Tite Kubo",
  },
  {
    title: "Bleach",
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/10/bleach-thousand-year-blood-war-anime-season-2-art.jpg",
    description:
      "Bleach is a Japanese manga series written and illustrated by Tite Kubo",
  },
];

const cardContainer = document.getElementById("card-container");

data.map((card) => {
  //card div
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  //image div
  const imageDiv = document.createElement("div");
  imageDiv.className = "image";
  cardDiv.appendChild(imageDiv);

  //image
  const image = document.createElement("img");
  image.src = card.img;
  imageDiv.appendChild(image);

  //title
  const title = document.createElement("h1");
  title.textContent = card.title;
  cardDiv.appendChild(title);

  //desc
  const description = document.createElement("p");
  description.textContent = card.description;
  cardDiv.appendChild(description);

  //adding each card to container
  cardContainer.appendChild(cardDiv);
});
