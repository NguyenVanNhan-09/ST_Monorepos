export interface PaymentResponse {
    _id: string;
    info: PaymentInfo;
    gym: GymInfo;
    status: string;
    membershipId: string;
}

export interface PaymentInfo {
    address: string;
    cardNumber: string;
    cardholderName: string;
    cvv: string;
    email: string;
    firstName: string;
    lastName: string;
    paymentMethod: string;
    phone: string;
}

export interface GymInfo {
    address: string;
    heroImage: string;
    hours: string;
    name: string;
    rating: number;
    plan: Plan;
    totalPrice: number;
}

export interface Plan {
    _id: string | number;
    name: string;
    price: string | number;
    period: string | number;
    description: string;
    startDate: string;
    endDate: string;
}