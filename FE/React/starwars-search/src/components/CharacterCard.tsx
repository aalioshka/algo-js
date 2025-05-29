import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

type CharacterProps = {
  name: string;
  species: string;
  status: string;
  image: string;
};

export const CharacterCard: React.FC<CharacterProps> = ({ name, species, status, image }) => (
  <Card>
    <CardMedia component="img" height="200" image={image} alt={name} />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2">Species: {species}</Typography>
      <Typography variant="body2">Status: {status}</Typography>
    </CardContent>
  </Card>
);
