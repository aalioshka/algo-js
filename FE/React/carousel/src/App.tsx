import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUnsplashImages, UnsplashImage } from "./api/unsplash";
import { ImageCarousel } from "./components/ImageCarousel";

export default function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUnsplashImages().then((data) => {
      setImages(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box textAlign="center">
      {loading ? <Typography>Loading images...</Typography> : <ImageCarousel images={images} />}
    </Box>
  );
}
