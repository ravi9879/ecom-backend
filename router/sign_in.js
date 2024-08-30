const express = require('express');
const User = require('../models/User')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

router.post('/sign-in', async (req, res) => {
    try {
        const { name, email_id, password } = req.body;
        const user = await User.findOne({ email_id });
        if (user) {
            res.json("user already exist");
        }
        else {
            const hashPassword = await bcrypt.hash(password, salt);
            const new_user = new User({ name, email_id, hash_password: hashPassword, password: password });
            await new_user.save();   // save data to mongo db
            return res.json({ Status: "Success" });
        }
    } catch (error) {
        console.log('error3' , error);
    }


});


module.exports = router; 