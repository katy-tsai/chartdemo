import React from 'react';
import {ComposedChart,XAxis,YAxis,Tooltip,Legend,Bar,Line,Area,ResponsiveContainer,CartesianGrid} from 'recharts';
import {barColors,lineColors,areaColors,gradientColors} from '../color/color';
const Graph = ({data,axisX,axisY,isTooltip,isLegend,isStacked,bars,lines,areas,height=400}) => {
    const barStacked = isStacked?{ stackId:"stacked "}:'';
    return (
        <ResponsiveContainer width="80%" height={height}>
            <ComposedChart data={data}  layout={axisY?"vertical":"horizontal"} >
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={axisX} type={axisX?"category":"number"} />
                <YAxis  dataKey={axisY}  type={axisY?"category":"number"}/>
                {isTooltip?<Tooltip />:""}
                {isLegend?<Legend />:""}
            
                {lines && lines.map((key,index)=> <Line type="monotone" dataKey={key} key={`line_${index}`} stroke={lineColors[index]} />)}
                {areas && gradientColors() }
                {areas && areas.map((key,index)=> <Area dataKey={key} key={`area_${index}`} fill={`url(#Gradient_${index})`} fillOpacity={1} stroke={areaColors[index]}/>)}
                {bars && bars.map((key,index)=> <Bar dataKey={key} key={`bar_${index}`} fill={barColors[index]} {...barStacked}/>)}
            </ComposedChart>                   
        </ResponsiveContainer>
    );
};

export default Graph;