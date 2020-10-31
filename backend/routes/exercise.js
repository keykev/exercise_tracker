const express = require('express')
const router = express.Router()

const Exercise = require('../models/exercise')

//GET   @'/'
router.get('/',async (req,res) => {
    try {
        const exercises = await Exercise.find({});

        if(exercises) {
            res.json(exercises)
        }
        else {
            console.log(`no exercises in collection ${res.status(400)}`)
        }
    }
    catch(err) {
        throw err;
    }
})


//POST  @'/add'
router.post('/add',async (req,res) => {
    try {
        let username = req.body.username;
        let description = req.body.description;
        let duration = Number(req.body.duration);
        let date = Date(req.body.date);

        const newExercise = await Exercise.create({
            username,
            description,
            duration,
            date
        })

        if(!newExercise) {
            console.log(`${res.status(400)} bad request.`)
        }
        else {
            return res.json(newExercise)
        }
    }
    catch(err) {
        console.log(err)
    }
    
})


//GET   @ "/:id"
router.get('/:id', async(req,res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)

        if(!exercise) {
            console.log('exercise does not exists')
        }
        else {
            res.json(exercise)
        }
    }
    catch(err) {
        throw err
    }
})

//DELETE    @ "/:id"
router.delete('/:id', async(req,res) => {
    try {
        let exercise = await Exercise.remove({_id: req.params.id})

        if(!exercise) {
            console.log('No such exercise in collection')
        }
        else {
            res.json('Exercise Deleted')
        }
    }
    catch(err) {
        throw err
    }
})

//UPDATE @ "/update/:id"
router.put('/update/:id',async (req, res) => {
    let exercise = await Exercise.findById({_id: req.params.id})

    if(!exercise) {
        console.log('exercise does not exist')
    }
    else {
        exercise.username = req.body.username
        exercise.description = req.body.description
        exercise.duration = Number(req.body.duration)
        exercise.date = Date(req.body.date) 

        await exercise.save()
        res.json('Exercise updated')
    }
})


module.exports = router














