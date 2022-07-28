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
		currentSuggestedCities: [
			{
				id: "cfd82ddd-c487-4710-a134-d4bb1fc72d4a",
				latitude: "47.150366",
				longitude: "8.904277",
				label: "March, SZ, Switzerland"
			},
			{
				id: "fbf16aac-537b-4798-a2cf-fb061be54f8b",
				latitude: "-26.85399",
				longitude: "23.05264",
				label: "March, NC, South Africa"
			},
			{
				id: "9ba7c158-8e0e-4ffb-8710-5e90f1e8af70",
				latitude: "37.52845",
				longitude: "70.4482",
				label: "March, BD, Afghanistan"
			},
			{
				id: "9fcad82b-b8cf-4ee8-84a2-214c8309b6b8",
				latitude: "37.37598",
				longitude: "70.6676",
				label: "March, BD, Afghanistan"
			}
		]
	},
	reducers: {
		setLoadingState: (state, action) => {
			state.isLoading = true
		},
		setSuggestedCities: (state, action) => {
			state.currentSuggestedCities = action.payload
		},
		setSelectedCity: (state, action) => {
			state.currentCity = state.currentSuggestedCities.filter((city) => {
				if (city.id === action.payload) {
					return city
				}
			})[0]
			state.currentSuggestedCities = []
		}
	}
})

export const { setLoadingState, setSuggestedCities, setSelectedCity } = weatherSlice.actions