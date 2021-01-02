class Weather {
    constructor(city){
        this.key = '5a6ceec105d08d361239fb6a33fd9279';
        this.city = city;
    }


    async getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric`
        const response = await fetch(url);
        const respondeData = await response.json();
        return respondeData;
    }

    changeLocation(city){
        this.city = city;
    }

}