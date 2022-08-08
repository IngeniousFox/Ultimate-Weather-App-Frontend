import styles from "./DailyWeatherList.module.css"
import {useSelector} from "react-redux";
import {DailyWeatherItem} from "../DailyWeatherItem/DailyWeatherItem";


export const DailyWeatherList = () => {

	const {dailyWeather} = useSelector(state => state.weather)

	return (
		<div className={styles.card}>
			{
				dailyWeather.map((day, index) => (<DailyWeatherItem key={day.dt} dayForecast={day} />))
			}
		</div>
	)
}