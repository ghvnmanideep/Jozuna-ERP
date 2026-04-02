import React from "react";
import { Props } from "../interface/Circularchartprops";


const GREEN = "#3EB97F";
const RED = "#E54240";
const TEXT = "#202020";

const CircularChart: React.FC<Props> = ({
  percentage,
  trigerredFrom=true,
  size = 220,
  strokeWidth = 22,
  label,
  minColour = RED,
  maxColour = GREEN
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
const adjustedPercentage = percentage - 12; 
  const dashOffset =
  circumference - (adjustedPercentage / 100) * circumference;
    // circumference - (percentage / 100) * circumference;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        fontFamily: "Mazzard",
      }}
    >
      <svg
        width={size}
        height={size}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Base RED circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={minColour??RED}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Green progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={maxColour??GREEN}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="butt"
        />
      </svg>

      {/* Center Text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: TEXT,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          {trigerredFrom ? `${percentage}%` : percentage}
        </div>

        <div
          style={{
            fontSize: 12,
            fontWeight: 400,
          }}
        >
        {label}
        </div>
      </div>
    </div>
  );
};

export default CircularChart;