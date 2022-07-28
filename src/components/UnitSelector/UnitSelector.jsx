import styles from "./UnitSelector.module.css"
import {useSelector} from "react-redux";
import {getTemperatureForecast, getWeatherForecast} from "../../api/index.js";

export const UnitSelector = () => {

    //TODO: Add functionality reload the entire app when changing the units and update the active class

	return (
		<div>
            <button className={`${styles.unit} ${styles.active}`}>Metric</button>
            <button className={`${styles.unit}`}>Imperial</button>
        </div>
	)
}