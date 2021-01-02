class UI {
    constructor(){
        this.locationSelector = document.getElementById('w-location');
        this.humiditySelector = document.getElementById('w-humidity');
        this.windSelector = document.getElementById('w-wind');
        this.feelsLikeSelector = document.getElementById('w-feels-like');
        this.pressureSelector = document.getElementById('w-pressure');
        this.tempSelector = document.getElementById('w-string');
        this.descSelector = document.getElementById('w-desc');
        this.sunriseSelector = document.getElementById('w-sunrise');
    }
    
    populateUI(data) {

        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const feelsLike = Math.round(data.main.feels_like *10) /10 ;
        const pressure = data.main.pressure;
        const location = data.name;
        const country = data.sys.country;
        const temp = Math.round(data.main.temp * 10)/10 ;
        const description = data.weather[0].description;
        const sunrise = new Date(data.sys.sunrise * 1000)

        this.locationSelector.innerHTML = `${location}, ${country}`;
        this.humiditySelector.innerHTML = `Humidity: ${humidity} %`;
        this.windSelector.innerHTML = `Wind: ${wind} km/h`;
        this.feelsLikeSelector.innerHTML = `Feels like: ${feelsLike} &deg; C`;
        this.pressureSelector.innerHTML = `Pressure: ${pressure} Bars`;
        this.tempSelector.innerHTML = `Temp: ${temp} &deg; C`;
        this.descSelector.innerHTML = `${description}`;
        this.sunriseSelector.innerHTML = `Sunrise: ${sunrise.toLocaleString()}`;
    }


}