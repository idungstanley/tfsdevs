export interface EventReq {
    $id: string;
    errors: {
        $id: string;
        $values: string[];
    };
    status: boolean;
    code: string;
    message: string;
    data: {
        $id: string;
        $values: EventData[];
    };
    errorMessage: string;
}
export interface SingleEventReq {
    $id: string;
    errors: {
        $id: string;
        $values: string[];
    };
    status: boolean;
    code: string;
    message: string;
    data: EventData;
    errorMessage: string;
}

export interface EventRegistrationProps{ 
    eventId?: string; 
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    metaData?: {
        selectedInterest?: string;
        experienceLevel?: string;
        paidProgramInterest?: string;
        socialMediaFollow?: string;
    };
}

export interface EventData {
    $id: string;
    id: string;
    title: string;
    description: string;
    startDate: string; // ISO date string
    endDate: string;   // ISO date string
    location: string;
    maxAttendees: number;
    price: number;
    bulletPoints: string[]
    isOnline: boolean;
    imageUrl: string;
    category: string;
    registeredCount: number;
    isAvailable: boolean;
    isActive: boolean;
}
  