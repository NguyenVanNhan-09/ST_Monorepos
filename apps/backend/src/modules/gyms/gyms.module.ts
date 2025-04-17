import {Module} from '@nestjs/common';
import {GymsService} from './gyms.service';
import {GymsController} from './gyms.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Gyms, GymsSchema} from "./schema/gyms.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Gyms.name, schema: GymsSchema}
        ]),
    ],
    providers: [GymsService],
    controllers: [GymsController],
    exports: [GymsService]
})
export class GymsModule {
}
