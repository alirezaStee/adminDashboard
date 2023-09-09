import React from "react";

export default function Avatar({width,height,src,alt, onClick}) {
  return (
    <img
      src={src}
      className="rounded-full"
      style={{ height: width, width: height }}
      alt={alt}
      loading="lazy"
      onClick={onClick}
    />
  );
}
