var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    title: String,
    description: String,
    price: String,
    image: String,
    seller:{
        type: Schema.Types.ObjectId,
        ref: "Hunter"
    
    },
    comments:[{
        type: {
            type: Schema.Types.ObjectId,
            ref:"Comment"
        }
    }

    ]
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);