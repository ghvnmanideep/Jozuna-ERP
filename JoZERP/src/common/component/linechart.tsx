import React, { useState } from 'react';
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine
} from 'recharts';
import '../../styles/linechartStyles.css';
import { SemesterLineChartProps, ChartData } from '../interface/linechart';

/* -----------------------------
   Custom Tooltip (Chart Hover)
-------------------------------- */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length && payload[0].value !== null) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        <p className="tooltip-value">
          CGPA: {payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

/* -----------------------------
   Custom X Axis Tick
-------------------------------- */
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const fullText = payload.value;

  const shortText =
    fullText.length > 8 ? fullText.substring(0, 8) + "..." : fullText;

  return (
    <g transform={`translate(${x},${y})`}>
      <title>{fullText}</title>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#666"
        fontSize={13}
        style={{ cursor: "pointer" }}
      >
        {shortText}
      </text>
    </g>
  );
};

export const SemesterLineChart: React.FC<SemesterLineChartProps> = ({ data }) => {
  const ITEMS_PER_VIEW = 6;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(data.length - ITEMS_PER_VIEW, prev + 1)
    );
  };

  const visibleDataSlice = data.slice(
    startIndex,
    startIndex + ITEMS_PER_VIEW
  );

  const formattedData = [
    { name: ' ', value: null as number | null, base: null as number | null },

    ...visibleDataSlice.map((item: ChartData) => {
      const validatedValue = Math.max(0, Math.min(10, item.cgpa));

      return {
        name: item.sem,
        value: validatedValue,
        base: 0.0
      };
    }),

    { name: '  ', value: null as number | null, base: null as number | null }
  ];

  const showArrows = data.length > ITEMS_PER_VIEW;
  const lineColor = "#3CC3DF";

  return (
    <div className="chart-container">

      {showArrows && (
        <button
          className="nav-arrow"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          &#10094;
        </button>
      )}

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={formattedData}
            margin={{ top: 20, right: 20, left: -20, bottom: 10 }}
          >

            {/* Green Gradient */}
            <defs>
              <linearGradient id="colorCGpa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="rgba(62, 185, 127, 0.30)" />
                <stop offset="55%" stopColor="rgba(62, 185, 127, 0.15)" />
                <stop offset="100%" stopColor="rgba(62, 185, 127, 0.05)" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical
              horizontal
              stroke="#e0e0e0"
            />

            <XAxis
              dataKey="name"
              interval={0}
              minTickGap={10}
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisTick />}
              dy={15}
            />

            <YAxis
              domain={[0, 10]}
              ticks={[0, 2, 4, 6, 8, 10]}
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 13 }}
              dx={-10}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
            />

            <ReferenceLine
              y={0.0}
              stroke="#d9d9d9"
              strokeWidth={1.5}
            />

            <Area
              type="linear"
              dataKey="value"
              stroke={lineColor}
              strokeWidth={2}
              fill="url(#colorCGpa)"
              activeDot={{
                r: 6,
                fill: '#fff',
                stroke: lineColor,
                strokeWidth: 2
              }}
              dot={{
                r: 4,
                fill: '#fff',
                stroke: lineColor,
                strokeWidth: 1.5
              }}
              connectNulls={false}
            />

            <Line
              type="linear"
              dataKey="base"
              stroke="#3EB97F"
              strokeWidth={2}
              connectNulls={false}
              activeDot={false}
              dot={{
                r: 4,
                fill: '#fff',
                stroke: '#3EB97F',
                strokeWidth: 1.5
              }}
              isAnimationActive={false}
            />

          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {showArrows && (
        <button
          className="nav-arrow"
          onClick={handleNext}
          disabled={startIndex >= data.length - ITEMS_PER_VIEW}
        >
          &#10095;
        </button>
      )}

    </div>
  );
};


