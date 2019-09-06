export interface SeriesDataPoint {
    x: number | null;
    y: number | null;
}

export interface NonNullSeriesDataPoint extends SeriesDataPoint {
    x: number;
    y: number;
}

export interface SeriesData {
    seriesName: string;
    points: SeriesDataPoint[];
}
