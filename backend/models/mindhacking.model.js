const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mindhackingSchema = new Schema(
    {
        username:{type: String, required: true},
        mantra:{type: String, required: false},
        reflection:{type: String, required: true},
        duration:{type: Number, required: true},    
    }, 
    {
        timeStamps: true
    }
)

const MindHacking = mongoose.model('Mind Hacking', mindhackingSchema);

module.exports = MindHacking;