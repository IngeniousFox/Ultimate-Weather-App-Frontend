import {getCoordinates, getCurrentCity, getTemperatureForecast, getWeatherForecast} from "../../api/index.js";
import {
    setCurrentCityFromGeolocation,
    setLoadingState,
    setSuggestedCities, setTemperatureForecast,
    setWeatherForecast
} from "./weatherSlice.js";

export const startLoadingSuggestedCities = (addres) => {
    return async(dispatch) => {
        const {data: suggestions} = await getCoordinates(addres)
        dispatch(setSuggestedCities(suggestions))
    }
}

export const startLoadingGeolocation = () => {
    return async(dispatch) => {
        const {data: geolocationCity} = await getCurrentCity()

        const currentCity = {
            latitude: geolocationCity.latitude.toString(),
            longitude: geolocationCity.longitude.toString(),
            label: `${geolocationCity.city}, ${geolocationCity.region}, ${geolocationCity.country_name}`
        }
        dispatch(setCurrentCityFromGeolocation(currentCity))
    }
}

export const startLoadingWeatherForecast = () => {
    return async(dispatch, getState) => {
        dispatch(setLoadingState())
        const {currentCity, units} = getState().weather
        const {data} = await getWeatherForecast(currentCity.latitude, currentCity.longitude, units)

        dispatch(setWeatherForecast(data))
    }
}

export const startLoadingTemperatureForecast = () => {
    return async(dispatch, getState) => {
        const {currentCity, units} = getState().weather
        const {data} = await getTemperatureForecast(currentCity.latitude, currentCity.longitude, units)

        console.log(data)
        dispatch(setTemperatureForecast(data))
    }
}