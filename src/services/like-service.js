import {LikeRepository, TweetRepository} from "../repository/index.js"

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){ //api/v1/likes/toggle?id=model&type=model 
        if(modelType=='Tweet'){
            var likable = await this.tweetRepository.find(modelId)
           

        }else if(modelType == 'Comment'){
            //todo when we implement comment model
        }else{
            throw new Error('unknown model type')
        }
        const exists = await this.likeRepository.findByUserAndLikable({
            user: userId,
            onModel: modelType,
            likable: modelId
        });
        console.log("exists", exists);
        if(exists) {
            likable.likes.pull(exists.id);
            await likable.save();
            await this.likeRepository.destroy(exists._id); 
            var isAdded = false;

        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likable: modelId
            });
            likable.likes.push(newLike);
            await likable.save();

            var isAdded = true;
        }
        return isAdded;
    }   
}

export default LikeService;