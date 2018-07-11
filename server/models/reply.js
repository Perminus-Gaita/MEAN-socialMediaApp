var mongoose = require('mongoose');
const config = require('../config/mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var ReplySchema = new mongoose.Schema({

    commentor: { type: Schema.Types.ObjectId, ref: 'User' },
    content: {type:String},
    gottin:{ type: Schema.Types.ObjectId, ref:'Gottin'},
    // replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
    likes: [{type:Schema.Types.ObjectId, ref: 'User'}]},
    
    {timestamps: true});

module.exports =  mongoose.model('Reply', ReplySchema)
var Reply = mongoose.model('Reply', ReplySchema);