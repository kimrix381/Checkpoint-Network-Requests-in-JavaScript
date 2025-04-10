const apiKey = "368278b0199047159fb84032251004";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    city
  )}&aqi=no`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="https:${data.current.condition.icon}" alt="Weather icon">
            `;
      document.getElementById("weatherResult").innerHTML = weatherInfo;
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p>${error.message}</p>`;
    });
}
