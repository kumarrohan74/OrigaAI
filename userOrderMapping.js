const User = require('./user');


async function getUserOrder()
{
   return  User.User.aggregate([
        { $lookup:
           {
             from:  "orders",
             localField: "userId",
             foreignField: "userId",
             as: 'Orders'
           }
         },
        ], function(err, res) {
        if (err) throw err;
      });
}

module.exports = {getUserOrder};
