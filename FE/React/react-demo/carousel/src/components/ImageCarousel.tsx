import { useState } from "react";
import { UnsplashImage } from "../api/unsplash";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={images[index].url}
        alt={images[index].alt}
        style={{ height: "400px" }}
      />
      <div style={{ marginTop: "12px", display: "flex", justifyContent: "center", gap: "12px" }}>
        <button style={{ backgroundColor: "blue", color: "white", cursor: "pointer", fontSize: "14px", padding: "8px 16px" }} onClick={prev}>Prev</button>
        <button style={{ backgroundColor: "blue", color: "white", cursor: "pointer", fontSize: "14px", padding: "8px 16px" }} onClick={next}>Next</button>
      </div>
    </div>
  );
};
