import styles from "./WeatherLayout.module.css"
import {AlertList, CurrentWeatherCard, HourlyWeatherList} from "../components";

export const WeatherLayout = () => {
	return (
		<main className={styles.container}>
			<CurrentWeatherCard />
			<AlertList />
			<HourlyWeatherList />
        </main>
	)
}