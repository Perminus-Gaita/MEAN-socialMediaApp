var User = require('../models/user.js');
var jwt = require("jsonwebtoken");
var path = require('path');
var Gottin = require('../models/share.js');
var Reply = require('../models/reply.js');
var Notification = require('../models/notification.js');


const config = require('../config/mongoose.js');
module.exports = {
    index:  function(req, res){
       
        Notification.find({owner: req.params.id}).sort({createdAt: -1}).populate('reply').populate({path:'reply', populate:{path:'commentor', model:User}}).populate('gottin').populate({path:'gottin', populate:{path:'user', model:User}}).populate({path:'executer', model: User}).exec( function(err, notifications){
            if(err){
                console.log(err);
            }else{
                res.json({'notifications':notifications, msg: 'success'});
            }
        });
    
    },
    unseenNots:  function(req, res){
       
        Notification.find({owner: req.params.id, seen:null}).sort({createdAt: -1}).populate('reply').populate({path:'reply', populate:{path:'commentor', model:User}}).populate('gottin').populate({path:'gottin', populate:{path:'user', model:User}}).populate({path:'executer', model: User}).exec( function(err, notifications){
            if(err){
                console.log(err);
            }else{
                res.json({'notifications':notifications, msg: 'success'});
            }
        });
    
    },
    update: function(req, res){
        
        const id = req.params.id;
        Notification.find({owner: req.params.id}, (err, notifications)=>{
            for(var i = 0; i < notifications.length; i++){
                if(!notifications[i].seen){
                    notifications[i].update({seen:true}, (err)=>{
                        if(err){
                            console.log(err); 
                        }else{
                            console.log('succes');
                        }
                    })

                }

            }
            res.json({'succes': true, msg:'succesfully seen'})
        
        })
    }
}