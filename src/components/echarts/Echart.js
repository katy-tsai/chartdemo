import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {getChartOption,getPieChartOption} from './EchartUtils';
const Echart = ({data,spec}) => {
    const {type} = spec.mark;
    const option = (type==='arc')?getPieChartOption({spec,data}):getChartOption({spec,data});
    return (
        <div>
           <ReactEcharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                /> 
        </div>
    );
};

export default Echart;

