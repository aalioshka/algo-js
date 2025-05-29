import React, { useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { CharacterCard } from '../components/CharacterCard';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { Container, CircularProgress, Typography, Stack } from '@mui/material';

export const HomePage: React.FC = () => {
  const [input, setInput] = useState('');
  const debouncedQuery = useDebouncedValue(input, 500);
  const { data, isLoading, isError } = useCharacterSearch(debouncedQuery);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <SearchForm input={input} onChange={setInput} />

      {isLoading && <CircularProgress />}
      {isError && <Typography color="error">Something went wrong.</Typography>}

      <Stack spacing={2} mt={2}>
        {data?.results?.map((character: any) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
            image={character.image}
          />
        ))}
      </Stack>
    </Container>
  );
};