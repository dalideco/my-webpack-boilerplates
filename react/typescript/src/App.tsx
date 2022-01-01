import React from 'react'
import './styles/app.scss'
import { Routes, Route, Link } from 'react-router-dom'


import Home from './routes/Home'
import About from './routes/About'


export default function App() {
    return (
        <div>

            <h1>Welcome to dalideco's typescript webpack configuration</h1>

            <ul>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

        </div>
    )
}
