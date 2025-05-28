import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchPeople = async (query: string) => {
  const res = await axios.get(`${BASE_URL}/people/?search=${query}`);
  return res.data; // Optional: define a type here for response
};
