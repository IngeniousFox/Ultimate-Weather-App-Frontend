import styles from "./AlertList.module.css"
import {useSelector} from "react-redux";
import {Alert} from "../Alert/Alert";

export const AlertList = () => {

    const {weatherAlerts} = useSelector(state => state.weather)

	return (
		<div className={styles.card}>
            <h2 className={styles.title}>Alerts</h2>
			{
				(weatherAlerts.length <= 0) ? (<div className={styles.noAlerts}>There are no alerts</div>) : (weatherAlerts.map((alert) => (<Alert key={alert.start} alert={alert} />)))
			}
        </div>
	)
}