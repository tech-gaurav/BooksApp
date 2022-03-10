const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
    },
    ReferredUser:{
        type:String,
        nullable:true,
    },
    isPaymentMade:{
        type:Boolean,
        default:false
    },
    TotalEarnings:{
        type:Number
    }

})

module.exports = mongoose.model('User',User)