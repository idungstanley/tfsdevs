import { CSSProperties, SetStateAction } from "react";

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

export interface Testimonial {
  id: number;
  name: string;
  profilePicture: string;
  stars: number;
  testimonial: string;
  reviewLink: string;
}
