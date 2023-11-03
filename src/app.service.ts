import { Injectable } from '@nestjs/common';




@Injectable()
export class AppService {

  getPing ():  {
    name:string;
    service:string;
    date:Date;
    
    }{
    return {name:process.env.APP_NAME,service:"ping service",date:new Date()}
  }
}



