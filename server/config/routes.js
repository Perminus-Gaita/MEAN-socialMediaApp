var users = require('../controllers/users.js');
var shares = require('../controllers/shares.js');
var replies = require('../controllers/replies.js');
var notifications = require('../controllers/notifications.js');


var passport = require('passport');
var jwt = require("jsonwebtoken");
var path = require('path');
const config = require('../config/mongoose.js');
require('./passport')(passport)
module.exports = function(app){

//Index

app.get('/api', (req, res, next)=>{
    users.index(req, res, next);
})
app.get('/api/:id/users', (req, res, next)=>{
    users.unfollowedusers(req, res, next);
})

// Log-reg-auth-profile

app.post('/api/register', (req, res, next)=>{
    users.register(req, res, next);
})

app.post('/api/authenticate', (req, res, next)=>{
    users.authenticate(req, res, next);
})

app.get('/api/profile', passport.authenticate('jwt', {session: false}),  (req, res, next)=>{
    res.json({user: req.user});
  });

  app.put('/api/user/:id/avatar', (req, res, next)=>{
    users.setAvatar(req, res, next);
})
app.put('/api/user/:id/confirmEmail', (req, res, next)=>{
    users.emailConfirm(req, res, next);
})

app.get('/api/user/:id', (req, res, next)=>{
    users.findUser(req, res, next);
})

app.delete('/api/user/:id/remove/profilephoto', (req, res, next)=>{
    users.destroyprofilephoto(req, res, next);
})

app.delete('/api/user/:id/image/:picture_id', (req, res, next)=>{
    users.destroyimage(req, res, next);
})

app.post('/api/:id/picture', (req, res, next)=>{
    users.imageadd(req, res, next);
})

app.post('/api/:id/update', (req, res, next)=>{
    users.update(req, res, next);
})
// follow


app.put('/api/user/:user_id/follow/:followingUser_id', (req, res)=>{
    users.follow(req, res);
});

app.put('/api/user/:user_id/unfollow/:followingUser_id', (req, res)=>{
    users.unfollow(req, res);
});

//Shares

app.get('/api/shares', (req, res, next)=>{
    shares.index(req, res, next);
})
app.get('/api/bestshares', (req, res, next)=>{
    shares.bestShares(req, res, next);
})

app.get('/api/user/:user_id/dashshares', (req, res)=>{
   
    shares.followingShares(req, res);
})

app.post('/api/shares/:id/like', (req, res, next)=>{
    shares.likeShare(req, res, next);
})

app.delete('/api/:user_id/shares/:id/dislike', (req, res, next)=>{
    
    shares.dislikeShare(req, res, next);
})

app.put('/api/:id/location', (req, res, next)=>{
    users.uplocation(req, res, next);
})

app.post('/api/:id/share', (req, res, next)=>{
    shares.addshare(req, res, next);
})
app.delete('/api/:id/shares/:share_id', (req, res, next)=>{
    shares.destroy(req, res, next);
})

app.get('/api/user/:id/myshares',(req, res, next)=>{
    shares.getUserShare(req, res, next);
})

app.get('/api/share/:id',(req, res, next)=>{
    shares.getaShare(req, res, next);
})

// replies

app.post('/api/shares/:share_id/user/:user_id/reply', (req, res, next)=>{

    replies.addreply(req, res, next);
})

app.get('/api/allreplies',(req, res, next)=>{
    replies.index(req, res, next);
})

app.get('/api/reply/:id',(req, res, next)=>{
    replies.oneReply(req, res, next);
})

app.get('/api/:user_id/myreplies',(req, res, next)=>{
    replies.bringMyReplies(req, res, next);
})
app.put('/api/user/:user_id/reply/:reply_id/like', (req, res)=>{
    
    replies.likeReply(req, res);
})
app.put('/api/user/:user_id/reply/:reply_id/dislike', (req, res)=>{
    
    replies.dislikeReply(req, res);
})

app.delete('/api/:user_id/reply/:reply_id/remove', (req, res)=>{
    
    replies.destroyReply(req,res);
})
//   find
app.get('/api/search/:find', (req,res)=>{
    shares.Search(req,res);
})

// Notifications


app.get('/api/user/:id/notifications', (req, res)=>{
    
    notifications.index(req,res);
})
app.get('/api/user/:id/unseen/notifications', (req, res)=>{
    
    notifications.unseenNots(req,res);
})
app.put('/api/user/:id/notifications/seen', (req, res)=>{
    
    notifications.update(req,res);
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("static/index.html"))
  })





}