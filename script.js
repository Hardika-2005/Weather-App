async function getWeather() {

    let city = document.getElementById("city").value.trim();
    let apiKey = "6cc41500507be55c1bcbd3c155c69e4d";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod == 200) {

            let weather = data.weather[0].main;
            let icon = "";

            // 🌤 Weather icons
            if (weather == "Clear") icon = "☀";
            else if (weather == "Clouds") icon = "☁";
            else if (weather == "Rain") icon = "🌧";
            else icon = "🌦";

            document.getElementById("result").innerHTML =
                `${icon} <br>
                🌡 Temperature: ${data.main.temp}°C <br>
                🌤 Weather: ${weather} <br>
                💨 Wind: ${data.wind.speed} m/s`;

            // 🌈 Change background
            if (weather == "Clear")
                document.body.style.background = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
            else if (weather == "Clouds")
                document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
            else if (weather == "Rain")
                document.body.style.background = "linear-gradient(to right, #4e54c8, #8f94fb)";
        }
        else {
            document.getElementById("result").innerHTML =
                `❌ ${data.message}`;
        }

    } catch (error) {
        document.getElementById("result").innerHTML =
            "⚠️ Something went wrong!";
    }
}