import React from 'react';
import { ResponsiveContainer } from 'recharts';
import PieRechgart from './PieRechart';
import ComponseRechart from './ComponseRechart';

const ReChart = ({ data, spec, width = "100%", height = 300 }) => {
    const { mark } = spec;
    const { type } = mark;
    
   switch(type){
       case 'arc':
           return <PieRechgart data={data} spec={spec} width={width} height={height}/>
       default: 
           return <ComponseRechart data={data} spec={spec} width={width} height={height}/>
   }
    
};

export default ReChart;