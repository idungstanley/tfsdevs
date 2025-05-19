import requestNew from "@/app/utils/requestNew";
import { useQuery } from "@tanstack/react-query";
import { BootcampResponse } from "./bootcamp.interface";

export const useGetAllBootCamps = ({ pageSize = 10, IncludeCourse = true }: { IncludeCourse?: boolean; pageSize?: number; }) => {
    return useQuery({
        queryKey: ['bootcamps'],
        queryFn: async () => {
            const data = await requestNew<BootcampResponse>({
                url: `/Bootcamp/GetAllBootcampsWithCourses?pageSize=${pageSize}&IncludeCourse=${IncludeCourse}`,
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};

export const useGetBootCampById = ({ id }: {id: string; }) => {
    return useQuery({
        queryKey: ['bootcamps', { id }],
        enabled: !!id,
        queryFn: async () => {
            const data = await requestNew<BootcampResponse>({
                url: `/Bootcamp/GetAllBootcampsWithCourses?Id=${id}`,
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};

export const useVerifyPayment = ({ reference, txtref }: {
    reference: string,
    txtref: string;
}) => {
    return useQuery({
        queryKey: ['verify-payment', { reference, txtref }],
        enabled: !!reference && !!txtref,
        queryFn: async () => {
            const data = await requestNew<BootcampResponse>({
                url: "/Payment/VerifyFunding",
                method: "POST",
                data: {
                    reference,
                    txtref,
                },
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};

