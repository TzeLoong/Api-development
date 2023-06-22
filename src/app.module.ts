import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
  // add service class into providers
})
export class AppModule {}

// controllers (handle requests, send back responses)
// control how incoming requests are handled
// responsible for accepting incoming requests
// do sth
// then return a response

// providers (service)
// provide certain functionalities
// service reaches out to database to fetch data
