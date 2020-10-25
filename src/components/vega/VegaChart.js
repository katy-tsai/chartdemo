import React from 'react';
import { VegaLite } from 'react-vega';
import { ResponsiveContainer } from 'recharts';
const VegaChart = ({ data, spec, actions, width = "90%", height = 300 }) => {
    return (
        <ResponsiveContainer width={width} height={height}>
            <VegaLite
                spec={{
                    ...spec,
                    data: { values: data },
                }}

                actions={false}
            />
        </ResponsiveContainer>
    );
};

export default VegaChart;