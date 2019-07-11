export interface SeriesDataPoint {
    x: number;
    y: number;
}

export interface SeriesData {
    seriesName: string;
    points: SeriesDataPoint[];
}

export interface Padding {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

export interface AxisRange {
    min: number;
    max: number;
}

export interface AxisProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
    config?: AxisConfig;
}

export interface AxisConfig {
    zeroIntercept: boolean;
    margin: number;
}