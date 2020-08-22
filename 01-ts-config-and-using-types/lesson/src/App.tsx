import React from 'react'
import logo from './logo.svg'
import './App.css'

const pets: any[] = ['dog', 6, undefined]

const user = {
    first: 'braedon',
    last: 'gough',
}

const getUserName = (user: { first: string; last: string; age: number }) => {
    return user.first + user.last
}

getUserName(user)

const myName = 'braedon'
let otherName = 'andrada'
otherName = 7

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
