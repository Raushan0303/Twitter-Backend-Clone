import Like from "../models/Like";
import CrudRepository from "./crud-repository";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}

export default LikeRepository;