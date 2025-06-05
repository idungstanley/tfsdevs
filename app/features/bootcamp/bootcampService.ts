import requestNew from "@/app/utils/requestNew";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BootcampResponse, GetReferralLinkReq, GetReferralStats, HelpAndSupportProps } from "./bootcamp.interface";

export const useGetAllBootCamps = ({ pageSize = 10, IncludeCourse = true }: { IncludeCourse?: boolean; pageSize?: number; }) => {
    return useQuery({
        queryKey: ['bootcamps'],
        queryFn: async () => {
            const data = await requestNew<BootcampResponse>({
                url: `api/v1/Bootcamp/GetAllBootcampsWithCourses?pageSize=${pageSize}&IncludeCourse=${IncludeCourse}`,
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
                url: `api/v1/Bootcamp/GetAllBootcampsWithCourses?Id=${id}`,
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};

export const useGetReferralLink = () => {
    return useQuery({
        queryKey: ['referrals'],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<GetReferralLinkReq>({
                url: 'api/Referral/link',
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};

export const useGetReferralStat = () => {
    return useQuery({
        queryKey: ['referral-stat'],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<GetReferralStats>({
                url: 'api/Referral/stats',
                method: "GET",
            });
            return data;
        },
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });
};
export const useGetReferralEarnings = () => {
    return useQuery({
        queryKey: ['referral-earnings'],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<GetReferralStats>({
                url: 'api/Referral/earnings',
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
                url: "api/v1/Payment/VerifyFunding",
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

const helpAndSupport = (data: HelpAndSupportProps) => {
    const response = requestNew({
        url: 'api/HelpSupport',
        method: 'POST',
        data
    });
    return response;
};
  
export const useHelpAndSupportMutation = () => {
    return useMutation({
        mutationFn: helpAndSupport
    });
  };

