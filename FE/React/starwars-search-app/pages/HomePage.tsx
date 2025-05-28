import React, { useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { usePeopleSearch } from '../hooks/usePeopleSearch';
import { CharacterCard } from '../components/CharacterCard';
import { Container, CircularProgress, Typography, Stack } from '@mui/material';

export const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, isError } = usePeopleSearch(query);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <SearchForm onSearch={setQuery} />

      {isLoading && <CircularProgress />}
      {isError && <Typography color="error">Something went wrong.</Typography>}

      <Stack spacing={2} mt={2}>
        {data?.results?.map((person: any) => (
          <CharacterCard
            key={person.url}
            name={person.name}
            birth_year={person.birth_year}
            gender={person.gender}
          />
        ))}
      </Stack>
    </Container>
  );
};
