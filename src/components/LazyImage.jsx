import { useState, useEffect } from "react";

const LazyImage = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    import(/* @vite-ignore */ src)
      .then((image) => setImgSrc(image.default))
      .catch((error) => console.error("Image failed to load:", error));
  }, [src]);

  return imgSrc ? (
    <img src={imgSrc} alt={alt} loading="lazy" />
  ) : (
    <div>Loading...</div>
  );
};

export default LazyImage;
