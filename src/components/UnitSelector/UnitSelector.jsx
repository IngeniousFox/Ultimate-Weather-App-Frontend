import styles from "./UnitSelector.module.css"
import {useSelector} from "react-redux";

export const UnitSelector = () => {

    //TODO: Add functionality reload the entire app when changing the units and update the active class

    const {units} = useSelector(state => state.weather)

	return (
		<div>
            <button className={`${styles.unit} ${(units === "metric") ? styles.active : ""}`} disabled={units === "metric"} onClick={() => console.log("metric")}>Metric</button>
            <button className={`${styles.unit} ${(units === "imperial") ? styles.active : ""}`} disabled={units === "imperial"} onClick={() => console.log("imperial")}>Imperial</button>
        </div>
	)
}