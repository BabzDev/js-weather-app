class StorageClass {
    constructor() {
        this.city;
        this.defaultCity = 'London';
    }

    getLocationData(){
        const tempCity = localStorage.getItem('city');
        if (tempCity === null){
            this.city = this.defaultCity;
        } else {
            this.city = tempCity;
        }

        return this.city;
    }

    setLocationDate(city){
        localStorage.setItem('city', city);
    }
}