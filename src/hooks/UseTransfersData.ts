import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { TransfersData } from "../interface/TransfersData";

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<TransfersData[]> => {
    const response = axios.get(API_URL + '/transferencia/transferencias');
    return response;    
}

export function useTransfersData(){

    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['transferencia-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }

}