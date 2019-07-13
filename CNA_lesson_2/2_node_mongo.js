const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongoDbUrl = process.env.MONGODB_URL;
var db


MongoClient.connect(mongoDbUrl, (err, database) => {
  if (err) return console.log(err)
  db = database.db('user')
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

// get function
app.get('/', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result)
    res.render('index.ejs', {employees: result})
  })
})

// post function
app.post('/newuser', (req, res) => {
  db.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})