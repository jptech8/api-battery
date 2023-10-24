import { Injectable } from '@nestjs/common';




@Injectable()
export class AppService {

  getHello ():  {
    name:string;
    service:string;
    date:Date;
    
    }{
    return {name:process.env.APP_NAME,service:"ping service",date:new Date()}
  }
}



