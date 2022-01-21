import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'
import { StaticRouter as Router } from "react-router-dom/server";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'))

app.get('*',(req, res)=>{
    const {url} = req;
    const context = {};
    const content = renderToString(
        <Router location={url} context={context}>
            <App/>
        </Router>
    )

    fs.readFile(path.resolve('./public/index.html'),'utf-8',(err,data)=>{
        if(err) res.status(500).send(err);
        const html = data.replace('<div id="root"></div>',content)
        res.status(200).send(html)
    })

})

app.listen(PORT,()=>{
    console.log(`listeningo on port ${PORT}`)
})