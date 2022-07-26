import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		isLoading: false,
		timezoneOffset: 0,
		currentWeather: {},
		hourlyWeather: [],
		weatherAlerts: [],
		temperatureForecast: [],
	},
	reducers: {
		setLoadingState: (state, action) => {
			state.isLoading = action.payload
		},
	}
})

export const { setLoadingState } = weatherSlice.actions