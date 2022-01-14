const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        username:{type: String, required: true},
        nameOfExercise:{type: String, required: false},
        description:{type: String, required: true},
        duration:{type: Number, required: true},
        date:{type: Date, required: true},
    }, 
    {
        timeStamps: true
    }
)

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;