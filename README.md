# OrigaAI

# Things Done
1). Created Database with Users and Orders as collection names.
  a). Used connection string of mongodb atlas in the code to connect with mongodb.
  
2). Inserted the given data in collections by using below api.
  a). http://localhost:5000/adduser with request object as 
      {
        "userId": 1,
        "name": "Rahul"
      }
   b). http://localhost:5000/adduser with request object as
       {
          "orderId":10,
          "userId": 1,
          "subtotal":700,
          "date": "13 April 2019"
      }
      
3). Run api http://localhost:5000/userorder (get) which returns total no of orders placed and average bill subtotal,user wise.
  Below is the response
    [
    
    {
        "userId": 1,
        "name": "Rahul",
        "noOfOrders": 5,
        "averageBillValue": 650
    },
    {
        "userId": 2,
        "name": "Ramesh",
        "noOfOrders": 3,
        "averageBillValue": 966
    },
    {
        "userId": 3,
        "name": "Ankita",
        "noOfOrders": 2,
        "averageBillValue": 850
    }
]

4. Run api http://localhost:5000/addordertouser (get) which updates it, with its correct value for all users respectively. 
  Below is the response
    {
        "Success": true,
        "message": "Successfully Updated"
    }
