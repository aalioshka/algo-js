import React from 'react';
import { TextField, Box } from '@mui/material';

type Props = {
  input: string;
  onChange: (newInput: string) => void;
};

export const SearchForm: React.FC<Props> = ({ input, onChange }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Search Rick and Morty characters"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
      />
    </Box>
  );
};
