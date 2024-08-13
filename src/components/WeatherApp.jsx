import React, { useEffect, useRef, useState } from "react";
import "../styles/weather.css";
import Day from "./Day";

const WeatherApp = () => {
    const [city, setCity] = useState({
        Headline: {
            EffectiveDate: "2024-08-17T07:00:00+04:30",
            EffectiveEpochDate: 1723861800,
            Severity: 4,
            Text: "Приятная погода в эти выходные",
            Category: "mild",
            EndDate: null,
            EndEpochDate: null,
            MobileLink:
                "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?unit=c",
            Link: "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?unit=c",
        },
        DailyForecasts: [
            {
                Date: "2024-08-13T07:00:00+04:30",
                EpochDate: 1723516200,
                Temperature: {
                    Minimum: {
                        Value: 26.8,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 35.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 1,
                    IconPhrase: "Солнечно",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Ясно",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=1&unit=c",
                Link: "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=1&unit=c",
            },
            {
                Date: "2024-08-14T07:00:00+04:30",
                EpochDate: 1723602600,
                Temperature: {
                    Minimum: {
                        Value: 28.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 34.8,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 1,
                    IconPhrase: "Солнечно",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Ясно",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=2&unit=c",
                Link: "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=2&unit=c",
            },
            {
                Date: "2024-08-15T07:00:00+04:30",
                EpochDate: 1723689000,
                Temperature: {
                    Minimum: {
                        Value: 23.4,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 34.7,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 1,
                    IconPhrase: "Солнечно",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Ясно",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=3&unit=c",
                Link: "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=3&unit=c",
            },
            {
                Date: "2024-08-16T07:00:00+04:30",
                EpochDate: 1723775400,
                Temperature: {
                    Minimum: {
                        Value: 22.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 31.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 1,
                    IconPhrase: "Солнечно",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Ясно",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=4&unit=c",
                Link: "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=4&unit=c",
            },
            {
                Date: "2024-08-17T07:00:00+04:30",
                EpochDate: 1723861800,
                Temperature: {
                    Minimum: {
                        Value: 19.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 30.5,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 1,
                    IconPhrase: "Солнечно",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Ясно",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=5&unit=c",
                Link: "http://www.accuweather.com/ru/af/benavsh-darreh/4076/daily-weather-forecast/4076?day=5&unit=c",
            },
        ],
    });
    const apikey = "JlcCKJcPs1k6oXhiMBMZ4kl6YC0dxwv8";
    let date = new Date(city.DailyForecasts[0].Date);
    let year = date.getFullYear().toString();
    const cityActive = useRef();
    const [select, setSelect] = useState("")

    useEffect(() => {
        fetchFn(4100);
        setSelect(cityActive.current)
    }, []);

    async function fetchFn(cityCode) {
        const response = await fetch(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${apikey}&language=ru&metric=true`
        );
        const json = await response.json();
        return setCity(json);
    }

    

    

    function active(e) {
        if (e.target.tagName !== "P") return;

        if (select) {
            select.classList.remove("active");
        }

        setSelect(e.target.parentNode)
        e.target.parentNode.classList.add("active");
    }

    return (
        <div className="weather__wrapper">
            <img
                className="fon"
                src="https://images.wallpaperscraft.ru/image/single/gory_les_tuman_159839_1920x1080.jpg"
                alt=""
                draggable="false"
            />
            <header>
                <div className="title">
                    <p>KNEIZOR WEATHER</p>
                </div>
                <div className="year">{year}</div>
            </header>
            <div className="text-info">{city.Headline.Text}</div>
            <main>
                <div className="main-info">
                    <div className="citys" onClick={(e) => active(e)}>
                        <div
                            ref={cityActive}
                            className="city active"
                            onClick={() => fetchFn(4100)}
                        >
                            <p>Ставрополь</p>
                        </div>
                        <div className="city" onClick={() => fetchFn(294021)}>
                            <p>Москва</p>
                        </div>
                        <div className="city" onClick={() => fetchFn(293686)}>
                            <p>Краснодар</p>
                        </div>
                        <div className="city" onClick={() => fetchFn(296363)}>
                            <p>Волгоград</p>
                        </div>
                    </div>
                </div>
                {city.DailyForecasts.map((i, index) => (
                    <Day key={index} city={city} index={index} />
                ))}
            </main>
        </div>
    );
};

export default WeatherApp;
