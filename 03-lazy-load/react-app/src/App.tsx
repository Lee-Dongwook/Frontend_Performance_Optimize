import React from "react";
import LazyLoad from "react-lazyload";
import { imageUrls } from "./lib";

function App() {
  return (
    <div>
      <h1>Lazy Load Example</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {imageUrls.map((imageUrl, index) => (
          <LazyLoad>
            <img
              src={imageUrl}
              alt={`이미지 번호 ${index}`}
              style={{
                width: "300px",
                height: "400px",
                margin: "10px",
                border: "1px solid #ddd",
              }}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default App;
