const { db } = require('../models/tasks')
const Task = require('../models/tasks')

const getUser = async(req, res) =>{
    const task = await Task.find()
    res.status(201).json({task})
}

const AddUser = async(req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})

}

const Payment = async(req, res)=>{
    const refferedUser = await Task.findOne({Name:req.body.Name})
    const filter = { Name : req.body.Name }
    const update = { isPaymentMade:true , TotalEarnings:refferedUser.TotalEarnings+10 }
    let paymentDone = await Task.findOneAndUpdate(filter, update);
    if(paymentDone){
    return paymentDone
    }
    else{
        throw new Error
    }
}


module.exports={getUser, AddUser , Payment}