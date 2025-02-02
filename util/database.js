const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://andreidev:andreidev@project0.ee9xrg1.mongodb.net/shop?retryWrites=true&w=majority&appName=Project0'
  )
    .then(client => {
      console.log('Connected!')
      _db = client.db()
      callback()
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb