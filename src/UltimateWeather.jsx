import {AppLayout} from "./layouts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {startLoadingGeolocation} from "./store";

export const UltimateWeather = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startLoadingGeolocation())
	}, [])

	return (
		<>
			<AppLayout />
		</>
	)
}