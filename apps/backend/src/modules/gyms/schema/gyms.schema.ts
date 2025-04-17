import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';


@Schema({timestamps: true})
export class Gyms {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    rating: number;

    @Prop()
    price: string;

    @Prop()
    description: string;

    @Prop()
    size: string;

    @Prop()
    members: string;

    @Prop()
    established: string;

    @Prop()
    heroImage: string;

    @Prop([String])
    amenities: string[];

    @Prop([String])
    gallery: string[];

    @Prop()
    hours: string;

    @Prop([{day: String, hours: String}])
    businessHours: { day: string; hours: string }[];

    @Prop([{
        time: String,
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    }])
    schedule: any[];

    @Prop([{
        name: String,
        specialty: String,
        bio: String,
        image: String
    }])
    trainers: any[];

    @Prop([{
        name: String,
        price: String,
        period: String,
        description: String
    }])
    membershipPlans: any[];

    @Prop([{
        userName: String,
        userImage: String,
        rating: Number,
        date: String,
        comment: String
    }])
    reviews: any[];
}

export type GymsDocument = Gyms & Document;
export const GymsSchema = SchemaFactory.createForClass(Gyms);
