import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/swapi';

export const usePeopleSearch = (query: string) => {
  return useQuery({
    queryKey: ['characters', query],
    queryFn: () => fetchCharacters(query),
    enabled: !!query,
  });
};
