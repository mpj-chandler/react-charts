import { SeriesData, AxisConfig } from "../BarChart/types";

export interface AxisRange {
    min: number;
    max: number;
}

export interface YAxisTickProps {
    data: SeriesData[];
    padding: number;
    config?: AxisConfig;
}