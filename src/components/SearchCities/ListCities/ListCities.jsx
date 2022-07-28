import {CityItem} from "../CityItem/CityItem";
import styles from "./ListCities.module.css"
import {useSelector} from "react-redux";

export const ListCities = ({onResetForm}) => {

	const {currentSuggestedCities} = useSelector(state => state.weather)

	return (
		<>
			<div className={styles.citiesContainer}>
				{
					currentSuggestedCities.map((city) => {
						return (<CityItem key={city.id} city={city} onResetForm={onResetForm} />)
					})
				}
			</div>
		</>
	)
}