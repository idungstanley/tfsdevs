export interface BootcampResponse {
    status: boolean;
    code: string;
    message: string;
    data: { $values: Bootcamp[]; };
    errorMessage: string;
}

export interface Bootcamp {
    bootcampId: string;
    title: string;
    description: string;
    price: number;
    startDate: string;
    duration: string;
    features: FeaturesProps;
    endDate: string;
    createdOn: string;
    updatedOn: string | null;
    courses: { $values: Course[]; };
}

export interface FeaturesProps {
    $id: string;
    $values: string[];
}

export interface Course {
    id: number;
    title: string;
    description: string;
    instructorId: number;
    instructorName: string | null;
    thumbnailUrl: string;
    durationMinutes: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
    createdDate: string;
    updatedDate: string;
    price: number;
    rating: number;
    enrollmentsCount: number;
}
