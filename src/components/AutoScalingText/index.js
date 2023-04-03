// AutoScalingText.js
import React, { useState, useEffect, useRef } from "react";

const calculateFontSize = (
  containerWidth,
  containerHeight,
  textWidth,
  textHeight,
  minFontSize = 36
) => {
  const widthRatio = containerWidth / textWidth;
  const heightRatio = containerHeight / textHeight;
  const minRatio = Math.min(widthRatio, heightRatio);
  const fontSize = Math.max(minRatio, minFontSize);

  return fontSize;
};

const AutoScalingText = ({ content }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(56);

  useEffect(() => {
    const adjustFontSize = () => {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const textWidth = textRef.current.scrollWidth;
      const textHeight = textRef.current.scrollHeight;
      const minFontSize = 56;

      const newFontSize = calculateFontSize(
        containerWidth,
        containerHeight,
        textWidth,
        textHeight,
        minFontSize
      );
      setFontSize(newFontSize);
    };

    adjustFontSize();
  }, [content]);

  return (
    <div className="container" ref={containerRef}>
      <div
        className="text"
        style={{ fontSize: `${fontSize}px`, lineHeight: 1 }}
        ref={textRef}
      >
        {content}
      </div>
    </div>
  );
};

export default AutoScalingText;
