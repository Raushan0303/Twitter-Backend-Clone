import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import TweetService from './services/tweet-service.js';
import {UserRepository} from './repository/user-repository.js';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api',apiRoutes)

app.listen(3125,async()=>{
    console.log('server start');
    await connect();
    console.log('Mongodb connected');
    
    this.userrepo= new UserRepository();
    const user = await this.userrepo.create({
        email: "raushan234@gmail.com",
        password: "234567",
        name: "raushan"
    })

    // let ser = new TweetService();
    // const response = await ser.create({
    //     content: "Capital #FUN run me maja aaya kuchh bhi likh deta hu #hahah"
    // });
    // console.log(response)

})