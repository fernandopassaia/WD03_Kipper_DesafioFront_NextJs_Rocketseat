import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import {  mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  console.log('API_URL Fetcher', API_URL);
  return axios.post(API_URL,{ query })
}

export function useProducts(){
  console.log('API_URL Products', API_URL);
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
      queryFn: () => fetcher(query),
      queryKey: ['products', type, priority]
    })

    console.log('Data', data);
    const products =  data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    console.log('filteredProducts', filteredProducts);
    return {
      data: filteredProducts
    }
}