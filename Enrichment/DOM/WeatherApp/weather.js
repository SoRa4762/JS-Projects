const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const city = document.getElementById("search").value;
  const apiKey = "f52ea92a537a5bb4cdf265831a4f8c80";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getWeather = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (city === "") return;

      if (city === "") {
        alert("Please enter a city name");
      }

      const result = document.querySelector("div.result");
      const cityName = document.getElementById("city-name");
      const temp = document.getElementById("temperature");
      const description = document.getElementById("description");
      result.style.display = "block";
      //   console.log(data.name);
      cityName.textContent = data.name;
      temp.textContent = data.main.temp;
      description.textContent = data.weather[0].description;
    } catch (error) {
      console.log("There was an error fetching weather API: ", error);
    }
  };
  getWeather();
});
