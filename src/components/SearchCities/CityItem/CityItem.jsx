import styles from "./CityItem.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCityFromSuggestedCities} from "../../../store";

export const CityItem = ({city, onResetForm}) => {

	const dispatch = useDispatch()

	const onCityClick = () => {
		onResetForm("")
		dispatch(setCurrentCityFromSuggestedCities(city.id))
	}

	return (
		<div className={styles.item} onClick={onCityClick}>{city.label}</div>
	)
}