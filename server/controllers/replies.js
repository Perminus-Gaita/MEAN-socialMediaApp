var User = require('../models/user.js');
var jwt = require("jsonwebtoken");
var path = require('path');
var Reply = require('../models/reply.js');
var Gottin = require('../models/share.js');
var Notification = require('../models/notification.js');

const config = require('../config/mongoose.js');
module.exports = {

index: function(req, res, next){
    Reply.find({}).sort({createdAt: -1}).populate('commentor').exec( function(err, replies){
        if(err){
            res.json(err)
        }else{
            res.json(replies);
        }
    })
},
oneReply: function(req, res, next){
    const id = req.params.id;
   
    Reply.findById(id).sort({createdAt: -1}).populate('commentor').populate('likes').exec( function(err, replies){
        if(err){
            res.json(err)
        }else{
            res.json({'reply': replies});
        }
    })
},

bringMyReplies: function(req, res){
    const id = req.params.user_id;
    Reply.find({commentor: id}).sort({createdAt: -1}).populate('commentor').populate('gottin').populate('likes').populate({path:'gottin', populate:{path:'user', model:User}}).populate({path:'gottin', populate:{path:'likes', model:User}}).populate({path:'gottin', populate:{path:'replies', model:Reply} }).exec( function(err, replies){
        if(err){
            res.json(err)
        }else{
            res.json(replies);
        }
    })
},

addreply: function(req, res, next){
    const share_id = req.params.share_id;
    const user_id = req.params.user_id;
    User.findById(user_id, (err, user)=>{
        if(err){
            console.log(err);
        }else{
   
    Gottin.findById(share_id, (err, share)=>{
        if(err){
            console.log(err);
        }else{
                var reply = new Reply({content: req.body.content, commentor:user, gottin:share });
                reply.save(function(err){
                    if(err){
                        res.json({succes: false, msg:'Fail to share'})
                    }else{
                        share.replies.push(reply);
                        share.save(function(err){
                            if(err){
                                res.json({succes: false, msg:'Fail to share'})
                            }else{
                                const notContent ='said'
                                var notif = new Notification({owner:share.user, content: notContent, executer:user_id, reply: reply});
                                notif.save(err=>{
                                    if(err){
                                        res.json({succes: false, msg: 'fail to add not'}); 
                                    }else{
                                        res.json({succes: true});
                                    }
                                })
                            }
                        });
                    }
                });
            
        }
    });
}
});
},
likeReply: function(req, res){
  
    const user_id = req.params.user_id;
    const reply_id = req.params.reply_id;
    Reply.findById({_id:reply_id}).populate('commentor').exec( (err, reply)=>{
        if(err){
            console.log(err);
        }else{
            reply.likes.push(user_id);
            reply.save(function(err){
                if(err){
                    res.json('fail to like');
                }else{
                    const notContent ='liked your reply'
                    var notif = new Notification({owner:reply.commentor, content: notContent, executer:user_id, reply: reply});
                    notif.save(err=>{
                        if(err){
                            res.json({succes: false, msg: 'fail to add not'}); 
                        }else{
                            res.json({succes: true});
                        }
                    })
                }
            })
        }
    });
},
dislikeReply: function(req, res){
   
    const user_id = req.params.user_id;
    const reply_id = req.params.reply_id;
    Reply.findById({_id:reply_id}, (err, reply)=>{
        if(err){
            console.log(err);
        }else{
            reply.likes.pull(user_id);
            reply.save(function(err){
                if(err){
                    res.json('fail to dislike');
                }else{
                    Notification.find({executer: user_id, reply:reply}).remove().exec( (err, notif)=>{
                      
                            if(err){
                                res.json({succes: false, msg:'Fail to find not'}) 
                            }else{
                                res.json({succes: true, msg:'succesfully disliked and removed'}) 
                            }
                        
                    });
                }
            })
        }
    });
},
destroyReply: function(req, res){
    const user_id = req.params.user_id;
    const reply_id = req.params.reply_id;
 
    Reply.findById({_id:reply_id}, (err, reply)=>{
        if(err){
          
            console.log(err);
        }else{
            console.log(reply.commentor);
            if(reply.commentor == user_id){
                reply.remove();
                Notification.find({executer: user_id, reply: reply_id}).remove().exec( (err, notif)=>{
                    
                        if(err){
                            res.json({succes: false, msg:'Fail to find not'}) 
                        }else{
                            res.json({succes: true, msg:'succesfully removed and not'}) 
                        }
                    
                });
                 
            }else{
               
                console.log(err)
                res.json('not allowed');
            }
           
        }
    })
}
}