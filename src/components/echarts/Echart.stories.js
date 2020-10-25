import React from 'react';
import data from '../../data/data';
import data1 from '../../data/data1';
import {chartSpec,pieChartspec} from '../../chartSpec/chartSpec';
import Echart from './Echart';

export default {
    title: "components/EChart",
    component: Echart,
}

const Template = (args) => <Echart {
    ...args
}
/>

export const LineChart = Template.bind({});
LineChart.args={
    data,
    spec:chartSpec({type:'line',title:'server flow line chart',fieldX:'date',fieldY:'flow',fieldColor:'server',x: { "timeUnit": "yearmonth", "axis": { "format": "%Y" } },mark:{ "point": {
        "filled": true,
    }}})
}

export const BarChart= Template.bind({});
BarChart.args={
    spec:chartSpec({type:'bar',title:'server flow bar chart',fieldX:'date',fieldY:'flow',fieldColor:'server',x: { "timeUnit": "yearmonth", "axis": { "format": "%Y" } }}),
    data
}

export const AreaChart= Template.bind({});
AreaChart.args={   
    spec:chartSpec({type:'area',title:'server flow area chart',fieldX:'date',fieldY:'flow',fieldColor:'server',x: { "timeUnit": "yearmonth", "axis": { "format": "%Y" } }}),
    data
}
export const PieChart = Template.bind({});
PieChart.args={   
    spec:pieChartspec({type:'arc',title:'pie chart',fieldTheta:'pv',fieldColor:'name'}),
    data:data1
}

export const DonutChart = Template.bind({});
DonutChart.args={   
    spec:pieChartspec({type:'arc',title:'pie chart',fieldTheta:'pv',fieldColor:'name',mark:{ "innerRadius": 80}}),
    data:data1
}