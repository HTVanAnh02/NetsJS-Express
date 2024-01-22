import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "src/dto/cat.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductMoudels{};