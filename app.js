const storage = new StorageClass;
const weather = new Weather(storage.getLocationData());
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', e => changeLocation(e));

function getWeather(){
    weather.getWeather()
    .then(data => {
        ui.populateUI(data)})
    .catch(err => console.log(err));
}

function changeLocation(e){
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocationDate(city);
    getWeather();

    // Close pop up modal
    $('#locModal').modal('hide');

    e.preventDefault();
};