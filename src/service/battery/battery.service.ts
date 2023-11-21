import { Injectable, NotFoundException,Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BatteryInterface } from 'src/interface/battery.interface';
import { CreateBatteryDto } from 'src/dto/create-battery.dto';
import { UpdateBatteryDto } from 'src/dto/update-battery.dto';
import {AppLogger} from 'src/utility/logger/app.logger' 
@Injectable()
export class BatteryService {
  constructor(
    @InjectModel('Battery') private batteryModel: Model<BatteryInterface>,private readonly logger: AppLogger
  ) {}

  async createBattery(
    createBatteryDto: CreateBatteryDto,
  ): Promise<BatteryInterface> {
    const newBattery = await new this.batteryModel(createBatteryDto);
    return newBattery.save();
  }
  async updateBattery(
    uid: string,
    updateBatteryDto: UpdateBatteryDto,
  ): Promise<BatteryInterface> {
    const exist = await this.batteryModel.findByIdAndUpdate(
      uid,
      updateBatteryDto,
      { new: true },
    );
    if (!exist) {
      throw new NotFoundException(` ${uid} not found`);
    }
    return exist;
  }
  async getBattery(uid: string): Promise<BatteryInterface> {
    const exist = await this.batteryModel.findById(uid).exec();
    if (!exist) {
      throw new NotFoundException(`${uid} not found`);
    }
    return exist;
  }
  async searchBattery(dealerName:string) {
    const data = await this.batteryModel.find({ $text: { $search: dealerName }})
    this.logger.debug(data)
    console.log(data)
    if(!data){
      throw new NotFoundException(`No data found`);
    }
    return data;
  }
  
  async getAllBattery(): Promise<BatteryInterface[]> {
    const data = await this.batteryModel.find();
    if (!data || data.length == 0) {
      throw new NotFoundException('Data not found!');
    }
    return data;
  }

  async deleteBattery(uid: string): Promise<BatteryInterface> {
    const data = await this.batteryModel.findByIdAndDelete(uid);
    if (!data) {
      throw new NotFoundException(`${uid} not found`);
    }
    return data;
  }
}
