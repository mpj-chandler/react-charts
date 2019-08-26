import { AxisConfig, AxisRange, SeriesData, SeriesDataPoint } from '../../../components/BarChart/types';
import Placement from '../../../enums/Placement';
import { applyAxisConfig } from '../applyAxisConfig/applyAxisConfig';
import { applyBucketPlacement } from '../applyBucketPlacement/applyBucketPlacement';
import extractMaximumAndMinimum from '../extractMaximumAndMinimum/extractMaximumAndMinimum';
import Axis from '../../../enums/Axis';


export function getXAxisRange(data: SeriesData[], config?: AxisConfig) {
    let range: AxisRange = extractMaximumAndMinimum(data, Axis.XAxis);

    if (config) {
        if (config.tickPlacement === Placement.Bucket) {
            range = applyBucketPlacement(range, data[0].points.length);
        }
        range = applyAxisConfig(range, config);
    }

    return range;
}
