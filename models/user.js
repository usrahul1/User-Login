const mongo = require('mongoose')

mongo.connect("mongodb://localhost:27017/userdb")

const userSchema = mongo.Schema({
    name: String,
    mail: String,
    image: String
})

module.exports = mongo.model("user", userSchema)