// Interfaces
import {Review} from "@/interfaces/IGym";

export interface Plan {
    price: number;
    rabais?: number;
    description: string;
    endDate: string;
    name: string;
    period: string;
    startDate: string;
    _id?: string | number;
}

export interface GymPayment {
    address: string;
    heroImage: string;
    hours: string;
    name: string;
    rating: number;
    plan?: Plan;
    reviews: Review[];
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
}