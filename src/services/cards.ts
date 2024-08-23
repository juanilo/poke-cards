const HOST = process.env.NEXT_PUBLIC_API_URL;
const API = '/api/v1/cards';

export const get = async (limit: number, page: number, nameQuery :string, attackQuery: string, typeSelected: string) => {
  const result = await fetch(`${HOST}${API}/?limit=${limit}&page=${page}&name=${nameQuery}&ability=${attackQuery}&type=${typeSelected}`);
  return await result.json();
}

export const getById = async (id: string) => {
  const results = await fetch(`${HOST}${API}/${id}`);
  return await results.json();
}

export const getNames = async () => {
  const results = await fetch(`${HOST}${API}/names`);
  return await results.json();
}

export const attack = async (id: string, attackId: string, targetId: string)  => {
  const results = await fetch(
    `${HOST}${API}/${id}/attack`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        targetId: targetId,
        attackId: attackId,
      }),
    }
  );
  return await results.json();
}

export const updateHP = async (id: string, newHP: number ) => {
  const results = await fetch(`${HOST}${API}/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      hp: newHP,
    })
  });
  return await results.json();
}