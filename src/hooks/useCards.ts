const HOST = process.env.NEXT_PUBLIC_API_URL;
const API = '/api/v1/cards';

import { ResultType } from '@/types/types';
import useSWR from'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const bodyFetcher = (body: any) => (url: string) => fetch(url, body).then((res) => res.json());

export const useGetCards = (limit: number, page: number, nameQuery :string, abilitySelected: string, typeSelected: string) => {
  return useSWR(`${HOST}${API}/?limit=${limit}&page=${page}&name=${nameQuery}&ability=${abilitySelected}&type=${typeSelected}`,fetcher);
}

export const useGetCardById = (id: string ) => {
  return useSWR(`${HOST}${API}/${id}`, fetcher);
}

export const useGetNames = () => {
  return useSWR(`${HOST}${API}/names`, fetcher);
};

export const useAttack = (id: string, attackId: string, targetId: string)  => {
  return useSWR<ResultType>(`${HOST}${API}/${id}/attack`,bodyFetcher(
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        targetId: targetId,
        attackId: attackId,
      }),
    }),{ shouldRetryOnError: false })
};

export const updateCard = async (id: string, body: any ) => {
  const results = await fetch(`${HOST}${API}/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(body)
  });
  return await results.json();
}