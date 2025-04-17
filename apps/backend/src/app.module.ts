import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {GymsModule} from './modules/gyms/gyms.module';
import {ConfigModule} from "@nestjs/config";
import { AuthGymsService } from './modules/auth-gyms/auth-gyms.service';
import { AuthGymsModule } from './modules/auth-gyms/auth-gyms.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        MongooseModule.forRoot(process.env.MONGOODB_URL!),
        GymsModule,
        AuthGymsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
