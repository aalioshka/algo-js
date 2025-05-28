import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type CharacterProps = {
  name: string;
  birth_year: string;
  gender: string;
};

export const CharacterCard: React.FC<CharacterProps> = ({ name, birth_year, gender }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="div">{name}</Typography>
      <Typography variant="body2">Birth Year: {birth_year}</Typography>
      <Typography variant="body2">Gender: {gender}</Typography>
    </CardContent>
  </Card>
);
