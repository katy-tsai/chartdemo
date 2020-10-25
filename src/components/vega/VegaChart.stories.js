import React from 'react';
import data from '../../data/data';
import data1 from '../../data/data1';
import data2 from '../../data/data2';
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