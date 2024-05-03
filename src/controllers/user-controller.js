import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async(req,res)=>{
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
        return res.status(201).json({
            success: true,
            message: 'successfully created a new user',
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(error.statusCode).json({
           message: 'something went wrong',
           data: {},
           success: false,
           err: error.explanation
        })
      }
    
}