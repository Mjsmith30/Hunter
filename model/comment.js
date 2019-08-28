var mongoose = require('mongoose');
var Schema = mongoose.Schema;

commentSchema = new Schema({
    text: String,
    user: {
        type:Schema.Types.ObjectId,
        ref:"Hunter"
    },
    item: {
        type:Schema.Types.ObjectId,
        ref:"Item",
        
    }


})

module.exports = mongoose.model('Comment',commmentSchema);