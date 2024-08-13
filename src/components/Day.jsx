import React from "react";

const Day = ({ city, index }) => {
    let date = new Date(city.DailyForecasts[index].Date);

    let day = date.getDate().toString();
    let months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Майа",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];

    let month = date.getMonth();
    let icons = {
        1: <i className="fas fa-sun"></i>,
        2: <i className="fas fa-sun"></i>,
        3: <i className="fas fa-sun"></i>,
        4: <i className="fas fa-sun"></i>,
        5: <i className="fas fa-sun"></i>,
        6: <i class="fas fa-cloud-sun"></i>,
        20: <i class="fas fa-cloud-sun"></i>,
        21: <i class="fas fa-cloud-sun"></i>,
        23: <i class="fas fa-cloud-sun"></i>,
        7: <i class="fas fa-cloud"></i>,
        8: <i class="fas fa-cloud-showers-heavy"></i>,
        11: <i class="fas fa-cloud-showers-heavy"></i>,
        12: <i class="fas fa-cloud-showers-heavy"></i>,
        18: <i class="fas fa-cloud-showers-heavy"></i>,
        19: <i class="fas fa-cloud-showers-heavy"></i>,
        25: <i class="fas fa-cloud-showers-heavy"></i>,
        26: <i class="fas fa-cloud-showers-heavy"></i>,
        29: <i class="fas fa-cloud-showers-heavy"></i>,
        13: <i class="fas fa-cloud-sun-rain"></i>,
        14: <i class="fas fa-cloud-sun-rain"></i>,
        15: <i class="fas fa-cloud-sun-rain"></i>,
        16: <i class="fas fa-cloud-sun-rain"></i>,
        17: <i class="fas fa-cloud-sun-rain"></i>,
    };

    return (
        <div className="day">
            <div className="top">
                <div className="date">
                    {day} {months[month]}
                </div>
                <div className="icon">
                    {icons[city.DailyForecasts[index].Day.Icon]}
                </div>
                <div className="phrase">
                    {city.DailyForecasts[index].Day.IconPhrase}
                </div>
            </div>
            <div className="bottom">
                <div className="icon-day">
                    <div className="icon">
                        <i className="far fa-sun"></i>
                    </div>
                    <div className="temperature">
                        {city.DailyForecasts[index].Temperature.Maximum.Value}
                        &deg;C
                    </div>
                </div>
                <div className="icon-night">
                    <div className="icon">
                        <i className="far fa-moon"></i>
                    </div>
                    <div className="temperature">
                        {city.DailyForecasts[index].Temperature.Minimum.Value}
                        &deg;C
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day;
