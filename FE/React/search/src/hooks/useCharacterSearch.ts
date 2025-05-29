import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/swapi';

export const useCharacterSearch = (query: string) => {
  return useQuery({
    queryKey: ['characters', query],
    queryFn: () => fetchCharacters(query),
    enabled: !!query,
  });
};
