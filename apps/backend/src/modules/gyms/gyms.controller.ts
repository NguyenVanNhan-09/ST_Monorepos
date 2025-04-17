import {Controller, Get, Param} from '@nestjs/common';
import {GymsService} from "./gyms.service";

@Controller('gyms')
export class GymsController {
    constructor(private readonly gymsService: GymsService) {
    }

    @Get()
    getAll() {
        return this.gymsService.getAllGyms()
    }

    @Get(':id')
    getById(@Param('id') id: number | string) {
        return this.gymsService.getGymById(id)
    }
}
