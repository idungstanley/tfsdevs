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