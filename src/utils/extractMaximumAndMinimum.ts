import { SeriesData, AxisRange, SeriesDataPoint } from '../components/BarChart/types';
import Axis from '../enums/Axis';

function extractMaximumAndMinimum(data: SeriesData[], axis: Axis): AxisRange {
    let min: number | null = null;
    let max: number | null = null;

    data.forEach((seriesData: SeriesData) => {
        seriesData.points.forEach((point: SeriesDataPoint) => {
            const value = axis === Axis.XAxis ? point.x : point.y;
            if ( value !== null ) {
                if (min === null || value < min) {
                    min = value;
                }
                if (max === null || value > max) {
                    max = value;
                }
            }
        });
    });

    if (min === null || max === null) {
        throw new Error(`Error! Unable to extract maximum and minimum for: ${data}. Please check it has the correct format.`);
    }

    return { min, max };
}

export default extractMaximumAndMinimum;
