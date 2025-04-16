import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://NhanNguyen:G106qWf2ZfEsh99o@cluster.sg7cl.mongodb.net/gym?retryWrites=true&w=majority&appName=cluster'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
