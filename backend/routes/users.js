const router = require('express').Router();
//this will be a mongoose made model to interact with the express Router
let User = require('../models/user.model');

//RETURNS A JSON OF ALL USERS when a get  request is made to url/user
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
})

//create user if not found when a post request is made to url/user/add
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});
    
    newUser.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('Error' +err))
})

module.exports = router;