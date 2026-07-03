
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema ({
    email:{
        type:String,
        required:true,
    },
    identity:{
        type:String,
        enum:["host","guest"],
        required:true,
    }
})

userSchema.plugin(passportLocalMongoose);
// It adds username/password authentication functionality to your User schema automatically.
module.exports = mongoose.model('User', userSchema);