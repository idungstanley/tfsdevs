import requestNew from "@/app/utils/requestNew";
import { useQuery } from "@tanstack/react-query";
import { EventReq, SingleEventReq } from "./event.interface";

export const useGetEvents = () => {
    return useQuery({
        queryKey: ['events'],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<EventReq>({
                url: "/Event/GetEvents",
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};
export const useGetSingleEvent = ({ eventId }:{eventId: string}) => {
    return useQuery({
        queryKey: ['events'],
        enabled: !!eventId,
        queryFn: async () => {
            const data = await requestNew<SingleEventReq>({
                url: `/Event/GetEvents${eventId}`,
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};
