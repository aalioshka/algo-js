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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100VH" }}>
      {loading ? <div>Loading images...</div> : <ImageCarousel images={images} />}
    </div>
  );
}
