import CrudRepository from "./crud-repository.js";
import User from "../models/user.js"

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
    // Other methods specific to UserRepository
    
}

export default UserRepository;
