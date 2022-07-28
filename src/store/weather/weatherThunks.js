import {getCoordinates} from "../../api/index.js";
import {setSuggestedCities} from "./weatherSlice.js";

export const startLoadingSuggestedCities = (addres) => {
    return async(dispatch) => {
        const {data: suggestions} = await getCoordinates(addres)
        dispatch(setSuggestedCities(suggestions))
    }
}