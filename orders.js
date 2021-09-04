//header files
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
   
    orderId: Number,
    userId: Number,
    subtotal: Number,
    date: String
});

const Order = mongoose.model('Order', orderSchema);

async function createOrder(data)
{
    const order = new Order({
        orderId: data.orderId,
        userId: data.userId,
        subtotal: data.subtotal,
        date: data.date
    });
    const result = await order.save();
    return result;
 
}
async function getOrder()
{
    const order = await Order.find();
}
module.exports = { createOrder, getOrder};
