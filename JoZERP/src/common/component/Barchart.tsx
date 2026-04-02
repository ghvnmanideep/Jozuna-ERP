import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import '../../styles/Barchart.css';

import { RechartProps } from "../interface/chartinterface";

const renderCustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  if (!height || height <= 0) return <g />;
  const r = Math.min(width / 2, 20);
  return (
    <path
      d={`M${x},${y + height}
          L${x},${y + r}
          Q${x},${y} ${x + r},${y}
          L${x + width - r},${y}
          Q${x + width},${y} ${x + width},${y + r}
          L${x + width},${y + height} Z`}
      fill={fill}
    />
  );
};

const ARROW_H = 10;

/* X-Axis Label Tooltip */
const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);

  if (!payload || !payload.value) return null;

  const maxChars = 10;

  const displayText =
    payload.value.length > maxChars
      ? payload.value.slice(0, maxChars) + "..."
      : payload.value;

  const handleMouseEnter = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();

      setTooltipPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 6,
      });
    }
  };

  const handleMouseLeave = () => setTooltipPos(null);

  return (
    <>
      <g transform={`translate(${x},${y})`}>
        <text
          ref={textRef}
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize={12}
          fontFamily="Mazzard"
          style={{ cursor: "default" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {displayText}
        </text>
      </g>

      {tooltipPos &&
        ReactDOM.createPortal(
          <div
            className="xaxis-tooltip"
            style={{
              position: "fixed",
              left: tooltipPos.x,
              top: tooltipPos.y,
              transform: "translateX(-50%)",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            {payload.value}
          </div>,
          document.body
        )}
    </>
  );
};

const Barchart: React.FC<RechartProps> = ({
  data, 
  colors = [] , 
  visibleCount = 5 ,
  showTooltip = true ,
  showTooltipDetails = true,
  showCompareBar = false,
  height = 300,
  margin = { top: 20, right: 20, left: 20, bottom: 20 }, 
  barCategoryGap = "30%",
  barGap = 6,
  barSize = 35,
  activeBarColor = "#1BA784",
  defaultBarColor = "#E6F5F3",
  tooltipConfig = []
  


  }) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");

  const currentItem = data[startIndex + (activeIndex ?? 0)];

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // const visibleCount = 5;
  

  const visibleData = data.slice(startIndex, startIndex + visibleCount);

  const showNavigation = data.length > visibleCount;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < data.length;

  
  const hasCompareBar = showCompareBar && data.some(item => item.compareValue !== undefined);

  const navigate = (dir: "left" | "right") => {

    if (dir === "left" && !canGoLeft) return;
    if (dir === "right" && !canGoRight) return;

    setActiveIndex(null);

    if (tooltipRef.current) tooltipRef.current.style.opacity = "0";

    setSlideClass(dir === "right"
      ? "chart-slide-out-left"
      : "chart-slide-out-right"
    );

    setTimeout(() => {

      setStartIndex(i =>
        dir === "right"
          ? i + (visibleCount - 1)
          : i - (visibleCount - 1)
      );

      setSlideClass(dir === "right"
        ? "chart-slide-in-right"
        : "chart-slide-in-left"
      );

      setTimeout(() => {
        setSlideClass("");
      }, 300);

    }, 250);
  };

  const positionTooltip = (barProps: any, index: number) => {
  const el = tooltipRef.current;
  const wrapper = wrapperRef.current;

  if (!el || !wrapper) return;

  const wrapperRect = wrapper.getBoundingClientRect();

  const barGroups = wrapper.querySelectorAll(".recharts-bar");
  const greenBarGroup = hasCompareBar ? barGroups[1] : barGroups[0];
  if (!greenBarGroup) return;

  const barPaths = greenBarGroup.querySelectorAll("path");
  const barEl = barPaths[index] as SVGPathElement;

  if (!barEl) return;

  const barRect = barEl.getBoundingClientRect();

  const barTop = barRect.top - wrapperRect.top;
  const barBottom = barRect.bottom - wrapperRect.top;
  const barCenter = barRect.left + barRect.width / 2 - wrapperRect.left;

  
  el.style.visibility = "hidden";
  el.style.display = "flex";

  const tooltipW = el.offsetWidth;
  const boxH =
    el.querySelector<HTMLElement>(".tooltip-box")!.offsetHeight;

  
  let top = barTop - boxH - ARROW_H ;
  let isBelow = false;

  const header = document.querySelector(".navbar");
  const headerHeight = header ? header.getBoundingClientRect().bottom : 80;

  
  if (barRect.top - boxH - ARROW_H < headerHeight) {
    
    top = barBottom ;
    isBelow = true;
  }

  

  
  el.style.left = `${barCenter - tooltipW / 2}px`;
  el.style.top = `${top}px`;

  // Arrow direction
  const arrow = el.querySelector(".tooltip-arrow") as HTMLElement;

  if (arrow) {
    if (isBelow) {
      arrow.style.borderTop = "none";
      arrow.style.borderBottom = "10px solid #001D22";
      
    } else {
      arrow.style.borderBottom = "none";
      arrow.style.borderTop = "10px solid #001D22";
      
    }
  }


  
if (isBelow) {
  el.classList.add("tooltip-bottom");
} else {
  el.classList.remove("tooltip-bottom");
}

  el.style.visibility = "visible";
  el.style.opacity = "1";
};

  return (
  <div className="chart-center-wrapper">
    <div className="chart-wrapper" ref={wrapperRef}>

      {/* LEFT BUTTON */}
      {showNavigation && (
      <button
        className={`chart-nav-btn chart-nav-btn--left${
          !canGoLeft ? " chart-nav-btn--disabled" : ""
        }`}
        onClick={() => navigate("left")}
        disabled={!canGoLeft}
      >
        <svg width="16" height="16" viewBox="0 0 18 18">
          <path
            d="M11 4L6 9L11 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      )}

      {/* CHART */}
      <div className={`chart-slide-wrapper ${slideClass}`}>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={visibleData}
            barCategoryGap={barCategoryGap}
            barGap={barGap}
            barSize={barSize}
            margin={margin}
            onMouseLeave={() => {
              setActiveIndex(null);
              const el = tooltipRef.current;
              if (el) el.style.opacity = "0";
            }}
          >
            <XAxis
              dataKey="label"
              axisLine={{ stroke: "#E5E7EB", strokeWidth: 2 }}
              tickLine={false}
              tick={CustomTick}
            />

            <Tooltip
              content={() => null}
              cursor={false}
              wrapperStyle={{ display: "none" }}
              isAnimationActive={false}
            />

            {/* BLUE BAR (optional) */}
            {hasCompareBar && (
              <Bar
              dataKey="compareValue"
              shape={renderCustomBar}
              fill="#3B82F6"
              isAnimationActive={false}
              />
              )}



            <Bar
              dataKey="value"
              shape={renderCustomBar}
              isAnimationActive={false}
              onMouseEnter={(_barProps: any, index: number) => {
                // if (!showTooltip) return;
                setActiveIndex(index);
                if (showTooltip) {
                positionTooltip(_barProps, index);
                }
              }}
            >
              {visibleData.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    index === activeIndex
                    ? activeBarColor
                    : colors.length
                    ? colors[index % colors.length]
                    // index === activeIndex
                      // ?activeBarColor 
                    :defaultBarColor
                      
              }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* RIGHT BUTTON */}
      {showNavigation && (
      <button
        className={`chart-nav-btn chart-nav-btn--right${
          !canGoRight ? " chart-nav-btn--disabled" : ""
        }`}
        onClick={() => navigate("right")}
        disabled={!canGoRight}
      >
        <svg width="16" height="16" viewBox="0 0 18 18">
          <path
            d="M7 4L12 9L7 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      )}

      {/* TOOLTIP */}
      {showTooltip && (
  <div
    ref={tooltipRef}
    className="tooltip-outer"
    style={{
      position: "absolute",
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      left: 0,
      top: 0,
      pointerEvents: "none",
    }}
  >
    {showTooltipDetails && currentItem && (
      <div className="tooltip-box">

        {/* FIRST BLOCK */}
        <p className="tooltip-title">
          {tooltipConfig?.[0]?.label}
        </p>

        <h2
          className="tooltip-amount"
          style={{ color: tooltipConfig?.[0]?.color || "#B1FACC" }}
        >
          {currentItem?.[tooltipConfig?.[0]?.key]}
        </h2>

        {/* SECOND FIELD */}
        {/* <p className="tooltip-month">
          {currentItem?.[tooltipConfig?.[1]?.key]}
        </p> */}

        {/* MONTH */}
        {tooltipConfig?.[1]?.key === "month" && (
        <p className="tooltip-month">
          {currentItem?.[tooltipConfig?.[1]?.key]}
        </p>
        )}


        <div className="tooltip-divider"></div>

        {/* THIRD BLOCK */}
        <p className="tooltip-student-label">
          {tooltipConfig?.[2]?.label || tooltipConfig?.[1]?.label}
        </p>

        {/* BOTTOM VALUE */}
        <h3 className="tooltip-students">
          {
            currentItem?.[
              tooltipConfig?.[2]?.key || tooltipConfig?.[1]?.key
            ]
          }
        </h3>

      </div>
    )}

    {/* KEEP ARROW */}
    <div className="tooltip-arrow"></div>
  </div>
)}
      


    </div>
  </div>
);
};

export default Barchart;