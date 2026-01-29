import { useState } from "react";
import { UnsplashImage } from "../api/unsplash";
import { Box, Button } from "@mui/material";

type Props = {
  images: UnsplashImage[];
};

export const ImageCarousel = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === images.length - 1) {
      setIndex(0); // Wrap around to the beginning
    } else {
      setIndex(index + 1); // Move forward
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(images.length - 1); // Wrap to the last image
    } else {
      setIndex(index - 1); // Move backward
    }
  };

  return (
    <Box textAlign="center">
      <Box
        component="img"
        src={images[index].url}
        alt={images[index].alt}
        sx={{
          maxHeight: 400,
          width: "60%",
          borderRadius: 2,
          boxShadow: 3,
          objectFit: "cover",
        }}
      />
      <Box mt={2} display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" onClick={prev}>Prev</Button>
        <Button variant="contained" onClick={next}>Next</Button>
      </Box>
    </Box>
  );
};
