import { Router } from "express";

const router = Router() ;

router.get('/', (req, res)=>{
    res
    .status(200)
    .send({
        title: "other home route",
        message: "welcome",
    })
})

router.get('/1', (req, res)=>{
    res
    .status(200)
    .send({
        title: "other 1 route",
        message: "welcome",
    })
})

export default router; 