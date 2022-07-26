import styles from "./UnitSelector.module.css"
import {useSelector} from "react-redux";
import {getTemperatureForecast, getWeatherForecast} from "../../api/index.js";

export const UnitSelector = () => {

    //TODO: Add functionality reload the entire app when changing the units and update the active class

    const testAPI = () => {
        getWeatherForecast()
        getTemperatureForecast()
    }

	return (
		<div>
            <button className={`${styles.unit} ${styles.active}`} onClick={testAPI}>Metric</button>
            <button className={`${styles.unit}`}>Imperial</button>
        </div>
	)
}