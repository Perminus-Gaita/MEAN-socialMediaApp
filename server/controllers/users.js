var User = require('../models/user.js');
var jwt = require("jsonwebtoken");
var path = require('path');
var Gottin = require('../models/share.js');
var Reply = require('../models/reply.js');
const nodemailer = require('nodemailer');
const config = require('../config/mongoose.js');
var Notification = require('../models/notification.js');


module.exports = {

// index
    index: function(req, res, next){
        User.find({}, function(err, users){
            if(err){
                return res.json({ "error": err})
            }else{
                res.json(users);
            }
        });
    },
    // index
    unfollowedusers: function(req, res, next){
        const id = req.params.id;
        User.find().and([{followers:{$ne: id}}, {_id:{$ne: id}}]).limit(100).exec( function(err, users){
            if(err){
                return res.json({ "error": err})
            }else{
                res.json({'users': users});
            }
        });
    },


    // register
    register: function(req, res, next ){
        if(req.body.password === req.body.password_confirmation){
            User.findOne({email: req.body.email}, function(err, user){
                if(!user){
                    let newUser = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        username: req.body.username,
                        password: req.body.password
                      
                    });
                    User.addUser(newUser, (err, user)=>{
                        if(err){
                            res.json({succes: false, msg:'Fail to register user'})
                        }else{
                            let transporter = nodemailer.createTransport({
                                host: 'smtp.gmail.com',
                                port: 465,
                                secure: true, // true for 465, false for other ports
                                auth: {
                                    user: 'hzraslan1@gmail.com', // generated ethereal user
                                    pass: '19201920hhs'// generated ethereal password
                                }
                            });
                            const url = 'http://localhost:4000/user/'+user._id+'/emailconfirmation'
                            let mailOptions = {
                                from: '"interactTeam 👻" <interact@interact.com>', // sender address
                                to: user.email,
                                subject: 'Email confirmation!', // Subject line
                                text: 'Please click this link and confirm your email.', // plain text body
                                html: '<a href="'+url+'" >click and confirm your email! </a>' 
                            };
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    return console.log(error);
                                }
                                console.log('Message sent: %s', info.messageId);
                                // Preview only available when sending through an Ethereal account
                                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                        
                                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                            });
                            res.json({succes: true, msg:'succesfully registered'})
                        }
                    })
                }else{
                    res.json({succes: false, msg:'User already exist, try to login'})
                }
            });
        }else{
            res.json({succes: false, msg:"Passwords don't match "})
        }
    },

// Authenticate
    emailConfirm: function(req, res, next){
        const id = req.params.id;
        User.findByIdAndUpdate({_id: id},{confirmed: true}, (err, user)=>{
            if(!user){
                return res.json({succes: false, msg: 'User not found, try to register'});
              }
            if(err){
                
                res.json({succes: false, msg:'Fail!'})
            }else{
                res.json({succes: true, msg:'succesfully confirmed'})
            }
        })
    },

    authenticate: function(req, res, next ){
        const username = req.body.username;
        const password = req.body.password;
      
        User.getUserByUsername(username, (err, user) => {
          if(err) throw err;
          if(!user){
            return res.json({succes: false, msg: 'User not found'});
          }
          if(user.confirmed === false){
            return res.json({succes: false, msg: 'Please confirme your account'});  
          }else{
            User.comparePassword(password, user.password, (err, isMatch) =>{
                if(err) throw err;
                if(isMatch){
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800 
                });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user:{
                    id: user._id,
                    name: user.first_name+ ' ' +user.last_name,
                    username: user.username,
                    email: user.email
                    }
        
                })
                }else{
                return res.json({succes: false, msg: 'Wrong Passsword'});
                }
            });
         }
        });
        
    },

// seting profile picture

    setAvatar: function(req, res, next){
        const id = req.params.id;
        const avatar = req.body.url;
        User.findByIdAndUpdate({_id: id}, {ProfilePhoto: avatar}, (err, user) =>{
            if(err){
                
                res.json({succes: false, msg:'Fail to update'})
            }else{
                res.json({succes: true, msg:'succesfully updated'})
            }
        })
    },

    // removing profile picture

    destroyprofilephoto: function(req, res, next){
        const id = req.params.id;
        User.findByIdAndUpdate({_id: id}, {ProfilePhoto: null}, (err, user) =>{
            if(err){
                
                res.json({succes: false, msg:'Fail to update'})
            }else{
                res.json({succes: true, msg:'succesfully updated'})
            }
        })
    
    },

// update

    update:  function(req, res, next ){
        const id = req.params.id;
        const password = req.body.password;
        User.getUserById(id, (err, user) =>{
            if(err) throw err;
            if(!user){
              return res.json({succes: false, msg: 'User not found'});
            }else{
                User.comparePassword(password, user.password, (err, isMatch) =>{
                    if(err) throw err;
                  
                        if(req.body.newPassword){
                            User.updatePassword(user, req.body.newPassword, (err, user) =>{
                                if(err){
                                    res.json({succes: false, msg:'Fail to change'})
                                }else{
                                    res.json({succes: true, msg:'succesfully changed'})
                                }
                            })
                        }else{
                                user.update({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, username: req.body.username, info:req.body.info}, (err, user) =>{
                                    if(err){
                                        res.json({succes: false, msg:'Fail to update'})
                                    }else{
                                        res.json({succes: true, msg:'succesfully updated'})
                                    }
                                })
                            
                        }
                   
            
                });
            }
        });
    

    },

    // adding a picture

    imageadd: function(req, res, nex){
        const id = req.params.id;
       
        User.findByIdAndUpdate({_id: id}, {$push: {pictures: {url: req.body.url, img: req.body.img}}}, (err, user) =>{
            if(err){
                
                res.json({succes: false, msg:'Fail to update'})
            }else{
                res.json({succes: true, msg:'succesfully updated'})
            }
        })
    },

// Location

   uplocation: function(req, res, next ){
    const id = req.params.id;
    User.getUserById(id, (err, user) =>{
        if(err) throw err;
        if(req.body.allowed){

            user.update({allowed: req.body.allowed, location: req.body.location}, (err, user) =>{
                if(err){
                    res.json({succes: false, msg:'Fail to update'})
                }else{
                    res.json({succes: true, msg:'succesfully updated'})
                }
            })

        }else{
            user.update({location: req.body.location}, (err, user) =>{
                if(err){
                    res.json({succes: false, msg:'Fail to update'})
                }else{
                    res.json({succes: true, msg:'succesfully updated'})
                }
            })
        }

    })
   },

//    find a user

   findUser: function(req, res, next){
       const id = req.params.id;
       User.findById(id).populate('followers').populate('followings').exec( function(err, user){
           if(err){
               res.json({succes:false, msg:'user not found!'});
           }else{
              
              Gottin.find({user:user._id}).sort({createdAt: -1}).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).populate({path:'replies', populate:{path:'likes', model:User}}).exec( (err, shares)=>{
                  if(err){
                    res.json({success:false, msg:'no shares'});
                  }else{
                    res.json({'user':user, 'shares':shares});
                  }
              })

            }
           
        });
        
   },

//    Image remove

   destroyimage: function(req, res, next){
        const id = req.params.id;
        const picture_id = req.params.picture_id;
        User.findByIdAndUpdate({_id: id}, {$pull: {pictures: {_id: picture_id}}}, (err, user) =>{
            if(err){
                
                res.json({succes: false, msg:'Fail to update'})
            }else{
                res.json({succes: true, msg:'succesfully updated'})
            }
        });
   },


// follow-unfollow
follow: function(req, res){
    const user_id = req.params.user_id;
    const following_id= req.params.followingUser_id
    
    User.findByIdAndUpdate({_id: following_id}, {$push: {followers: user_id}}, (err, following_user)=>{
        if(err){
                
            res.json({succes: false, msg:'Fail to fail to fond person'})
        }else{
            User.findByIdAndUpdate({_id: user_id}, {$push: {followings: following_user}},(err, user)=>{
                if(err){
                
                    res.json({succes: false, msg:'Fail to follow'})
                }else{
                    const notContent = 'started to follow you'
                   var notification = new Notification({owner:following_id, content: notContent, executer:user_id});
                   notification.save((err,notification)=>{
                       if(err){
                        res.json({succes: false, msg:'Fail to fail to add not'})  
                       }else{
                           
                        res.json({succes: true, msg:'succesfully followed'})
                       }
                   })
                    
                }
            })
            
        }
    })
},
unfollow: function(req, res){
    const user_id = req.params.user_id;
    const following_id= req.params.followingUser_id
    User.findByIdAndUpdate({_id: following_id}, {$pull: {followers: user_id}}, (err, following_user)=>{
        if(err){
                
            res.json({succes: false, msg:'Fail to unf'})
        }else{
            User.findByIdAndUpdate({_id: user_id}, {$pull: {followings: following_id}},(err, user)=>{
                if(err){
                
                    res.json({succes: false, msg:'Fail to unfollow'})
                }else{
                    Notification.find({owner:following_id, executer: user_id, reply:null, gottin: null}).remove().exec( (err, notif)=>{
                            if(err){
                                res.json({succes: false, msg:'Fail to find not'}) 
                            }else{

                                console.log('here')
                                res.json({succes: true, msg:'succesfully unfollowed'}) 
                            }
                    
                    });
                }
            })
            
        }
    })
},
    
}
