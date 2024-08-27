const HOST = process.env.NEXT_PUBLIC_API_URL;
const API = '/api/v1/cards';

if (!HOST) {
  throw new Error('API_URL is not defined');
}

import { ResultType } from '@/types/types';
import useSWR from'swr';

const authFetcher = (url: string) => fetch(url, {headers:{
   'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
}}).then((res) => res.json());
const bodyFetcher = (body: any) => (url: string) => fetch(url, body).then((res) => res.json());

export const authenticateUser = async (user: string) => {
  const data = await fetch(`${HOST}/login`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user
    })
  });
  const result = await data.json();
  sessionStorage.setItem('token', result?.accessToken || '');
}

export const useGetCards = (limit: number, page: number, nameQuery :string, abilitySelected: string, typeSelected: string) => {
  return useSWR(`${HOST}${API}/?limit=${limit}&page=${page}&name=${nameQuery}&ability=${abilitySelected}&type=${typeSelected}`, authFetcher);
}

export const useGetCardById = (id: string ) => {
  return useSWR(`${HOST}${API}/${id}`, authFetcher);
}

export const useGetNames = () => {
  return useSWR(`${HOST}${API}/names`, authFetcher);
};

export const useAttack = (id: string, attackId: string, targetId: string)  => {
  return useSWR<ResultType>(`${HOST}${API}/${id}/attack`,bodyFetcher(
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
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
      "Content-Type":"application/json",
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    },
    body:JSON.stringify(body)
  });
  return await results.json();
}