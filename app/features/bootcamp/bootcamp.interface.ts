export interface BootcampResponse {
    status: boolean;
    code: string;
    message: string;
    data: { $values: Bootcamp[]; };
    errorMessage: string;
}

export interface Bootcamp {
    bootcampId: number;
    title: string;
    description: string;
    price: number;
    startDate: string;
    endDate: string;
    createdOn: string;
    updatedOn: string | null;
    courses: { $values: Course[]; };
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
