import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import UserRepository from './repository/user-repository.js';
import LikeService from './services/like-service.js';
import TweetRepository from './repository/tweet-repository.js';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api',apiRoutes)

app.listen(3125,async()=>{
    console.log('server start');
    await connect();
    console.log('Mongodb connected');
    
    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);

    // const users = await userRepo.getAll()

    // const likeservice = new LikeService();
    // likeservice.toggleLike(tweets[0].id,'Tweet', users[0].id)
    // let ser = new TweetService();
    // const response = await ser.create({
    //     content: "Capital #FUN run me maja aaya kuchh bhi likh deta hu #hahah"
    // });
    // console.log(response)

})