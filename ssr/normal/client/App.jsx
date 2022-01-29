import React , {useEffect, useState} from 'react'
import './styles/app.scss'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import img from './images/background.jpg'
import controllerImg from './images/controller.svg'


import Home from './routes/Home'
import About from './routes/About'


export default function App() {
    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>hello from react. here's an image</h1>

            <img src={img} alt="" className='container center' />
            <img src={controllerImg} className="container" alt="" />
            <h1> {number} </h1>
            <button className='btn btn-primary'
                onClick={()=>{setNumber(prev=>prev+1)}}
            >+</button>
            <button className='btn btn-secondary'
                onClick={()=>{setNumber(prev=>prev-1)}}
            >-</button>

            <ul>
                <NavLink to="/">home</NavLink>
                <NavLink to="/about">about</NavLink>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

        </div>
    )
}
