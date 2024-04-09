const Hastag = require('../models/hashtags');

class HastagRepository{
    async create(data){
        try {
            const tag = await Hastag.create(data);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }
    async bulkCreate(data){
        try {
            const tags = await Hastag.insertMany(data);
            return tags
        } catch (error) {
            console.log(error)
        }
    }
    async get(id){
        try {
            const tag = await Hastag.findById(id);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }
    async destroy(id){
        try {
            const response = await Hastag.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async findByName(titleList){
        try {
            const tags = await Hastag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            
        }
    }
}
// if we want to select only one thing in that object just bind that await function 
// into .select('title')
//if we want to deslect the id then simply right like this .select('title -_id')
module.exports = HastagRepository;
