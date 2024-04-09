import express from 'express';
import {connect} from './config/database.js'
const app = express();


import service from './services/tweet-service.js'

app.listen(3125,async()=>{
    console.log('server start');
    await connect();
    console.log('Mongodb connected');

    let ser = new service();
    const response = await ser.create({
        content: "Capital #FUN"
    });
    console.log(response)

})