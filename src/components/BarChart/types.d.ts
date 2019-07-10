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