const express = require('express');
const connect = require('./config/database')

const app = express();

// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const  Comment  = require('./models/comments')

app.listen(3125,async()=>{
    console.log('server start');

    await connect();
    console.log('Mongodb connected');

    const tweetrepo = new TweetRepository();

    // const tweet = await tweetrepo.create({content : 'With hooks now on'});
    const tweet = await tweetrepo.create({content : 'my tweet'});
    console.log(tweet);
    const comment = await Comment.create({content: 'new comment'});
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
    


    // const tweet = await tweetrepo.getAll(0, 4);

    // console.log(tweet[0].contentWithEmail);
})