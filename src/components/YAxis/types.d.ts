import { AxisConfig, SeriesData } from "../BarChart/types";

export interface AxisRange {
    min: number;
    max: number;
}

export interface YAxisTickProps {
    data: SeriesData[];
    padding: Padding;
    config?: AxisConfig;
}
