const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mealsSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    calories: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;