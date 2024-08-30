const mongoose = require("mongoose") ;
 // const {Schema} = mongoose ;

const Product = new mongoose.Schema({ 
    name : {
        type : String ,
        required : true  
    },
    desc : {
        type : String ,
        required : true ,  
    },
    price : { 
        type : Number ,
        required : true 
    },
    image : {
        type : String , 
        required : true 
    }

})


module.exports = mongoose.model('product' , Product)  ;