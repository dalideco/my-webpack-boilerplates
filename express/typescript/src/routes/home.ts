import { Router } from "express";
const router = Router();

router.get('/',(req, res)=>{
    res
    .status(200)
    .send({
        title: "it's working",
        message: "welcome to the home route"
    })
})

export default router; 