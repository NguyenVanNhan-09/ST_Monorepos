import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Gyms, GymsDocument} from "./schema/gyms.schema";
import {Model} from "mongoose";

@Injectable()
export class GymsService {
    constructor(@InjectModel(Gyms.name) private useModel: Model<GymsDocument>) {
    }

    async getAllGyms() {
        const allGyms = await this.useModel.find().exec()
        return allGyms
    }

    async getGymById(id: string | number) {
        if (!id) {
            throw new Error(`Gym id is required`)
            return;
        }

        const gym = await this.useModel.findById(id).exec()
        if (!gym) {
            throw new Error(`Gym with id ${id} not found`)
            return;
        }
        return gym
    }
}
