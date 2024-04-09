import TweetRepository from '../repository/tweet-repository.js';
import HashtagRepository from '../repository/hashtag-repository.js'

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                        .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title);
    
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
    
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
    
        const response = await this.hashtagRepository.bulkCreate(newTags);
    
        alreadyPresentTags.forEach(async (tag) => {
            tag.tweets.push(tweet.id);
            await tag.save();
        });
    
        console.log(response);
        return tweet;
    }
    
}


export default TweetService;



 // todo create hashtag and add here
        /*
        /**
         * 1. bulkcreate in mongoose
         * 2. filter title of hashing based on multiple tags
         * 3. how to add tweet id inside all the hashtags
         */