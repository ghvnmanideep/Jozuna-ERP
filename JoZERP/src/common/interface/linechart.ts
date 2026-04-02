export interface ChartData {
  sem: string;
  cgpa: number;
}

export interface SemesterLineChartProps {
  data: ChartData[];
}


// export const semesterData: ChartData[] = [
//   { name: "Semester I", value: 3.45 },
//   { name: "Semester II", value: 3.72 },
//   { name: "Semester III", value: 3.61 },
//   { name: "Semester IV", value: 3.76 },
//   { name: "Semester V", value: 3.75 },
//   { name: "Semester VI", value: 3.82 },
//   { name: "Semester VII", value: 3.88 },
//   { name: "Semester VIII", value: 3.91 }
// ];