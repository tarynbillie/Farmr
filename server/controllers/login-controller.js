const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt'),

const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())


// NOTE: Secret Keys should NEVER be included in source code. Better kept in
// environment variables provided on deployment. For demo purposes only.
const jsonSecretKey = 'secret'
app.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if(req.url === '/login') next()
  else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req)
    console.log(typeof token)
    if(token) {
      console.log(token)
      if(jwt.verify(token, jsonSecretKey)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token)
        next()
      } else {
        res.status(403).json({ error: 'Not Authorized.' })
      }
    } else {
      res.status(403).json({ error: 'No token. Unauthorized.' })
    }
  }
})

function getToken(req) {
  return req.headers.authorization.split(' ')[1]
}

const users = {}

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users[email]
  if(user && user.password === password) {
    res.json({ token: jwt.sign({ name: user.name}, jsonSecretKey)})
  } else {
    res.json({
      token: '', 
      error: { message: 'Error logging in. Invalid username/password combination.'}
    })
  }
})

app.get('/profile', (req, res) => {
  res.json(req.decode)
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})