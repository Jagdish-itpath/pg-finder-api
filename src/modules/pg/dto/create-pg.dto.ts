import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePgDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  area: string;

  @IsNumber()
  rent: number;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsOptional()
  description?: string;
}
