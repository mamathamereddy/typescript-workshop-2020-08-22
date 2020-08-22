import React, { ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'

export interface Electric {
    sizeOfBattery: string
    range: number
    getNumberOfRecharges: (numberOfCharges: number) => number
}

export interface Gas {
    kmPerLiter: number
    typeOfFuel: string // diesel or petrol
    getDateOfLastOilChange: () => string
}

export interface Vehicle<TypeOfVehicle> {
    color: string
    topSpeed: number
    registerNewOwner: (ownerName: string) => void
    specs: TypeOfVehicle
}

interface Props {
    vehicle: Vehicle<Electric>
}

const App = (props: Props) => {
    const [value, setValue] = React.useState('')

    // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    // }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                sizeOfBattery: {props.vehicle.specs.sizeOfBattery}
                <input
                    type="text"
                    placeholder="really good input"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </header>
        </div>
    )
}

export default App
// todo: Implement the handle change method
// const [value, setValue] = React.useState('')

// const handleChange = (event:) => {
//   setValue(event.target.value)
// }
