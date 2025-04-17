import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthGyms, AuthGymsSchema} from "./schema/auth-gyms.schema";
import {AuthGymsController} from "./auth-gyms.controller";
import {AuthGymsService} from "./auth-gyms.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: AuthGyms.name, schema: AuthGymsSchema}
    ]),
  ],
  controllers: [AuthGymsController],
  providers: [AuthGymsService],
  exports: [AuthGymsService],
})
export class AuthGymsModule {}
