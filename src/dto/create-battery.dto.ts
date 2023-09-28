import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsDate,
} from 'class-validator';
export class CreateBatteryDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly dealerName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly batteryType: string;

  @IsNumber()
  @IsNotEmpty()
  readonly batterySerialNumber: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly status: string;

  @IsString()
  @IsNotEmpty()
  readonly createdDateTime: string;

  @IsNotEmpty()
  @IsString()
  readonly updatedDateTime: string;
}
