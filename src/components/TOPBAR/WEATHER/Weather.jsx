import React, { useEffect, useState } from 'react'

const Weather = () => {

    // get user location in [lat, lon] format
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });


            // fetch weather data from api
            await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&APPID=5ee92ee5f758250cf89bb644e3230613&units=metric`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat, long])


    return (
        <>
            {(typeof data.main != 'undefined') ? (
                <div style={{ display:"flex", justifyContent:'center', alignItems:'center' }}>
                    <div>{data.name}</div>
                    <div id='weather-icon'>
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
                    </div>
                    <div>{data.main.temp} &deg;C</div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Weather