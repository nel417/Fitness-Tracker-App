const router = require('express').Router();
let Meals = require('../models/meals.model');

router.route('/').get((req, res) => {
Meals.find()
.then(meals=> res.json(meals))
.catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
const username = req.body.username;
const title = req.body.title;
const description = req.body.description;
const calories = Number(req.body.calories);
const date = Date.parse(req.body.date);

const newMeal = new Meals({
    username,
    title,
    description,
    calories,
    date,
})

newMeal.save()
.then(() => res.json("Meal added!"))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Meals.findById(req.params.id)
    .then(meals => res.json(meals))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Meals.findByIdAndDelete(req.params.id)
    .then(() => res.json('Meal Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Meals.findById(req.params.id)
    .then(meals => {
        meals.username = req.body.username;
        meals.title = req.body.title;
        meals.description = req.body.description;
        meals.calories = Number(req.body.calories);
        meals.date = Date.parse(req.body.date)

        meals.save()
        .then(() => res.json('Meal Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
        
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;