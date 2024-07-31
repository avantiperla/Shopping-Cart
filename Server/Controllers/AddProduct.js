// importing the schema for this controller
// const CarsSchema = require("../schema/CarsFleetDetailsSchema")
 
const Products = require("../Models/Products")
 
exports.AddProduct = async(req,res)=>{
    console.log("hello");
    try{
        const {name,image,description,price} = req.body;
        console.log("below is the desc line");
        console.log(req.body)
        const response = await Products.create({name,image,description,price});
        console.log(response);
        res.status(200).json({
            success:true,
            data:response,
            message:"Product Entry Created Successfully"
        })
 
    }
    catch(err){
        console.log("something happenedn in AddProduct.js in backend",err);
    }
}