export class Ui{
    constructor(){
        this.location           = document.querySelector('.weather__city');
        this.temp               = document.querySelector('.weather__temp');
        this.tempFeelsLike      = document.querySelector('.weather__value--tempfeelslike');
        this.wind               = document.querySelector('.weather__value--wind');
        this.humidity           = document.querySelector('.weather__value--humidity');
    }

    render(response){
        this.location.textContent           = response.name + ' / ' + response.sys.country;
        this.temp.textContent               = response.main.temp + ' °C';
        this.tempFeelsLike.textContent      = 'Senc térmica : ' + response.main.feels_like + ' °C ';
        this.wind.textContent               = 'Viento : '  + response.wind.speed + ' Km/h';
        this.humidity.textContent           = 'Humedad : ' + response.main.humidity + ' %';
     }
}