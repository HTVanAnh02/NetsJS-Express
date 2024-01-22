import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductMoudels } from 'moudules/product/product.modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductMoudels,MongooseModule.forRoot('mongodb://localhost:27017/Product')],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
