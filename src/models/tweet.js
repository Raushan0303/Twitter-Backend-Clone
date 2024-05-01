import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content :{
        type: String,
        required: true,
        max: [250, 'Tweet can not be more than 250 words']
    },
    // userEmail: {
    //     type: String
    // },
    // hashtags: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Hashtag'
    //     }
    // ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]
}, {timestamps: true});


const Tweet =  mongoose.model('Tweet',tweetSchema);

export default Tweet;








// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \ncreated by:${this.userEmail}`
// })

// tweetSchema.pre('save',function(next){
//     console.log('Inside a hook');
//     this.content = this.content + '....'
//     next();
// })
