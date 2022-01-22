import React from 'react'
import ReactDOM from 'react-dom'
import Renderer from './renderer'



ReactDOM.render(
    React.createElement(Renderer)
,
    document.querySelector("#root")
)