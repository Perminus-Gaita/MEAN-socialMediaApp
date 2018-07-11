var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config/mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: [2, "First Name must be at least 2 charecters"]},
    last_name: { type: String, required: true, minlength: [2, "First Name must be at least 2 charecters"]},
    email: { type: String, required: true,  unique : [true, 'email is already in use, try to log in'], minlength: 6},
    username: { type: String, required: true,  unique : [true, 'choose another username, or try to log in'], minlength: 3},
    password: { type: String, required: true},
    pictures: [{url:{type:String}, img:{type:String}}],
    info: {type:String},
    ProfilePhoto:{type:String},
    location: {type:String},
    confirmed: {type:Boolean, defaultValue:false},
    followers:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    followings:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    
}, {timestamps: true });

module.exports =  mongoose.model('User', UserSchema)
var User = mongoose.model('User', UserSchema);

module.exports.getUserById =function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
module.exports.updatePassword = function(user, newPassword, callback){
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(newPassword, salt, (err, hash) => {
            if(err) throw err;
            newPassword = hash;
            user.password = newPassword;
            user.update({password:newPassword}, callback);
        });
    });
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch)
    });
}