import { AxisConfig, Padding, SeriesData } from '../BarChart/types';

export interface XAxisTickProps {
    data: SeriesData[];
    padding: Padding;
    config?: AxisConfig;
}
