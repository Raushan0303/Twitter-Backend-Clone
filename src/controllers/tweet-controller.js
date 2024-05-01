import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const create = async (req, res) => { // Change function name to `create`
    try {
        console.log(req.body);
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        console.error("Error creating tweet:", error); // Log the error
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        });
    }
};
