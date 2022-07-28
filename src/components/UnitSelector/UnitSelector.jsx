import styles from "./UnitSelector.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setUnits, startLoadingTemperatureForecast, startLoadingWeatherForecast} from "../../store/index.js";

export const UnitSelector = () => {

    const {units} = useSelector(state => state.weather)
    const dispatch = useDispatch()

    const onUnitClick = (unitClicked) => {
        dispatch(setUnits(unitClicked))
        dispatch(startLoadingWeatherForecast())
        // dispatch(startLoadingTemperatureForecast())
    }

	return (
		<div>
            <button className={`${styles.unit} ${(units === "metric") ? styles.active : ""}`} disabled={units === "metric"} onClick={() => onUnitClick("metric")}>Metric</button>
            <button className={`${styles.unit} ${(units === "imperial") ? styles.active : ""}`} disabled={units === "imperial"} onClick={() => onUnitClick("imperial")}>Imperial</button>
        </div>
	)
}