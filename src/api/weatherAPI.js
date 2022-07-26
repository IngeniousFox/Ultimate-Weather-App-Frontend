import axios from "axios"

const weatherAPI = axios.create({
    baseURL: "https://localhost:7059/api/"
})

export const getWeatherForecast = async(latitude = "37.3754", longitude = "-5.9901", units = "metric", language = "en") => {

    const response = await weatherAPI.get("/WeatherForecast", {
        params : {
            latitude,
            longitude,
            units,
            language
        }
    })

    console.log(response.data)
}

export const getTemperatureForecast = async(latitude = "37.3754", longitude = "-5.9901", units = "metric", hours = 24) => {

    const response = await weatherAPI.get("/TemperaturePrevision", {
        params : {
            latitude,
            longitude,
            units,
            hours
        }
    })

    console.log(response.data)
}