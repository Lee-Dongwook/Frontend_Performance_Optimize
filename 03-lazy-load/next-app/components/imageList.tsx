import Image from "next/image";
import React from "react";
import { imageUrls } from "../lib";

export default function ImageList() {
  return (
    <div>
      <h1>Lazy Load Example</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              margin: "10px",
              border: "1px solid #ddd",
            }}
          >
            <Image
              src={imageUrl}
              alt={`Image ${index}`}
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
