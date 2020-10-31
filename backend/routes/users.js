const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/user')

//GET   @'/'
router.get('/', async(req,res) => {
    try {
        let users = await User.find({})

        if(users) {
            res.json(users)
        }
    }
    catch(err) {
        console.log(res.status(404))        
    }
})

//POST  @'/add'
router.post('/add',async(req,res) => {
    try {
        let username = req.body.username;

        let newUser = await User.create({
            username
        })

        if(!newUser) {
            return console.log('User not unidentifable')
            
        }
        res.json('User added')
    }
    catch(err) {
        console.log(err)
    }
})


module.exports =router;