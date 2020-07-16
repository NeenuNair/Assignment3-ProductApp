const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');


const Schema = mongoose.Schema;

var CredentialSchema = new Schema({
    email : String,
    password : String
    // type : String
});

var Userdata = mongoose.model('userCredential', CredentialSchema);

module.exports = Userdata;