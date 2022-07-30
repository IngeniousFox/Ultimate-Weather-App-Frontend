import styles from "./HourlyWeatherList.module.css"
import {useSelector} from "react-redux";
import {HourlyWeatherItem} from "../HourlyWeatherItem/HourlyWeatherItem";

export const HourlyWeatherList = () => {

	const {hourlyWeather} = useSelector(state => state.weather)

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>Hourly Weather</h2>
			{
				hourlyWeather.map((hourWeather) => (<HourlyWeatherItem key={hourWeather.dt} weather={hourWeather} />))
			}
		</div>
	)
}