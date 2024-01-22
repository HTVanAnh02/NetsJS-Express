import { Controller, Injectable } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { Product } from "src/models/product.models";
import { ProductDto } from "src/dto/product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Cat } from "src/dto/cat.schema";
import { Model } from "mongoose";
@Injectable()
export class ProductService{
   constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

   async create(createCatDto: any): Promise<Cat> {
     const createdCat = new this.catModel(createCatDto);
     return createdCat.save();
   }
 
   async findAll(): Promise<Cat[]> {
     return this.catModel.find().exec();
   }
   
   private products:Product[] =[
      {id : 1,categoryId:2,productName:"Kem Chong Nang",price:5000},
      {id : 2,categoryId:2,productName:"Kem Chong Nang",price:5000},
      {id : 1,categoryId:2,productName:"Kem Chong Nang",price:5000},

   ]
getProducts():Product[]{
    return this.products;
 }
 createProduct(productDto:ProductDto):Product{
   const product:Product = {
      id:Math.random(),
      ...productDto
   };
   this.products.push(product);
    return productDto;
 }
 detailProduct(id:number):Product{
    return this.products.find(item => item.id === Number(id));
 }
 updateProduct(productDto:ProductDto,id:number):Product{
   const index = this.products.findIndex(item => item.id === Number(id));
   this.products[index].categoryId = productDto.categoryId;
   this.products[index].productName = productDto.productName;
   this.products[index].price = productDto.price;
    return this.products[index];
 }
 deleteProduct(id: number):boolean{
   const index = this.products.findIndex(item => item.id === Number(id));
   if(index !== -1)
   {
      this.products.splice(index,1);
      return true;
   }
   return false;
 }
};