import DataType from "../enums/DataType";

export interface DataPoint {
    tag?: string;
}

export interface NamedDataPoint extends DataPoint {
    x: string;
    y: number;
}

export interface DateIndexedDataPoint extends DataPoint {
    x: Date;
    y: number;
}

export interface NumericDataPoint extends DataPoint {
    x: number | null;
    y: number | null;
}

export interface NonNullNumericDataPoint extends NumericDataPoint {
    x: number;
    y: number;
}

export interface SeriesData {
    seriesName: string;
    type: {
        x: DataType,
        y: DataType,
    };
    points: Array<NamedDataPoint | DateIndexedDataPoint | NumericDataPoint | NonNullNumericDataPoint>;
}
