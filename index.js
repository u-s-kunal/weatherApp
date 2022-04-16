// for weather app //

let weather = {
	"apiKey": "707141a13bed45ba84281618220604",
	fetchWeather: function (city) {
		fetch("https://api.weatherapi.com/v1/current.json?key=707141a13bed45ba84281618220604&q="
			+ city
			+ "&aqi="
			+ this.apiKey
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data.location;
		const { icon, text } = data.current.condition;
		const { temp_c, humidity } = data.current;
		const { wind_kph } = data.current;
		console.log(name, icon, text, temp_c, humidity, wind_kph);
		document.getElementById("city").innerHTML = "in  " + name;
		document.getElementById("temp").innerHTML = temp_c + "°c";
		document.querySelector(".icon").src = icon;
		document.querySelector(".description").innerHTML = text;
		document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
		document.querySelector(".w-speed").innerHTML = "Wind Speed: " + wind_kph + "Km/h";


	},
	search: function () {
		this.fetchWeather(document.querySelector(".search").value);

	}
};

// for weather search js // 

document.querySelector(".search-btn").addEventListener("click", function () {
	weather.search();
})

// enter button js //

document.querySelector(".search").addEventListener("keyup", function (event) {

	if (event.key == "Enter") {
		weather.search();
	}
});

weather.fetchWeather("Nasik");
