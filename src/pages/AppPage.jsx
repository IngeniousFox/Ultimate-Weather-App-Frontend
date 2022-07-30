import {Loading, Navbar} from "../components";
import {useSelector} from "react-redux";
import {WeatherLayout} from "../layouts/WeatherLayout";

export const AppPage = () => {

	const {isLoading} = useSelector(state => state.weather)

	return (
		<>
			<Navbar />

			{
				(isLoading) ? (<Loading />) : (<WeatherLayout />)
			}
		</>
	)
}