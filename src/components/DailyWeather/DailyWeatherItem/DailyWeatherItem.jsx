import styles from "./DailyWeatherItem.module.css"
import {useSelector} from "react-redux";

export const DailyWeatherItem = ({dayForecast}) => {

	const {units, timezoneOffset} = useSelector(state => state.weather)
	const forecastDate = new Date(((dayForecast.dt + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))

	return (
		<div className={styles.dayForecastContainer}>
			<span className={styles.forecastDate}>{`${('0' + forecastDate.getDate()).slice(-2)}/${('0' + (forecastDate.getMonth() + 1)).slice(-2)}`}</span>

			<img alt="Daily weather icon" src={`https://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`} />

			<div className={styles.temperatureContainer}>
				<span className={styles.maxTemperature}>{`${parseInt(dayForecast.temp.max)} ${units === "metric" ? "ºC" : "ºF"}`}</span>
				<span>/</span>
				<span className={styles.minTemperature}>{`${parseInt(dayForecast.temp.min)} ${units === "metric" ? "ºC" : "ºF"}`}</span>
			</div>

			<div className={styles.extraInfoContainer}>
				<span>{`Humidity: ${dayForecast.humidity}%`}</span>
				<span>{`Wind speed: ${dayForecast.wind_speed} ${units === "metric" ? "m/s" : "mph"}`}</span>
				<span>{`Pressure: ${dayForecast.pressure} hpa`}</span>
				<span>{`Clouds: ${dayForecast.clouds}%`}</span>
			</div>
		</div>
	)
}