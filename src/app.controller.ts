import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import this class from service

// route requests with decorators

@Controller()
// domain is nth yet: /
// filters the path
export class AppController {
  // dependency injection in action
  constructor(private readonly appService: AppService) {
    // variable is of type AppService
  }

  @Get()
  // this method will get executed automatically whenever a get request
  // reaches /
  getHello(): string {
    return this.appService.getHello();
  }
}
