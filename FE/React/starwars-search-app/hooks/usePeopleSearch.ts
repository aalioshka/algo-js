// src/hooks/usePeopleSearch.ts
import { useQuery } from '@tanstack/react-query';
import { fetchPeople } from '../src/api/swapi';

export const usePeopleSearch = (query: string) => {
  return useQuery(['people', query], () => fetchPeople(query), {
    enabled: !!query,
  });
};
