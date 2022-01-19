const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema(
    {
        username:{type: String, required: true},
        mealDescription:{type: String, required: true},
        calories:{type: Number, required: false},
        carbs:{type: Number, required: false},     
        fat:{type: Number, required: false},     
        protein:{type: Number, required: false},     
    }, 
    {
        timeStamps: true
    }
)

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;