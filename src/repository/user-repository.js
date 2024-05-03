import CrudRepository from "./crud-repository.js";
import User from "../models/user.js"

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
    // Other methods specific to UserRepository
    async findBy(data) {
        console.log(data)
        try {
            const response = await User.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
   
}

export default UserRepository;
