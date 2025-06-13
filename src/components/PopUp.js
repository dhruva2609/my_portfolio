// PopUp.js
import React, { useState } from "react";

const PopUp = ({ children, scale = 1.05, shadow = "0 8px 32px rgba(44,62,80,0.18), 0 16px 56px rgba(44,62,80,0.12)", style = {}, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
        className={className}
        style={{
            background: "transparent", // Make sure this is set or not set at all
            transition: "transform 0.18s, box-shadow 0.18s",
            transform: hovered ? `scale(${scale})` : "scale(1)",
            boxShadow: hovered ? shadow : undefined,
            zIndex: hovered ? 2 : 1,
            ...style,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        {children}
    </div>
  );
};

export default PopUp;
