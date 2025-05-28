import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

type Props = {
  onSearch: (query: string) => void;
};

export const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Search Star Wars characters"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
      />
    </Box>
  );
};
