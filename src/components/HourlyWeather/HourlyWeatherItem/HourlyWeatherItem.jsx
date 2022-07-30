import styles from "./HourlyWeatherItem.module.css"
import {useSelector} from "react-redux";

export const HourlyWeatherItem = ({weather}) => {

	const {timezoneOffset} = useSelector(state => state.weather)

	const forecastHour = new Date(((weather.dt + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))

	return (
		<div className={styles.hourlyWeatherContainer}>
			<div className={styles.forecastContainer}>
				<span>{`${('0'+forecastHour.getHours()).slice(-2)}:00`}</span>
				<img alt="Hourly forecast" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
			</div>

			<span>{weather.temp}</span>
		</div>
	)
}