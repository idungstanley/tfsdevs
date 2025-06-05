export interface BootcampResponse {
    status: boolean;
    code: string;
    message: string;
    data: { $values: Bootcamp[]; };
    errorMessage: string;
}

export interface GetSelfProps {
    $id: string;
    id: string;
    userName: string;
    email: string;
    phoneNumber: string | null;
    roleId: string;
    isActive: boolean;
    profilePictureUrl: string | null;
    createdOn: string; // ISO date string
    referralCode: string;
    fullName: string | null;
    totalEarnings: number;
}
  
export interface GetSelfResponse {
    status: boolean;
    code: string;
    message: string;
    data: GetSelfProps;
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

export interface GetReferralLinkReq {
    $id: string;
    errors: {
        $id: string;
        $values: string[]; // Could be more specifically typed if you know the structure of errors
    };
    status: boolean;
    code: string;
    message: string;
    data: {
        $id: string;
        referralLink: string;
        shareMessage: string;
    };
    errorMessage: string;
}
  
export interface GetReferralStats {
    $id: string;
    errors: {
        $id: string;
        $values: string[]; // Adjust if the error structure is known
    };
    status: boolean;
    code: string;
    message: string;
    data: {
        $id: string;
        totalReferrals: number;
        totalEarnings: number;
        referrals: {
            $id: string;
            $values: Referral[]; // Assuming an array of Referral objects
        };
    };
    errorMessage: string;
}

export interface Referral {
   value: string
}
  
export interface HelpAndSupportProps {
    subject: string;
    message: string;
    userEmail?: string;
    userName?: string;
    priority?: number; // e.g., 1 for High, 2 for Medium, etc.
  }