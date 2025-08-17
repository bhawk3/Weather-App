const streetAddress = document.getElementById("street-address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const submitBtn = document.getElementById("submit-btn");

fetch("https://api.weather.gov/")
	.then((response) => response.json)
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

/*async function weatherData() {
	const response = await fetch("https://api.weather.gov/");
	const data = await response.json;
	console.log(data);
}*/
