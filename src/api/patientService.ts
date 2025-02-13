import {useQuery} from "@tanstack/react-query";
import {Patient} from "@/types/patient.ts";
import axiosInstance from "@/config/axios.ts";

const useGetPatients = () => {
    return useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const response = await axiosInstance.get<Patient[]>(
                '/patients',
                {}
            );
            return response.data;
        }
    });
};

const useGetPatient = (id: string) => {
    return useQuery({
        queryKey: ['patients', id],
        queryFn: async () => {
            const response = await axiosInstance.get<Patient>(
                `/patients/${id}`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        }
    });
};

const PatientService = {
    useGetPatients,
    useGetPatient,
};

export default PatientService;