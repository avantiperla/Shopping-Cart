const Order = require("../Models/Order")
 
exports.OrderProduct= async(req,res)=>{
    try{
        const {cartItemsDetails,totalPriceCount} = req.body
        console.log(cartItemsDetails);
        console.log(totalPriceCount);

        
        let res = await Order.create({items:cartItemsDetails, totalPrice:totalPriceCount})
        console.log(res);

        // const res = new Order({items:cartItemsDetails, totalPrice:totalPriceCount});
        //     await res.save();
 
    }catch(err){
 
    }
}