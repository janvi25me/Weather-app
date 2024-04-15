function getWeather() {
    const key = '3XI6AHUtBM1xvUGTb9QXgms2eHtoIg07';
    const city = document.getElementById("city").value;
    const div = document.getElementById('result');

    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const locationKey = data[0].Key;
        return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`)
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        const temperature = data[0].Temperature.Metric.Value;
        const des = data[0].WeatherText;

        div.innerHTML = ` 
         <p>Temperature: ${temperature}°C</p>
         <p>Description: ${des}</p>
        `
    })
    .catch(error => {
        console.log('error is',error);
    })
}