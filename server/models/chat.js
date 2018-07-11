var mongoose = require('mongoose');
const config = require('../config/mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var ChatSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    messages: [{comment:{type:String}, commentor:{type:Object}}],
    responder: {type:Schema.Types.ObjectId, ref: 'User'}},
    
    {timestamps: true});

module.exports =  mongoose.model('Chat', ChatSchema)
var Chat = mongoose.model('Chat', ChatSchema);