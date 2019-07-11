import { SeriesData, Padding, AxisConfig } from "../BarChart/types";

export interface XAxisTickProps {
    data: SeriesData[];
    padding: Padding;
    config?: AxisConfig;
}