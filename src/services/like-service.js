import {LikeRepository, TweetRepository} from "../repository/index"

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){ //api/v1/likes/toggle?id=model&type=model 
        if(modelType=='Tweet'){
            var likable = await this.tweetRepository.getAll(modelId).populate('likes');

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
        if(exists){
            likable.likes.pull('exists');
            await likable.save();
            await exists.remove();
            var isAdded = false;
        }else{
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likable:modelId
            });
            likable.likes.push(newLike);
            await likable.save();
            var isAdded = true;
        }
        return isAdded
    }

}

export default LikeService;