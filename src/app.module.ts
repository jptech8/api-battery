import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BatterySchema } from './schema/battery.schema';
import { BatteryService } from './service/battery/battery.service';
import { BatteryController } from './controller/battery/battery.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'batterydatabase',
    }),
    MongooseModule.forFeature([{ name: 'Battery', schema: BatterySchema }]),
  ],
  controllers: [AppController, BatteryController],
  providers: [AppService, BatteryService],
})
export class AppModule {}
