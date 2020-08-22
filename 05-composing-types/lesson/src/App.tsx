import React from 'react'
import logo from './logo.svg'
import './App.css'

interface User {
    firstName: string
    lastName: string
}

type NextUser = {
    firstName: string
    lastName: string
}

type Address = {
    streetName: string
    houseNumber: number
    country: string
}

type UserWithEmail = User & { email: string }

interface Company {
    legalName: string
    address: string
}

interface Person {
    name: string
    address: string
}

type Entity = Person | Company

const getEntityName = (entity: Entity) => {
    if ('name' in entity) {
        return entity.name
    } else {
        return entity.legalName
    }
}

export enum Color {
    RED = '#ff0000',
    GREEN = '#00ff00',
    BLUE = '#0000ff',
}

interface ButtonProps {
    children: React.ReactNode
    color: Color
}
export const Button = ({ children, color }: ButtonProps) => (
    <button style={{ background: color }}>{children}</button>
)

enum Role {
    ADMIN = 'Admin',
    EMPLOYEE = 'Employee',
    GUEST = 'Guest',
}

console.log(Object.values(Role), 'MY ROLE ENUM')

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    )
}

export default App
