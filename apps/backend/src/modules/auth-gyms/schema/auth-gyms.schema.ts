import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';

@Schema({ _id: false })
export class Info {
    @Prop()
    address: string;

    @Prop()
    cardNumber: string;

    @Prop()
    cardholderName: string;

    @Prop()
    cvv: string;

    @Prop()
    email: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    paymentMethod: string;

    @Prop()
    phone: string;
}

export const InfoSchema = SchemaFactory.createForClass(Info);

@Schema({ _id: false })
export class Plan {
    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    price: string;

    @Prop()
    period: string;

    @Prop()
    description: string;

    @Prop()
    startDate: string;

    @Prop()
    endDate: string;

    @Prop()
    rabais: number;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);

@Schema({ _id: false })
export class Gym {
    @Prop()
    address: string;

    @Prop()
    heroImage: string;

    @Prop()
    hours: string;

    @Prop()
    name: string;

    @Prop()
    rating: number;

    @Prop({ type: PlanSchema }) // <<== Đây nè
    plan: Plan;

    @Prop()
    totalPrice: number;
}

export const GymSchema = SchemaFactory.createForClass(Gym);

@Schema({ timestamps: true })
export class AuthGyms {
    @Prop({ type: InfoSchema })
    info: Info;

    @Prop({ type: GymSchema })
    gym: Gym;
}

export type AuthGymsDocument = AuthGyms & Document;
export const AuthGymsSchema = SchemaFactory.createForClass(AuthGyms);
