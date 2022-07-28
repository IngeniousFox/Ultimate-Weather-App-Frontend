import { createSlice } from '@reduxjs/toolkit';
import {temperatureForecast} from "./temperatureForecastTemplate.js";

export const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		isLoading: false,
		units: "metric",
		timezoneOffset: 0,
		currentCity: {},
		currentWeather: {},
		hourlyWeather: [],
		weatherAlerts: [],
		temperatureForecast: temperatureForecast,
		currentSuggestedCities: []
	},
	reducers: {
		setLoadingState: (state) => {
			state.isLoading = true
		},
		setSuggestedCities: (state, action) => {
			state.currentSuggestedCities = action.payload
		},
		setCurrentCityFromSuggestedCities: (state, action) => {
			const selectedCity = state.currentSuggestedCities.filter((city) => {
				if (city.id === action.payload) {
					return city
				}
			})[0]
			delete selectedCity.id
			state.currentCity = selectedCity
			state.currentSuggestedCities = []
		},
		setCurrentCityFromGeolocation: (state, action) => {
			state.currentCity = action.payload
		},
		setWeatherForecast: (state, action) => {
			state.timezoneOffset = action.payload.timezone_offset
			state.currentWeather = action.payload.current
			state.hourlyWeather = action.payload.hourly.slice(0, 13)
			state.weatherAlerts = action.payload.alerts === undefined ? [] : action.payload.alerts

			state.isLoading = false
		},
		setTemperatureForecast: (state, action) => {
			state.temperatureForecast = action.payload
		},
		setUnits: (state, action) => {
			state.units = action.payload
		}
	}
})

export const { setLoadingState, setSuggestedCities, setCurrentCityFromSuggestedCities, setCurrentCityFromGeolocation, setWeatherForecast, setTemperatureForecast, setUnits } = weatherSlice.actions