import { CSSProperties, ReactElement, SetStateAction } from "react";
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

export type SignupProps = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    countryOfResidence: string;
    stateOfResidence: string;
    phoneNumber: string;
    confirmPassword?: string;
    referrerCode?: string;
    bootcampID?: number;
    specialRequests?: string;
    assignedInstructor?: string;
    notes?: string;
    signUpDate?: string;
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
    route: string;
    index?: number;
    current?: number;
    handleSlideClick?: (index: number) => void;
    storage?: string; // Mock "storage" field like in the image (e.g., "100GB")
    price?: string; // Mock price field (e.g., "1 month, then $1.7/month")
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
    src?: string
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