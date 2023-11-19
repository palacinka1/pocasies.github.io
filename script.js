document.addEventListener("DOMContentLoaded", () => {
    const pragueUrl = 'https://api.jsemtobias.cz//pocasi?m=Praha';
    const sokolovUrl = 'https://api.jsemtobias.cz//pocasi?m=Sokolov';

    const updateWeather = (location, temperatureId, descriptionId, regionId, iconId) => {
        fetch(location)
            .then(response => response.json())
            .then(data => {
                document.getElementById(temperatureId).textContent = `${data.teplota}°C`;
                document.getElementById(descriptionId).textContent = data.pocasi;
                document.getElementById(regionId).textContent = ` ${data.region}`;

                document.getElementById(iconId).src = `https://example.com/${data.icon}.png`;
            })
            .catch(error => console.log('Chyba při načítání dat o počasí:', error));
    };

    updateWeather(pragueUrl, 'prague-location', 'prague-temperature', 'prague-region', 'prague-icon');
    updateWeather(sokolovUrl, 'sokolov-location', 'sokolov-temperature', 'sokolov-region', 'sokolov-icon');
});
