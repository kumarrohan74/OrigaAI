//header files
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    userId: Number,
    name: String,
    noOfOrders: Number,
    created_at: {type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
async function createUser(data)
{
    const user = new User({
        userId: data.userId,
        name: data.name,
        noOfOrders:0,
    });
    const result = await user.save();
    return result;
 
}
async function getUser()
{
    const user = await User.find();
}

async function addNoOfOrders(userId,noOfOrders)
{
    const updateUserOrder = await User.findOneAndUpdate({"userId": userId},{
        "noOfOrders": noOfOrders
    })
    if(updateUserOrder)
    {
        return {"Success": true, "message": "Successfully Updated"}
    }
    return {"Success": false, "message": "Not Updated"}
}

module.exports = { createUser, getUser, User, addNoOfOrders};
