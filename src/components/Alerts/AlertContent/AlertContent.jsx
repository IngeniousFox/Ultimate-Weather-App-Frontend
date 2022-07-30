import styles from "./AlertContent.module.css"
import {useSelector} from "react-redux";

export const AlertContent = ({alert}) => {

	const {timezoneOffset} = useSelector(state => state.weather)

	const alertStart = new Date(((alert.start + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))
	const alertEnd = new Date(((alert.end + timezoneOffset) * 1000) + (new Date().getTimezoneOffset() * 1000 * 60))

	return (
		<div className={styles.alertContentContainer}>
			<div className={styles.alertTimesContainer}>
				<span>{`Start time: ${('0'+alertStart.getHours()).slice(-2)}:${('0'+alertStart.getMinutes()).slice(-2)}`}</span>
				<span>{`End time: ${('0'+alertEnd.getHours()).slice(-2)}:${('0'+alertEnd.getMinutes()).slice(-2)}`}</span>
			</div>

			<p>{alert.description}</p>
		</div>
	)
}