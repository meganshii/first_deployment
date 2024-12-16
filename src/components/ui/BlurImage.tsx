"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image, { ImageProps, StaticImageData } from "next/image";
import fallbackImage from "../../../public/assets/fallbackImage/fallbackimage.png";

const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: Omit<ImageProps, "src"> & { src: string | StaticImageData }) => {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);

  return (
    <Image
      className={cn("transition duration-300", className)}
      src={imageSrc}
      width={width}
      height={height}
      alt={alt || "Fallback image"}
      onError={() => setImageSrc(fallbackImage)} // Set fallback image on error
      {...rest}
    />
  );
};

export default BlurImage;
