import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
    <Router>
        <App/>
    </Router>
,
    document.querySelector("#root")
)

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const productRouter = require('./routes/product');

// app.get('/', (req,res)=>{
//     res.send({
//         from: '/'
//     })
// })

// app.use('/product',productRouter)


// app.get('*',(req, res)=>{
//     res.send({
//         from: '*'
//     })
// })

// app.listen(port, ()=>{
//     console.log(`listening on port ${port}`)
// })