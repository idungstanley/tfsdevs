import { PaymentStatusType, StatusType } from "../features/bootcamp/bootcamp.interface";

export const cl = (...classes: Array<string | undefined | boolean | null | Record<string, unknown>>): string =>
    classes
        .map((i) =>
            !i ? '' : typeof i === 'string' ? i : typeof i === 'object' && !!Object.values(i)[0] ? Object.keys(i)[0] : ''
        )
        .filter(Boolean)
        .join(' ');


export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN'
    }).format(price);
};

export function getTimeWithPeriod(dateString: string): string {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'

    return `${hours}:${minutes} ${period}`;
}  

export function formatDateTime(isoString: string): { date: string; time: string; } {
    const dateObj = new Date(isoString);

    const date = dateObj.toLocaleDateString('en-NG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const time = dateObj.toLocaleTimeString('en-NG', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return { date, time };
}

export const getStatusColor = (status: StatusType) => {
    switch (status) {
        case 'Registered':
            return 'text-green-500 bg-green-500/10';
        case 'Inprogress':
            return 'text-red-500 bg-red-500/10';
        default:
            return 'text-yellow-500 bg-yellow-500/10';
    }
};

export const getPaymentStatusColor = (status: PaymentStatusType) => {
    switch (status) {
        case 'Completed':
            return 'text-green-500 bg-green-500/10';
        case 'Failed':
            return 'text-red-500 bg-red-500/10';
        case 'Refunded':
            return 'text-blue-500 bg-blue-500/10';
        default:
            return 'text-yellow-500 bg-yellow-500/10';
    }
};