import React from 'react'
import ReactDOM from 'react-dom/client'
import {UltimateWeather} from "./UltimateWeather";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UltimateWeather />
    </React.StrictMode>
)