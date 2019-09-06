import { getXAxisRange } from '../../../utils/axisUtils/getXAxisRange/getXAxisRange';
import Placement from '../../../enums/Placement';
import { AxisTickProps } from '../../../__types__/axisTypes';
export function getTickXPosition(props: AxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;
    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = interval / numPoints;
        return ((100 - totalHorizontalPadding) * ((step + label - range.min) / interval)) + props.padding.left;
    }
    return ((100 - totalHorizontalPadding) * (label - range.min) / interval) + props.padding.left;
}
