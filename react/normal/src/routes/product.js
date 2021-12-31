const express = require('express');
const router = express.Router();

router.get('/:id',(req, res)=>{
    res.send({
        from: '/product ' + req.params.id
    })
})

router.get('/some' ,(req,res)=>{
    res.send({
        from : '/product/some'
    })
})


module.exports= router