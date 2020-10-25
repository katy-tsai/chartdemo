import React from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, Bar, Line, Area, CartesianGrid,ResponsiveContainer } from 'recharts';
import { barColors, lineColors, areaColors, gradientColors } from '../color/color';

const ComponseRechart = ({data, spec,width,height}) => {
    const { mark, encoding } = spec;
    const { type, tooltip: isTooltip } = mark;
    const { x, y, color } = encoding;

    const axisX = x && x.field;
    const axisY = y && y.field;
    const axisColor = color && color.field;
    const sets = new Set();
    const stacked = color ? { stackId: "stacked " } : '';
    if (color) {
        data = data.reduce((pre, cur) => {
            var occurs = pre.reduce(function (n, item, i) {
                return (item[axisX] === cur[axisX]) ? i : n;
            }, -1);
            if (occurs >= 0) {
                sets.add(cur[axisColor]);
                pre[occurs] = { ...pre[occurs], [cur[axisColor]]: cur[axisY] };
            } else {
                pre.push({ [axisX]: cur[axisX], [cur[axisColor]]: cur[axisY] });
            }

            return pre;
        }, []);

    } else {
        sets.add(axisY);
    }
console.log(JSON.stringify(data))
    const YAxisLabel = { value: axisY, angle: -90, position: 'insideLeft' }
    return (
        <ResponsiveContainer width={width} height={height}>
            <ComposedChart  data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={axisX} type="category" />
                    <YAxis label={YAxisLabel} />
                    {isTooltip ? <Tooltip /> : ""}
                    <Legend />
                    {type === 'line' && [...sets].map((key, index) => <Line type="monotone" dot={false} dataKey={key} key={`line_${index}`} stroke={lineColors[index]} />)}
                    {type === 'area' && gradientColors()}
                    {type === 'area' && [...sets].map((key, index) => <Area dataKey={key} key={`area_${index}`} fill={`url(#Gradient_${index})`} fillOpacity={1} stroke={areaColors[index]} {...stacked} />)}
                    {type === 'bar' && [...sets].map((key, index) => <Bar dataKey={key} key={`bar_${index}`} fill={barColors[index]} {...stacked} />)}
                </ComposedChart>
            </ResponsiveContainer>
    );
};

export default ComponseRechart;