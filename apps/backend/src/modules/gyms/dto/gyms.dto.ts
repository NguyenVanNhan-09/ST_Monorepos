export class CreateGymDto {
    name: string;
    address: string;
    phone: string;
    email: string;
    rating: number;
    price: string;
    description: string;
    size: string;
    members: string;
    established: string;
    heroImage: string;
    amenities: string[];
    gallery: string[];
    hours: string;
    businessHours: { day: string; hours: string }[];
    schedule: any[];
    trainers: { name: string; bio: string; imageUrl: string }[];
}