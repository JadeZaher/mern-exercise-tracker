const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique:true,
            minlength: 3
        },
        displayName:{type: String, required:true},
        profilePicUrl:{type: String, required:true}
    }, 
    {
        timeStamps : true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;