//required files

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//User
const addUser = require('./user');

//Orders
const addOrder = require('./orders');

//User Order Mapping
const UserOrder = require('./userOrderMapping');

//connection to database
mongoose.connect('mongodb+srv://kumar_rohan:kumarrohan74@cluster0.myb1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('Connected'))
    .catch(err => console.error('could not connect'));

const app = express();
const router = express.Router();

app.use(cors());
//assigning port no.
const port = process.env.PORT || 5000;
app.listen(port,console.log(`server started on ${port}`));
app.use(router);

var UserOrderData = [];

/*  ---------------------------------------------------User------------------------------------------*/

router.post('/adduser',(req,res) => {
    if(res.statusCode === 200)
            {
                addUser.createUser(req.body).then(result => res.json(result)).catch(err => res.json(err))
            }
});


/*  ---------------------------------------------------Order------------------------------------------*/

router.post('/addorder',(req,res) => {
    if(res.statusCode === 200)
            {
                addOrder.createOrder(req.body).then(result => res.json(result)).catch(err => res.json(err))
            }
});


/*  ---------------------------------------------------User Order Mapping------------------------------------------*/

router.get('/userorder',(req,res) => {
    var data = [];
    if(res.statusCode === 200)
            {
                UserOrder.getUserOrder(req.body).then(result => {
                    for(element of result)
                    {
                        var total = 0;
                        var NoOfOrders = element.Orders.length;
                        element.Orders.forEach(ele => {
                            total = total + ele.subtotal;
                        });
                        const obj = {
                            "userId": element.userId,
                            "name": element.name,
                            "noOfOrders": NoOfOrders,
                            "averageBillValue": parseInt((total)/(NoOfOrders))
                        }
                        data.push(obj);
                    }
                    UserOrderData = data;
                    res.json(data);
                }).catch(err => res.json(err))
            }
});


router.get('/addordertouser',(req,res) => {
    if(res.statusCode === 200)
            {
                if(UserOrderData.length > 0)
                {
                    UserOrderData.forEach(element => {
                        addUser.addNoOfOrders(element.userId, element.noOfOrders).then(result => res.json(result)).catch(err => res.json(err))
                    })
                }
                else {
                    res.json({"message": "Run http://localhost:5000/userorder Api First"});
                }
            }
});
















