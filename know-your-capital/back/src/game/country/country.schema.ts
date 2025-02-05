import { Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class Country {
  @Prop()
  name: string;

  @Prop()
  capital: string;

  @Prop()
  flag: string;

  @Prop()
  description: string;
}
