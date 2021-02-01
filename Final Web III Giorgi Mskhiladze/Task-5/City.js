class City {
    constructor(city) {
        this.city = city;
        this.apiKey = "4d8fb5b93d4af21d66a2948710284366";
    }

    async getWeather() {
        const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
        );
        return await response.json();
    }
}
