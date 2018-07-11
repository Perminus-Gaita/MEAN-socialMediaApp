var User = require('../models/user.js');
var jwt = require("jsonwebtoken");
var path = require('path');
var Gottin = require('../models/share.js');
var Reply = require('../models/reply.js');
var Notification = require('../models/notification.js');


const config = require('../config/mongoose.js');
module.exports = {
    index: function(req, res, next){
        Gottin.find({}).sort({createdAt: -1}).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).populate({path:'replies', populate:{path:'likes', model:User}}).exec( function(err, shares){
            if(err){
                console.log(err);
            }else{
                res.json(shares);
            }
        });
    },

    bestShares: function(req, res){
        Gottin.find({}).sort({likes: -1}).limit(500).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).populate({path:'replies', populate:{path:'likes', model:User}}).exec( function(err, shares){
            if(err){
                console.log(err);
            }else{
                res.json(shares);
            }
        });
    },

    followingShares: function(req, res){
        const id = req.params.user_id;
        User.findById(id).populate('followings').exec( function(err, user1){
            let followings = []
            followings = user1.followings;
            followings.push(user1);
            if(err){
                console.log(err);
            }else{
               
                Gottin.where({user:followings}).sort({createdAt: -1}).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).populate({path:'replies', populate:{path:'likes', model:User}}).exec( function(err, shares){
                    if(err){
                        console.log(err);
                    }else{
                        res.json(shares);
                    }
                });
                
            }
        });
      
    },

    getaShare: function(req, res, next){
        const id = req.params.id
        Gottin.findById(id).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'replies', populate:{path:'likes', model:User}}).exec( (err, share)=>{
            if(err){
                console.log(err);
            }else{
                res.json(share);
            }
        })
    },
    addshare: function(req, res, next) {
        
        const id = req.params.id;
        User.findById(id, (err, user)=>{
            if(err){
                console.log(err);
            }else{
                if(req.body.urla){
                        var share = new Gottin({comment: req.body.comment, urla: req.body.urla, user:id, img:req.body.img, imageclass: req.body.imageclass});
                        share.save(function(err){
                            if(err){
                                res.json({succes: false, msg:'Fail to share'})
                            }else{
                                res.json({succes: true});
                            }
                        });
                
                }else{
                    var share = new Gottin({comment: req.body.comment, user:id});
                    share.save(function(err){
                        if(err){
                            res.json({succes: false, msg:'Fail to share'})
                        }else{
                            res.json({succes: true});
                        }
                    });
                }
            }
        });
    },

    likeShare: function(req, res, next){
        Gottin.findById(req.params.id).populate('user').exec( function(err, share){
            if(err){
                res.json({success: false, msg: "Fail"})
            }else{
                share.likes.push(req.body._id);
                share.save(function(err){
                    if(err){
                        res.json({succes: false, msg:'Fail to share'})
                    }else{
                        const notContent ='liked your post'
                        var notif = new Notification({owner:share.user, content: notContent, executer:req.body._id, gottin: share});
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

    dislikeShare: function(req, res, next){
       
        const user_id = req.params.user_id;
        
        const id = req.params.id;
       
        Gottin.findByIdAndUpdate({_id: id}, {$pull: {likes:  user_id}}, (err,share) =>{
            if(err){
                
                res.json({succes: false, msg:'Fail to update'})
            }else{
                Notification.find({executer: user_id, gottin: share}).remove().exec( (err, notif)=>{
                        if(err){
                            res.json({succes: false, msg:'Fail to find not'}) 
                        }else{
                            res.json({succes: true, msg:'succesfully unfollowed'}) 
                        }
                    
                });
             
            }
        });
   
    },


    destroy: function(req, res, next){
        Gottin.findById( req.params.share_id, function(err, share){
            if(err){
            res.json({success: false, msg: "Fail"})
            }
            else{
                Notification.find({gottin: share}).remove().exec( (err, notif)=>{
                    if(err){
                        res.json({succes: false, msg:'Fail to find not'}) 
                    }else{
                        share.remove();
                        res.json({succes: true, msg:'succesfully removed'}) 
                    }
              
              
            
             });
            
            }
        })
    },
    getUserShare: function(req, res, next){
        const id = req.params.id;
        
        Gottin.find({user: id}).sort({createdAt: -1}).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).exec( function(err, shares){
            if(err){
              res.json({success:false, msg:'no shares'});
            }else{
              res.json({success: true, 'shares':shares});
            }
        })
    },

    Search: function(req, res){
        
        const sear = req.params.find;
        const arrs = sear.split(' ');
        
        if(arrs.length > 1){
            Gottin.find().or([{ comment : {$regex:arrs[0] }}, { comment : {$regex:arrs[1] }}]).sort( {createdAt: -1} ).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).exec( function(err, shares){
                if(err){
                    res.json({success:false, msg:'no shares'});
                  }else{
                      User.find().or([{ username : {$regex:arrs[0] }}, { username : {$regex:arrs[1] }}]).exec(function(err, users){
                        if(err){
                            res.json({success:false, msg:'no user'});
                          }else{
                            res.json({'users':users, 'shares':shares});
                          }
                      })
                    
                  }
            });
        }else{
        Gottin.find({comment:{$regex: sear}}).sort( {createdAt: -1} ).populate('user').populate('likes').populate({path:'replies', populate:{path:'commentor', model:User}}).populate({path:'commentor', model: User}).exec( function(err, shares){
            if(err){
                res.json({success:false, msg:'no shares'});
              }else{
                  User.find({username:{'$regex':sear}}).populate('followers').populate('followings').exec( function(err, users){
                    if(err){
                        res.json({success:false, msg:'no user'});
                      }else{
                        res.json({'users':users, 'shares':shares});
                      }
                  })
                
              }
        });
    }
    }
}