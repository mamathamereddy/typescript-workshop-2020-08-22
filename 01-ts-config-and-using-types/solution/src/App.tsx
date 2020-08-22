import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    const getUserName = (firstName: string, lastName?: string) =>
        `${firstName} ${lastName ?? 'No last name'}`

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
                <div>user: {getUserName('Braedon')}</div>
            </header>
        </div>
    )
}

export default App
