import { IProduct } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';


// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());

export const useProducts = (url: string, config: SWRConfiguration = {} ) => {

    // const { data, error } = useSWR<IProduct[]>(`/api${ url }`, fetcher, config );
    // const { data, error } = useSWR<IProduct[]>(`/api${ url }`, config );
    
    // console.log({data});
    
    return {
        products: [],
        // isLoading: !error && !data,
        // isError: error
    }

}