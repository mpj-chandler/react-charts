import React, { useState, useEffect, useRef, forwardRef } from 'react';
import AxisTickLabel, { AxisTickLabelProps } from './AxisTickLabel';

const AutoSizeTextBox: React.FC<AxisTickLabelProps> = (props) => {
    const ref = useRef(null);
    const [ scale, setScale ] = useState(0);

    useEffect(() => {
       console.log(`CURRENT REF: ${ref.current}`);
    },
    [ref.current]);

    return (
        <svg ref={ref}>
            <AxisTickLabel ref={ref} {...props}/>;
        </svg>
    );
};

export default AutoSizeTextBox;
