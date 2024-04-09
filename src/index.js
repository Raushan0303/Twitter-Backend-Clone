import express from 'express';
import {connect} from './config/database.js'
const app = express();


import service from './services/tweet-service.js'

app.listen(3125,async()=>{
    console.log('server start');
    await connect();
    console.log('Mongodb connected');

    const response = await service.create({
        content: "Done with #refractor"
    });
    console.log(response)

})