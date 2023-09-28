import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Battery {
  @Prop()
  dealerName: string;
  @Prop()
  batteryType: string;
  @Prop()
  batterySerialNumber: number;
  @Prop()
  status: string;
  @Prop()
  createdDateTime: Date;
  @Prop()
  updatedDateTime: Date;
}

export const BatterySchema = SchemaFactory.createForClass(Battery);
