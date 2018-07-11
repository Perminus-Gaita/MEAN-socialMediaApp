var mongoose = require('mongoose');
const config = require('../config/mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var NotificationSchema = new mongoose.Schema({

    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    content: {type:String},
    gottin:{ type: Schema.Types.ObjectId, ref:'Gottin'},
    reply: { type: Schema.Types.ObjectId, ref: 'Reply' },
    executer: {type:Schema.Types.ObjectId, ref: 'User'},
    seen: {type:Boolean, defaultValue:false}},
    
    {timestamps: true});

module.exports =  mongoose.model('Notification', NotificationSchema)
