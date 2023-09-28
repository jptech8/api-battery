import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateBatteryDto } from 'src/dto/create-battery.dto';
import { UpdateBatteryDto } from 'src/dto/update-battery.dto';
import { BatteryService } from 'src/service/battery/battery.service';

@Controller('battery')
export class BatteryController {
  constructor(private readonly batteryService: BatteryService) {}

  @Post()
  async createBattery(
    @Res() response,
    @Body() createBatteryDto: CreateBatteryDto,
  ) {
    try {
      const data = await this.batteryService.createBattery(createBatteryDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Record has been created successfully',
        data,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateBattery(
    @Res() response,
    @Param('id') uid: string,
    @Body() updateBatteryDto: UpdateBatteryDto,
  ) {
    try {
      const data = await this.batteryService.updateBattery(
        uid,
        updateBatteryDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Student has been successfully updated',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getAllBattery(@Res() response) {
    try {
      const data = await this.batteryService.getAllBattery();
      return response.status(HttpStatus.OK).json({
        data: data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getBattery(@Res() response, @Param('id') uid: string) {
    try {
      const data = await this.batteryService.getBattery(uid);
      return response.status(HttpStatus.OK).json({
        message: 'Found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteBattery(@Res() response, @Param('id') uid: string) {
    try {
      const data = await this.batteryService.deleteBattery(uid);
      return response.status(HttpStatus.OK).json({
        message: 'Deleted successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
