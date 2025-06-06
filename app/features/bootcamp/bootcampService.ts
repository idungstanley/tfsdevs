import requestNew from "@/app/utils/requestNew";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BootcampResponse, GetReferralLinkReq, GetReferralStats, HelpAndSupportProps, UserInfoProps } from "./bootcamp.interface";

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

export const useGetBootCampById = ({ id }: { id: string; }) => {
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

const updateUserInfo = (data: UserInfoProps) => {
    const formData = new FormData();
    const appendIfPresent = (key: string, value: string | File | File[] | null | undefined | string[] | Blob) => {
        if (!value) return;

        if (Array.isArray(value)) {
            // Append each file under the same key
            value.forEach((file) => {
                formData.append(key, file);
            });
        } else {
            formData.append(key, value);
        }
    };

    appendIfPresent('FullName', data.FullName);
    appendIfPresent('Email', data.Email);
    appendIfPresent('PhoneNumber', data.PhoneNumber);
    appendIfPresent('ProfilePicture', data.ProfilePicture);


    const response = requestNew({
        url: 'api/v1/User/userinfo',
        method: 'PUT',
        data: formData
    });
    return response;
};

export const useHelpAndSupportMutation = () => {
    return useMutation({
        mutationFn: helpAndSupport
    });
};

export const useUpdateUserInfoMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUserInfo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-self'] });
        }
    });
};

