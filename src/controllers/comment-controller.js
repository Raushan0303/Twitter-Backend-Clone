import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => { // Change function name to `create`
    try {
        console.log(req.body);
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new comment',
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
