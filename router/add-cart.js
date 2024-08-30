const express = require('express');
const Cart = require('../models/Cart')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

const { body, validationResult } = require('express-validator');

router.post('/add-to-cart', async (req, res) => {
    try {
        const { qty ,  name, desc , price ,  image , user_id } = req.body;
        // const user_id = req.params.user_id ;
        const data = Cart({name , desc , price , image , user_id , qty});
        // const lo = User(user_id , name , age ) ;
        await data.save();   // save data to mongo db
        res.json("success");
    } catch (error) {
        console.log('error', error);
    }

});

module.exports = router;


// router.post('/create', [
//     body('name' , 'valid name' ).isLength({min : 5 , max : 10} )
// ] , (req , res)=> {
//     const errors = validationResult(req) ;
//     if(!errors.isEmpty()){
//         return res.json({errors : errors.array()  , msg : errors.array("msg")}) ;
//     }

//     // console.log(req.body) ;
//     const {name , id , gender} = req.body ;
//     // const f = User.findOne({id}) ;    // finding data from mongo db
//     const lo = User(req.body) ;
//     lo.save();   // save data to mongo db
    // res.send(req.body);

//     // const sql = "insert into stud  values(? , ?  ,?) ";
//     // co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> {
//     //     if(err){
//     //         return res.json(err) ;
//     //     }
//     //     // const jwtData = jwt.sign(req.body.id , jwts ) ;
//     //     // return res.json(jwtData) ;
//     //     return res.json(data) ;
//     // } )

// });
