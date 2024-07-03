document
  .getElementById("get-weather-btn")
  .addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
    if (city === "") return;

    const apiKey = "f52ea92a537a5bb4cdf265831a4f8c80"; // Replace with your OpenWeatherMap API key

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.cod === "404") {
          alert("City not found!");
          return;
        }

        document.getElementById("city-name").textContent = data.name;
        document.getElementById(
          "temperature"
        ).textContent = `Temperature: ${data.main?.temp} °C`;
        document.getElementById("weather-description").textContent =
          data.weather[0]?.description;

        document.getElementById("weather-result").style.display = "block";
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to retrieve weather data. Please try again later.");
      }
    };

    getData();
  });
