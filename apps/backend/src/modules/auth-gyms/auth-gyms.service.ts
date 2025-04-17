import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {AuthGyms, AuthGymsDocument} from "./schema/auth-gyms.schema";
import {Model} from "mongoose";

@Injectable()
export class AuthGymsService {
    constructor(@InjectModel(AuthGyms.name) private useAuthGymsModel: Model<AuthGymsDocument>) {
    }

    async create(data: AuthGyms) {
        const newAuthGym = new this.useAuthGymsModel(data);
        return newAuthGym.save();
    }

    async getById(id: string) {
        return this.useAuthGymsModel.findById(id).exec();
    }
}
