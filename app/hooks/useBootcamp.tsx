import { bootcampsKeys } from '../constants/bootcamps';
import { useGetAllBootCamps } from '../features/bootcamp/bootcampService';
import { BootcampCardProps } from '../types/index.interface';

const useBootcamp = () => {
  const { data, isLoading } = useGetAllBootCamps({});
  const bootcamps = data?.data?.$values.map((bootcamp) => ({
    title: bootcamp.title,
    description: bootcamp.description,
    price: bootcamp.price,
    link: bootcampsKeys[bootcamp.title as keyof typeof bootcampsKeys] || '/bootcamp',
    bootcampId: bootcamp.bootcampId
  })) as BootcampCardProps[];

  const bootcampWithCourses = data?.data?.$values.map((bootcamp) => ({
    title: bootcamp.title,
    description: bootcamp.description,
    price: bootcamp.price,
    courses: bootcamp.courses.$values.map((course) => ({
      title: course.title,
      description: course.description,
      instructorName: course.instructorName,
      thumbnailUrl: course.thumbnailUrl,
      durationMinutes: course.durationMinutes,
      difficulty: course.difficulty,
      price: course.price,
      rating: course.rating,
      enrollmentsCount: course.enrollmentsCount
    }))
  }));

  return {
    loading: isLoading,
    bootcamps,
    bootcampWithCourses
  };
};

export default useBootcamp;
