import {getCoordinates, getCurrentCity} from "../../api/index.js";
import {setCurrentCityFromGeolocation, setSuggestedCities} from "./weatherSlice.js";

export const startLoadingSuggestedCities = (addres) => {
    return async(dispatch) => {
        const {data: suggestions} = await getCoordinates(addres)
        dispatch(setSuggestedCities(suggestions))
    }
}

export const startLoadingGeolocation = () => {
    return async(dispatch) => {
        console.log("hola")
        const {data: geolocationCity} = await getCurrentCity()

        const currentCity = {
            latitude: geolocationCity.latitude.toString(),
            longitude: geolocationCity.longitude.toString(),
            label: `${geolocationCity.city}, ${geolocationCity.country_name}`
        }
        dispatch(setCurrentCityFromGeolocation(currentCity))
    }
}