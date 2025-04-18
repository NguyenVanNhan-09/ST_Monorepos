import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {AuthGyms, AuthGymsDocument} from "./schema/auth-gyms.schema";
import {Model} from "mongoose";

@Injectable()
export class AuthGymsService {
    constructor(@InjectModel(AuthGyms.name) private useAuthGymsModel: Model<AuthGymsDocument>) {
    }

    private generateRandomString(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const prefix = Array.from({length: 3}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');

        const suffix = Math.floor(10000000 + Math.random() * 90000000).toString();

        return `${prefix}-${suffix}`;
    }

    async create(data: AuthGyms) {
        const membershipId = this.generateRandomString();
        const newAuthGym = new this.useAuthGymsModel({
            ...data,
            membershipId,
        })
        return newAuthGym.save();
    }

    async getById(id: string) {
        return this.useAuthGymsModel.findById(id).exec();
    }

    async getAll() {
        return this.useAuthGymsModel.find().exec();
    }
}
