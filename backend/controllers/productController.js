const ProductModel=require("../models/productmodel");

const productSave=async(req, res)=>{
 const {name, description, category, price, image}= req.body; 
 const Product= await ProductModel.create({
    name:name,
    description:description, 
    category: category,
    price:price, 
    image: image
 })
 res.send(Product);
}

const showProduct=async(req, res)=>{

   const data= await ProductModel.find();
    res.send(data);
}

const productDetail=async(req, res)=>{
    const Data= await ProductModel.findById(req.body.id) ;   
    res.send(Data);
}








module.exports={
    productSave,
    showProduct,
    productDetail
    
    
}