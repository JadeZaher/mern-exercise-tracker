const router = require('express').Router();
//this will be a mongoose made model to interact with the express Router
let Exercise = require('../models/exercises.model');


//IMPLEMENTING CRUD 
//RETURNS A JSON OF ALL exercises user a get  request is made to url/exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' +err));
})

//add a new exercise when a post request is made to url/exercises/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const nameOfExercise = req.body.nameOfExercise;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        nameOfExercise,
        description,
        duration,
        date
    });
    newExercise.save()
        .then(() => res.json('exercise added'))
        .catch(err => res.status(400).json('Error' +err))
})

//gets exercise by id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(()=> res.json('Exercise Added'))
        .catch(err => res.status(400).json('Error: ' +err))
})

//deletes exercise by id
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Exercise' + req.params.id + 'removed'))
        .catch(err => res.status(400).json('Error'+ err))
})

router.route('/update/:id').post((req, res)=>{
    Exercise.findById(req.params.id)
        .then( exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(()=>res.json('Exercise Updated'))
                .catch(err =>res.status(400).json('Error'+ err))
        
        }).catch(err => res.status(400).json('Error' + err))
    
    })

module.exports = router;