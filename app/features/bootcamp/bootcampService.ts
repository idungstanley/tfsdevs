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