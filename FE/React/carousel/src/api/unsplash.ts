/// import axios from "axios";

export type UnsplashImage = {
  id: string;
  url: string;
  alt: string;
};

export const getUnsplashImages = async (): Promise<UnsplashImage[]> => {
    // Simulate 5-second delay
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // 1) Dummy static images (Unsplash URLs with alt text)
    return [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        alt: "Mountain landscape",
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
        alt: "Beach sunset",
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
        alt: "Forest road",
      },
      {
        id: "4",
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        alt: "City skyline",
      },
      {
        id: "5",
        url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
        alt: "Desert dunes",
      },
    ];

  /*
  2) if using real API to get list
  const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";
  const res = await axios.get(
    `https://api.unsplash.com/photos/random?count=5&client_id=${accessKey}`
  );

  return res.data.map((img: any) => ({
    id: img.id,
    url: img.urls.regular,
    alt: img.alt_description || "Unsplash image",
  }));
  */
};
