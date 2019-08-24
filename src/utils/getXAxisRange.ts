import { AxisConfig, AxisRange, SeriesData, SeriesDataPoint } from "../components/BarChart/types";
import Placement from "../enums/Placement";
import { applyAxisConfig } from "./applyAxisConfig";
import { applyBucketPlacement } from "./applyBucketPlacement";


export function getXAxisRange(data: SeriesData[], config?: AxisConfig) {
    const xValues: number[] = data[0].points.map((point: SeriesDataPoint) => point.x);
    let range: AxisRange = { min: Math.min(...xValues), max: Math.max(...xValues) };

    if (config) {
        if (config.tickPlacement === Placement.Bucket) {
            range = applyBucketPlacement(range, data[0].points.length);
        }
        range = applyAxisConfig(range, config);
    }

    return range;
}
