import React , {useState} from 'react'
import './styles/app.scss'
import { Routes, Route, NavLink, Link } from 'react-router-dom'


import Home from './routes/Home'
import About from './routes/About'


export default function App() {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <h1>hello from react</h1>
            <h1> {number} </h1>
            <button
                onClick={()=>{setNumber(prev=>prev+1)}}
            >+</button>
            <button
                onClick={()=>{setNumber(prev=>prev-1)}}
            >-</button>

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
