const express = require('express'),
app = express(),
cors = require('cors'),
dotenv = require('dotenv'),
bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
bodyParser = require('body-parser'),
sgMail = require('@sendgrid/mail');


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors());

// mongoose
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmr');
mongoose.Promise = global.Promise;

// mongoose schemas
const Profile =  require('./models/Profile');
const Want = require('./models/Want');
const Crop = require('./models/Crop');


// Log to console any errors or a successfull connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db. once('open', () => {
    console.log('Connected to db at /data/db/')
});

// this line reads all key value pairs in .env folder
dotenv.config(); 

// configuration variable is all caps in .env folder
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY || "v0ei4dhfwjokb9s19qt6rt";
const SENDGRID_KEY = sgMail.setApiKey(process.env.SENDGRID_API_KEY);


///////////////////////////////////////////////////

const users = [];

app.post('/register', (req, res)=>{
    console.log('hit')
    let newUser = req.body;
    bcrypt.hash(newUser.password, 12, function(err, hash) {
        if(err) {
            return res.status(500).json({'msg': 'we messed up, oops', login:false})
        }
      newUser.password = hash;
    let User = new Profile(newUser)
    User.save()
    .then(savedUser => {
        console.log(savedUser);
        res.status(201).json({"msg": "success"});
    })
    .catch(err => {
        console.log(err);
    })
      
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body
    // let user = '';
    
    Profile.findOne({
        email: email
    })
    .then(user => {
        bcrypt.compare(password, user.password, (err, result) => {
            if(result){
              // passwords match! GENERATE TOKEN AND SEND BACK!
              const token = jwt.sign({subject: email}, SECRET_KEY);
              res.json({token: token, login:true})
            } 
            else{
              // passwords don't match! Danger! reject with a 401
              res.status(401).json({'msg': "invalid credentials", login:false});
            }
        })
    })
})

// middleware function
function authorize(req, res, next) {
    // retrieve token from header with name 'authorization'
    const { authorization } = req.headers;
    
    const token = authorization.split('Bearer ')[1];
    // if no toek, reject with 401 status
    if(!token) {
        return res.status(401).json({'msg': 'no token provided'});
    }
    // if there is a token, try to verifty it
    const decoded = jwt.verify(token, SECRET_KEY);
    // if it is NOT aythentic reject with 401
    if(!decoded) {
        return res.status(401).json({'msg': 'invalid token'});
    }
    // else if it IS authentic, store identtiy at req.user and call next
    req.user = decoded;
    //   calling next() signals we are done, call next request handler function
    next();
}

// calling middleare inside
app.get('/profile', authorize, (req, res, next) => {
    let email = req.user.subject;
    Profile.findOne({
        email: email
    })
    .populate('want_id')
    .exec((err, profile) => {
        if(err) {
            return next(err);
        }
        res.json(profile); 
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/want', (req, res,next) => {
    let want = new Want({
        ...req.body
      });
      want.save(err => {
        if (err) {
          return next(err);
        }
        console.log(want)
        res.status(201).send({ 'msg': 'a new want has been created!!' })
      });
      Profile.findById(want.profile_id)
        .then(profile => {
          profile.want_id.push(want._id);
          return profile.save();
      })
        .catch(err => {
          console.log(err);
      });
});


app.delete('/want/:id/delete', (req, res, next) => {
    Want.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.status(500).json({error: err})
            return next(err);
        }
        res.json({msg: 'deleted!'});
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/crop', (req, res, next) => {
    let crop = new Crop({
        ...req.body
      });
      crop.save(err => {
        if (err) {
          return next(err);
        }
        console.log(crop)
        res.status(201).send({ 'msg': 'a new crop has been created!!' })
      });

    Want.find({name: req.body.name})
    .populate('profile_id')
      .then(wants => {
          console.log(wants)
          // wants is an array
          // wants[0] gives first want
          // wants[0].profile_id is also an array with only one thing in it
          // wants[0].profile_id[0].email will give you the email for want[0]
          // loop through each want, pull out the email using expression above
          // once you have each email, do a sendgrid call to send a msg there
      })


      Profile.findById(crop.profile_id)
        .then(profile => {
          profile.crop_id.push(crop._id);
          return profile.save();
      })
        .catch(err => {
          console.log(err);
      });
});


app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})