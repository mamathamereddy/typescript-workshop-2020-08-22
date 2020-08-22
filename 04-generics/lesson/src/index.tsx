import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Vehicle, Electric, Gas } from './App'

const gasSpecs = {
    kmPerLiter: 39,
    typeOfFuel: 'diesel', // diesel or petrol
    getDateOfLastOilChange: () => 'YESTERDAY',
}

const electricSpecs: Electric = {
    sizeOfBattery: '100',
    range: 9999999,
    getNumberOfRecharges: (numberOfCharges: number) => numberOfCharges,
}

const vehicle = {
    topSpeed: 399,
    color: 'pink',
    registerNewOwner: () => 'BRAEDON OWNS THIS NOW',
    specs: electricSpecs,
}

ReactDOM.render(
    <React.StrictMode>
        <App vehicle={vehicle} />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
