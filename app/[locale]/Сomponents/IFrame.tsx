"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";

interface IFrameProps {
  src: string;
  title: string;
}

const IFrame: React.FC<IFrameProps> = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleBeforeUnload = () => {};

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="w-full h-full">
      {!loaded && <div>Loading...</div>}
      <div className="relative left-[-50%] top-[-50%] w-[200%] h-[200%] transform scale-[0.5] transform-origin-top-left">
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          onLoad={handleLoad}
          style={{ display: loaded ? "block" : "none" }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default IFrame;
