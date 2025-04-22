export interface IGym {
    _id: string;
    name: string;
    address: string;
    description: string;
    email: string;
    phone: string;
    price: number | string;
    members: string;
    rating: number;
    heroImage: string;
    size: string;
    amenities: string[];
    gallery: string[];
    businessHours: BusinessHour[];
    membershipPlans: MembershipPlan[];
    reviews: Review[];
    schedule: string[];
    trainers: Trainer[];
}

export interface BusinessHour {
    day: string;
    hours: string;
}

export interface Trainer {
    name: string;
    specialty: string;
    bio: string;
    image: string;
}

export interface MembershipPlan {
    name: string;
    price: number;
    period: string;
    description: string;
}

export interface Review {
    userName: string;
    userImage: string;
    rating: number;
    date: string;
    comment: string;
}