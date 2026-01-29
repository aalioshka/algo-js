import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (query: string) => {
  const res = await axios.get(`${BASE_URL}/character/?name=${query}`);
  return res.data; // Optional: define a type here for response
};
