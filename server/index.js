const express = require('express'),
app = express(),
cors = require('cors'),
dotenv = require('dotenv'),
bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors());

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmr');

const Profile =  require('./models/Profile');
const Want = require('./models/Want');
const Crop = require('./models/Crop');

mongoose.Promise = global.Promise;

// Log to console any errors or a successfull connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db. once('open', () => {
    console.log('Connected to db at /data/db/')
});

// configuration variable is all caps
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY

// this line reads all key value pairs in .env folder
dotenv.config(); 

// const want = new Want({
//     name: 'Bok Choy',
//     price: 3.00
// });

// want.save()
//     .then(savedWant => {
//         console.log(savedWant)
//     })
//     .catch(err => {
//         console.log(err);
//     })
//////////////////////////////////////////////////

// const crop = new Crop({
//     name: 'Bok Choy',
//     price: 3.00,
//     date_available: '2019/06/24'
// });

// crop.save()
//     .then(savedCrop => {
//         console.log(savedCrop);
//     })
//     .catch(err => {
//         console.log(err);
//     })

///////////////////////////////////////////////////

// app.post('/home', (req, res) => {
//     Profile.findOne
// })

// Profile.findById(req.params)

// Profile.
//   findById('5c082f9377ff9b0b757a2318').
//   populate('name').
//   exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log('The author is %s', profile.name);
//     // prints "The author is Ian Fleming"
//   });



const users = [];

app.post('/register', (req, res)=>{
    console.log('hit')
    let newUser = req.body;
    bcrypt.hash(newUser.password, 12, function(err, hash) {
        if(err) {
            return res.status(500).json({'msg': 'we messed up, oops', login:false})
        }
      newUser.password = hash;
    let nuUser = new Profile(newUser)
    nuUser.save()
    .then(savedUser => {
        console.log(savedUser);
        res.json({"msg": "success"});
    })
    .catch(err => {
        console.log(err);
    })
      
    });
});

app.post('/login', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    let user = '';
    
    Profile.findOne({
        email: email
    })
    .then((data) => {
        user = data
        console.log('user', user)
        bcrypt.compare(password, user.password, (err, result) => {
            if(result){
              // passwords match! GENERATE TOKEN AND SEND BACK!
              const token = jwt.sign({subject: user.email, subject: user.password}, SECRET_KEY);
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
        const token = req.headers.authorization
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
app.get('/profile', authorize, (req, res) => {
    let email = req.user.subject;
    Profile.findOne({
        email: email
    })
    .then(loggedInUser => {
        res.json(loggedInUser);
    })
});

// app.get('/profile', (req, res) => {
//   res.json(req.decoded)
// })

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})