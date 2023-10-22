import { Document } from 'mongoose';
export interface BatteryInterface extends Document {
  readonly dealerName: string;
  readonly batteryType: string;
  readonly batterySerialNumber: number;
  readonly status: string;
  readonly createdDateTime: string;
  readonly updatedDateTime: string;
}
