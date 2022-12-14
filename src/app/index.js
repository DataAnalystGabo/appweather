import { getWeather } from "./Weather.js";

document.querySelector('.weather__search').addEventListener('submit', (e)=>{
    e.preventDefault(); 
    const data = new FormData(form);
    const city = data.get('search');
    getWeather(city);
});