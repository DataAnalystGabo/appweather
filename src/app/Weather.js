import { Ui } from "./Ui.js";

export function getWeather(city) {
    const APIKey = '8ab1f8a668d59b8309bc956ce8f471ca';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=es`;

    fetch(URL, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {

            if (response.cod == 404) {

                document.querySelector('.alert').classList.add('alert--active');

                setTimeout((
                ) => {

                    document.querySelector('.alert').classList.remove('alert--active');
                    
                }, 2000);



            } else {

                const icon = response.weather[0].icon;
                const timeZone = icon.charAt(icon.length - 1);

                const ui = new Ui;

                ui.render(response);

                if (timeZone === 'd') {

                    document.querySelector('.landscape__figure--night').classList.remove('landscape__figure--night--active');

                } else if (timeZone === 'n') {

                    document.querySelector('.landscape__figure--night').classList.add('landscape__figure--night--active');

                }
            }


        })
};