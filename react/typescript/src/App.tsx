import React , {useEffect, useState} from 'react'
import './styles/app.scss'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import img from './images/background.jpg'
import controllerImg from './images/controller.svg'


import Home from './routes/Home'
import About from './routes/About'


export default function App() {
    const [number, setNumber] = useState<number>(0)
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
