import React from 'react';
import {ComposedChart,XAxis,YAxis,Tooltip,Legend,Bar,Line,Area,ResponsiveContainer,CartesianGrid} from 'recharts';
import {barColors,lineColors,areaColors} from '../color/color';
const Graph = ({data,axisX,axisY,isTooltip,isLegend,bars,lines,areas,height=400}) => {
    return (
        <ResponsiveContainer width="80%" height={height}>
        <ComposedChart data={data}  layout={axisY?"vertical":"horizontal"} >
           <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={axisX} type={axisX?"category":"number"} />
            <YAxis  dataKey={axisY}  type={axisY?"category":"number"}/>
            {isTooltip?<Tooltip />:""}
            {isLegend?<Legend />:""}
            {bars && bars.map((key,index)=> <Bar dataKey={key} key={`bar_${index}`} fill={barColors[index]} />)}
            {lines && lines.map((key,index)=> <Line type="monotone" dataKey={key} key={`line_${index}`} stroke={lineColors[index]} />)}
            {areas && areaColors() }
            {areas && areas.map((key,index)=> <Area dataKey={key} key={`area_${index}`} fill={`url(#Gradient_${index})`} fillOpacity={1} stroke={barColors[index]}/>)}
        </ComposedChart>                   
        </ResponsiveContainer>
    );
};

export default Graph;