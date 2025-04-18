import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {AuthGymsService} from "./auth-gyms.service";
import {AuthGyms} from "./schema/auth-gyms.schema";

@Controller('auth-gyms')
export class AuthGymsController {
    constructor(private readonly authGymService: AuthGymsService) {}

    @Post()
    create(@Body() data:AuthGyms) {
        return this.authGymService.create(data);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.authGymService.getById(id);
    }

    @Get()
    getAll() {
        return this.authGymService.getAll();
    }
}
