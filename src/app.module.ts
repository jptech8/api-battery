import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BatterySchema } from './schema/battery.schema';
import { BatteryService } from './service/battery/battery.service';
import { BatteryController } from './controller/battery/battery.controller';

import { LoggerMiddleware } from './middleware/logger.middleware';

import { ConfigModule } from '@nestjs/config';
import appconfig from './config/app/app.config';
import dbconfig from './config/app/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${(process.env.NODE_ENV || 'dev').toLowerCase()}.env`,
      isGlobal: true ,
      load: [appconfig,dbconfig]   
}),  
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`, 
    {
      dbName: `${process.env.DB_NAME}`,
    }),
    MongooseModule.forFeature([{ name: 'Battery', schema: BatterySchema }]),
    

  
  ],
  controllers: [AppController, BatteryController],
  providers: [AppService, BatteryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('battery');
  }
}
