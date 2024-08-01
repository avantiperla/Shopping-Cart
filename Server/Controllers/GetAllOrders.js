const Order = require("../Models/Order")
 
 
exports.GetAllOrders = async(req,res)=>{
    try{
        const allOrders = await Order.find({}).sort({createdAt: -1})

        let latestOrder = allOrders[0]
        res.send({status:"ok", data:latestOrder})
    }
    catch(err){
       console.log(err);
    }
}