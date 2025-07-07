import requestNew from "@/app/utils/requestNew";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EventRegistrationProps, EventReq, SingleEventReq } from "./event.interface";

export const useGetEvents = () => {
    return useQuery({
        queryKey: ['events'],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<EventReq>({
                url: "api/v1/Event/GetEvents",
                method: "GET",
            });
            return data;
        },
    });
};
export const useGetSingleEvent = ({ eventId }: { eventId: string; }) => {
    return useQuery({
        queryKey: ['single-event'],
        enabled: !!eventId,
        queryFn: async () => {
            const data = await requestNew<SingleEventReq>({
                url: `api/v1/Event/GetEvents${eventId}`,
                method: "GET",
            });
            return data;
        },
    });
};

const eventRegistration = ({ eventId, firstName, lastName, email, phone, metaData }: EventRegistrationProps) => {
    const res = requestNew({
        url: `api/events/${eventId}/EventRegistrations/RegisterForEvent`,
        method: "POST",
        data: {
            firstName,
            lastName,
            email,
            phone,
            metaData: JSON.stringify(metaData)
        }
    });
    return res;
};

export const useEventRegistrationMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: eventRegistration,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["single-event"] });
        }
    });
};