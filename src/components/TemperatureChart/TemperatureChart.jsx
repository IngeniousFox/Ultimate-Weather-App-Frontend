import styles from "./TemperatureChart.module.css"
import {useSelector} from "react-redux";
import {useEffect} from "react";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const TemperatureChart = () => {

    const {temperatureForecast, timezoneOffset, units} = useSelector(state => state.weather)

    useEffect(() => {
        const chartContext = document.getElementById("chart").getContext("2d")
        const temperatureChart = new Chart(chartContext, {
            type: "line",
            data: {
                labels: temperatureForecast.map(temperature => {
                    const time = new Date(((temperature.data[0].dt + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))
                    return `${('0'+time.getHours()).slice(-2)}:${('0'+time.getMinutes()).slice(-2)}`
                }),
                datasets: [{
                    label: `Temperature in ${units === "metric" ? "ºC" : "ºF"}`,
                    data: temperatureForecast.map(temperature => {
                        return temperature.data[0].temp.toFixed(1)
                    }),
                    fill: false,
                    borderColor: "red",
                    backgroundColor: "red",
                    tension: 0.2
                }]
            },
            options: {
                scales: {
                    y: {
                        type: "linear",
                        offset: true
                    }
                }
            }
        })

        return () => {
            temperatureChart.destroy()
        }
    }, [temperatureForecast])

	return (
		<div className={styles.card}>
            <h2 className={styles.title}>Temperature Forecast</h2>
            <canvas id="chart"></canvas>
        </div>
	)
}