import React from "react";
import "../styles/CourseChart.css";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Program {
  name: string;
  value: number;
}

interface Props {
  programs: Program[];
}

const ProgramChart: React.FC<Props> = ({ programs }) => {
  return (
    <div className="dashboard-card chart-card">

      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={programs}>
          
          <XAxis dataKey="name" />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#9EDFD3"
            radius={[50, 50, 0, 0]}
            barSize={40}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default ProgramChart;