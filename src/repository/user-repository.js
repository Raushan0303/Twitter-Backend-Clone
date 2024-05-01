import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
    // Other methods specific to UserRepository
}

export default UserRepository;
