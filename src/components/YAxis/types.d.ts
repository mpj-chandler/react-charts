import { SeriesDataPoint } from "../BarChart/types";

export interface AxisRange {
    min: number;
    max: number;
}

export interface YAxisTickProps {
    points: SeriesDataPoint[];
    padding: number;
}