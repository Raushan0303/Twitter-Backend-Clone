import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'

const app = express();

app.use('/api',apiRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3125,async()=>{
    console.log('server start');
    await connect();
    console.log('Mongodb connected');

    // let ser = new service();
    // const response = await ser.create({
    //     content: "Capital #FUN"
    // });
    // console.log(response)

})