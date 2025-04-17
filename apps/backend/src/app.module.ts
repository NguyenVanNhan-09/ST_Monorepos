import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {GymsModule} from './modules/gyms/gyms.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        MongooseModule.forRoot(process.env.MONGOODB_URL!),
        GymsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
