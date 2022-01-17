import express from 'express'; 
import homeRouter from './routes/home'
import otherRouter from './routes/other'

const PORT = process.env.PORT || '3000';

const app = express();
 
app.use('/', homeRouter);
app.use('/other', otherRouter);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})