import styles from "./HourlyWeatherItem.module.css"
import {useSelector} from "react-redux";

export const HourlyWeatherItem = ({weather}) => {

	const {timezoneOffset, units} = useSelector(state => state.weather)

	const forecastHour = new Date(((weather.dt + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))

	return (
		<div className={styles.hourlyWeatherContainer}>

			<div className={styles.time}>{`${('0'+forecastHour.getHours()).slice(-2)}:00`}</div>

			<img className={styles.forecastImage} alt="Hourly forecast" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>

			<span className={styles.realTemperature}>{`${parseInt(weather.temp)} ${units === "metric" ? "ºC" : "ºF"}`}</span>

			<div className={styles.feelsLikeTemperatureContainer}>
				<span>{weather.weather[0].description}</span>
				<span>{`Feels like ${parseInt(weather.feels_like)} ${units === "metric" ? "ºC" : "ºF"}`}</span>
			</div>

			<span className={styles.humidity}>{`Humidity ${weather.humidity}%`}</span>

			<span className={styles.pressure}>{`Pressure ${weather.pressure} hpa`}</span>

			<div className={styles.windContainer}>
				<span>{`Wind speed ${weather.wind_speed} ${units === "metric" ? "m/s" : "mph"}`}</span>
				<span>{`Wind gust ${weather.wind_gust} ${units === "metric" ? "m/s" : "mph"}`}</span>
			</div>

			<span className={styles.uvi}>{`UVI ${parseInt(weather.uvi)}`}</span>

			<span className={styles.dew}>{`Dew point ${parseInt(weather.dew_point)} ${units === "metric" ? "ºC" : "ºF"}`}</span>

			<span className={styles.clouds}>{`Clouds ${weather.clouds}%`}</span>
		</div>
	)
}