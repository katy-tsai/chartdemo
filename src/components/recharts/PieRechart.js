import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend ,ResponsiveContainer} from 'recharts';


const PieRechart = ({ data, spec,width,height}) => {
    const { mark, encoding } = spec;
    const { outerRadius,innerRadius, tooltip: isTooltip } = mark;
    const { theta, color } = encoding;
    const {field:namekey} = color;
    const {field:datakey} = theta;
    return (
        <ResponsiveContainer width={width} height={height}>
            <PieChart >
                <Pie
                    data={data}
                    dataKey={datakey}
                    nameKey={namekey}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    fill="#8884d8"
                    paddingAngle={0}
                    label={true}
                >
                    {
                        data.map((entry, index) => <Cell key={`${datakey}_${index}`} fill={`hsl(${index * 45 % 360},60%,50%)`} />)
                    }
                </Pie>
                {isTooltip ? <Tooltip /> : ""}
                <Legend />

            </PieChart>
            </ResponsiveContainer>
    );
};

export default PieRechart;

