import { Timezones } from "country-state-city/lib/interface";
import { CSSProperties, ReactElement, ReactNode, SetStateAction } from "react";
import { IconType } from "react-icons/lib";

export type ErrorResponse = {
    data: {
        code: number;
        message: string;
    };
    status: number;
    statusText: string;
};
export interface ISuccessRequest {
    message: string;
}
export interface HamburgerProps {
    isToggle: boolean;
    color?: string;
    size?: number;
    width?: number;
    height?: number;
    toggleFn: React.Dispatch<SetStateAction<boolean>>;
    classname?: string;
}

export interface ButtonProps {
    buttonStyle?: string;
    onClick?: () => void;
    loading?: boolean;
    label?: string | null;
    icon?: string | React.ReactNode;
    width?: string | number;
    height?: string;
    padding?: string;
    disabled?: boolean;
    iconPosition?: string;
    ringOnFocus?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    loaderColor?: string;
    value?: string | number | readonly string[] | undefined;
    bgColor?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    labelSize?: string;
    customClasses?: string;
    disableClasses?: string;
    style?: CSSProperties;
    labelClasses?: string;
}

export interface InfoCardProps {
    number: string;
    title?: string;
    description?: string;
    buttonText: string;
}

export interface Course {
    title: string;
    description: string;
    features: string[];
}

export interface CourseProjectsProps {
    title: string;
    description: string;
    link: string;
}

export interface contactInfoProp {
    icon: IconType;
    message: string;
    link: string;
    value: string;
}
export interface Testimonial {
    id: number;
    name: string;
    profilePicture: string;
    stars: number;
    testimonial: string;
    title: string;
}

export interface displayItemsProps {
    image: string;
    sloganHeader?: string;
    sloganText?: string;
}

export interface TextWithLinksProps {
    linkRoute?: string;
    textColor?: string;
    linkLabel: string;
    text?: string;
    textPosition?: string;
    handleClick?: () => void;
}

export interface InputDataTypes {
    label?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    hint?: string;
    name: string;
    cornerHint?: string;
    trailingIconClasses?: string;
    type?: string;
    autoComplete?: string;
    value?: string | number;
    leadingIcon?: string | ReactElement;
    trailingIcon?: string | ReactElement;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    keyDownFunc?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    trailingClick?: () => void;
    bgColor?: string;
    borderRadius?: string;
    height?: string;
    isBorder?: boolean;
    classes?: string;
    styles?: {
        color: string;
        fontSize?: string;
        fontWeight?: string;
        lineHeight?: string;
    };
    labelClasses?: string;
    width?: string;
    valueAsNumber?: boolean;
    isError?: boolean;
    errorMessage?: string;
    handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectValue?: string;
}

export type LoginProps = {
    email: string;
    password: string;
};

export type UserRole = "user" | "admin";
export type UserGender = "Male" | "Female" | "Others";

export type SignupProps = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    countryOfResidence?: string;
    stateOfResidence?: string;
    phoneNumber: string;
    userName?: string;
    confirmPassword?: string;
    role?: UserRole;
    referrerCode?: string;
    signUpDate?: string;
    gender?: UserGender;
    startDate?: string;
};

export interface LearningCardProps {
    thumbnailUrl: string;
    title: string;
    tags?: string[];
    description?: string;
}

// types/index.interface.ts
export interface CourseCardProps {
    label: string;
    index?: number;
    bootcampId?: string;
    route?: string;
    current?: number;
    description?: string;
    handleSlideClick?: (index: number) => void;
    storage?: string; // Mock "storage" field like in the image (e.g., "100GB")
    price?: number; // Mock price field (e.g., "1 month, then $1.7/month")
    features?: string[]; // Mock features (e.g., "100 GB storage", "Option to add members")
}

export interface CardProps {
    title: string;
    description: string;
    price: number;
    src?: string;

}

export interface CarouselProps {
    cards?: BootcampCardProps[];
    intSec?: number;
    primaryColor?: string;
}

export interface BootcampCardProps {
    title: string;
    description: string;
    price?: number;
    link?: string;
    src?: string;
    bootcampId?: string;
}

export interface CourseCardProp {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    instructor: string;
    rating: number;
    reviewCount: number;
    price: {
        original: number;
        discounted?: number;
    };
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    isAvailable: boolean;
    badges?: string[];
    lastUpdated: string;
}

export interface Event {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    date: string;
    time: string;
    location: {
        type: 'online' | 'offline';
        platform?: string;
        address?: string;
        link?: string;
    };
    image: string;
    speaker: {
        name: string;
        role: string;
        company: string;
        image: string;
    };
    topics: string[];
    price: number;
    capacity: number;
    registeredCount: number;
}

export interface CommandProps {
    commandVisible: boolean;
    headerText?: string;
    maxHeight?: string;
    border_color?: string;
    onCloseCommandModal: () => void;
    children?: ReactNode;
    title?: string;
    showCloseIcon?: boolean;
    styling?: string;
    showBottomContent?: boolean;
    bottomContent?: ReactNode;
    position?: string;
    bg_color?: string;
    showHeaderBorder?: boolean;
    modalDefaultSize?: number;
    animation?: string;
    setPopup: React.Dispatch<React.SetStateAction<boolean>>;
    header?: string;
    classes?: string;
    padding?: string;
    bottomHeight?: string;
    bottomMargin?: string;
}


export interface CountryProps {
    currency: string;
    flag: string;
    isoCode: string;
    latitude: string;
    longitude: string;
    name: string;
    phonecode: string;
    timezones: Timezones[];
  }

export interface StateProps {
    countryCode: string; // Example: "AF"
    isoCode: string; // Example: "BDS"
    latitude: string; // Example: "36.73477250"
    longitude: string; // Example: "70.81199530"
    name: string; // Example: "Badakhshan"
  }