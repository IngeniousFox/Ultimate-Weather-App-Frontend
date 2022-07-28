import axios from "axios"

const getIP = async() => {
    const {data} = await axios.get("https://api.ipify.org/?format=json")
    return data.ip

}

export const getCurrentCity = async() => {
    const ip = await getIP()
    const response = await axios.get(`https://geolocation-db.com/json/${ip}`)

    return response
}