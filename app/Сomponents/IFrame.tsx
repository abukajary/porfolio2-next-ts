"use client";
import React, { useState } from "react";

interface IFrameProps {
  src: string;
  title: string;
}

const IFrame: React.FC<IFrameProps> = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="w-full h-full">
      {!loaded && <div>Loading...</div>}
      <iframe
        src={src}
        title={title}
        onLoad={handleLoad}
        style={{ display: loaded ? "block" : "none" }}
        className="w-full h-full"
      />
    </div>
  );
};

export default IFrame;
