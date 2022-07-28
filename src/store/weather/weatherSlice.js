import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		isLoading: false,
		timezoneOffset: 0,
		currentCity: {},
		currentWeather: {},
		hourlyWeather: [],
		weatherAlerts: [],
		temperatureForecast: [],
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
		}
	}
})

export const { setLoadingState, setSuggestedCities, setCurrentCityFromSuggestedCities, setCurrentCityFromGeolocation } = weatherSlice.actions