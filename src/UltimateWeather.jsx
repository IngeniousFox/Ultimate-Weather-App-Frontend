import {AppPage} from "./pages";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {startLoadingGeolocation, startLoadingTemperatureForecast, startLoadingWeatherForecast} from "./store";

export const UltimateWeather = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startLoadingGeolocation()).then(() => {
			dispatch(startLoadingWeatherForecast())
			// dispatch(startLoadingTemperatureForecast())
		})
	}, [])

	return (
		<>
			<AppPage />
		</>
	)
}