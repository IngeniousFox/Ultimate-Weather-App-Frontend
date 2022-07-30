import styles from "./CurrentWeatherCard..module.css"
import {useSelector} from "react-redux";

export const CurrentWeatherCard = () => {

	const {currentCity, timezoneOffset, currentWeather, units} = useSelector(state => state.weather)

	const sunriseDate = new Date(((currentWeather.sunrise + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))
	const sunsetDate = new Date(((currentWeather.sunset + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))
	const time = new Date(((currentWeather.dt + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))

	return (
		<div className={styles.card}>
			<div className={styles.cityContainer}>
				<h2 className={styles.cityName}>{currentCity.label}</h2>
				<span className={styles.cityHour}>{`Local time: ${('0'+time.getHours()).slice(-2)}:${('0'+time.getMinutes()).slice(-2)}`}</span>
			</div>

			<div className={styles.sunriseSunsetContainer}>
				<img alt="Sunrise icon" src="https://openweathermap.org/img/wn/01d@2x.png" />
				<span>{`${('0'+sunriseDate.getHours()).slice(-2)}:${('0'+sunriseDate.getMinutes()).slice(-2)}`}</span>
				<img alt="Sunset icon" src="https://openweathermap.org/img/wn/01n@2x.png" />
				<span>{`${('0'+sunsetDate.getHours()).slice(-2)}:${('0'+sunsetDate.getMinutes()).slice(-2)}`}</span>
			</div>

			<div className={styles.forecastContainer}>
				<img alt="Current weather icon" src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
				<div className={styles.temperaturesContainer}>
					<span className={styles.realTemperature}>{`${parseInt(currentWeather.temp)} ${units === "metric" ? "ºC" : "ºF"}`}</span>
					<span className={styles.feelsTemperature}>{`Feels like ${parseInt(currentWeather.feels_like)} ${units === "metric" ? "ºC" : "ºF"}`}</span>
				</div>
			</div>

			<div className={styles.extraInfoContainer}>
				<span>{`Humidity: ${currentWeather.humidity}%`}</span>
				<span>{`Wind speed: ${currentWeather.wind_speed} ${units === "metric" ? "m/s" : "ºmph"}`}</span>
				<span>{`Pressure: ${currentWeather.pressure} hpa`}</span>
				<span>{`Clouds: ${currentWeather.clouds} %`}</span>
			</div>
		</div>
	)
}