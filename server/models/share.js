var mongoose = require('mongoose');
const config = require('../config/mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var GottinSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: {type:String},
    urla:{type:String},
    imageclass:{type:String},
    replies: [{type: Schema.Types.ObjectId, ref: 'Reply'}],
    likes: [{type:Schema.Types.ObjectId, ref: 'User'}],
    img:{type:String}},
    
    {timestamps: true});
   


module.exports =  mongoose.model('Gottin', GottinSchema)
var Gottin = mongoose.model('Gottin', GottinSchema);

    