const Products = require("../Models/Products")
 
 
exports.GetAllProducts = async(req,res)=>{
    try{
        const allProducts = await Products.find({})
        res.send({status:"ok", data:allProducts})
    }
    catch(err){
       console.log(err);
    }
}