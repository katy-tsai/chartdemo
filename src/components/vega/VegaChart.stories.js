import React from 'react';
import data from '../../data/data';
import data1 from '../../data/data1';
import data2 from '../../data/data2';
import data3 from '../../data/data3';
import {chartSpec,pieChartspec,chartRepterSpec} from '../../chartSpec/chartSpec';
import VegaChart from './VegaChart';

export default {
    title: "components/Vega-lite",
    component: VegaChart,
}

const Template = (args) => < VegaChart {
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

export const AreaChart = Template.bind({});
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

export const LineChart2 = Template.bind({});
LineChart2.args={   
    spec:chartRepterSpec({type:'line',title:'repter line chart',fieldX:'date',fieldY:'flow',repeat:['P2P','Vsass','mailing','GOOG','AAPL'],x: { "timeUnit": "yearmonth", "axis": { "format": "%Y" } },mark:{ "point": {
        "filled": true,
    }}}),
    data:data2
}
const toTime = (t) => new Date(`${t}/1`).getTime();



//const sortData= data3.sort((a,b) => toTime(a.month) - toTime(b.month))

export const LineChart3 = Template.bind({});
LineChart3.args={
    data:data3,
    spec:chartSpec({type:'line',fieldX:'month',fieldY:'count',x: { "timeUnit": "month","axis":{"formate":"%b"},scale:{domain:[{year:2020,month:1},{year:2020,month:10}]} },mark:{ "point": {
        "filled": true,
    }}})
}