import { Router } from "express";

const router = Router() ; 

router.get('/',(req, res)=>{
    res.send('hello from api')
})

export default router;