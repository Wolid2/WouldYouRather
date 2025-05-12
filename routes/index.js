// it will import and create anew router
const express = require('express');
const router = express.Router();
//importing a function that returns a random questions
const randomWYRQuestion = require('../model/wyr_questions');

// getting a  router for the home page
router.get('/', function(req, res, next) {
    res.send('Placeholder for home page');
})

router.get('/wyr',function(req,res,next){
    // const wyr = {
    //     'Question ':'Be a detective or a  pilot?',
    //     'answer1': 'Pilot',
    //     'answer2': 'Detective'
    // }
    // calling a function to get random question
    const wyrQuestion= randomWYRQuestion();
    // it will send the question back as json
    res.json(wyrQuestion);
})
// export the router so that it can be used
module.exports = router;