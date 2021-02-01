class Storage {
    constructor() {
        this.city;
    }

    getLocationData() {
        if (localStorage.getItem("city") !== null) {
            this.city = localStorage.getItem("city");
        }

        return this.city;
    }

    setLocationData(city) {
        localStorage.setItem("city", city);
    }
}
