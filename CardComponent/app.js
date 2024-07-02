const data = [
  {
    image: "https://via.placeholder.com/150",
    title: "Card 1",
    description: "This is the description for card 1.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Card 2",
    description: "This is the description for card 2.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Card 3",
    description: "This is the description for card 3.",
  },
];

const cardContainer = document.getElementById("card-container");

data.map((item) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = item.image;
  card.appendChild(image);

  const title = document.createElement("h2");
  title.innerText = item.title;
  card.appendChild(title);

  const description = document.createElement("p");
  description.innerText = item.description;
  card.appendChild(description);

  cardContainer.appendChild(card);
});
