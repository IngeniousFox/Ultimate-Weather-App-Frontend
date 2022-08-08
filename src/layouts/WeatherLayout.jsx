import styles from "./WeatherLayout.module.css"
import {AlertList, CurrentWeatherCard, DailyWeatherList, HourlyWeatherList, TemperatureChart} from "../components";

export const WeatherLayout = () => {
	return (
		<main className={styles.container}>
			<CurrentWeatherCard />
			<AlertList />
			<HourlyWeatherList />
			<DailyWeatherList />
			<TemperatureChart />
        </main>
	)
}