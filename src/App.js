import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'



function App() {
    const [advice, setAdvice] = useState('')

    useEffect(() => {
        fetchAdvice()
    }, [])

    function fetchAdvice() {
        axios
            .get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip;
                setAdvice(advice)
                console.log(advice)
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div className="app">
            <div className="main">
                <div className="card">
                    <h1 className="head">{advice}</h1>
                    <button className="button" onClick={fetchAdvice}><span>Give me a free advice!</span></button>
                </div>
            </div>
        </div>
    )
}

export default App
