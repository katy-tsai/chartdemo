import React from 'react';
import Graph from './Graph';
import data from '../../data/data1';
export default {
  title: "components/Graph",
  component: Graph,
}

const Template = (args) => < Graph {
  ...args
}
/>

export const BarChart = Template.bind({});
BarChart.args = {
  data,
  axisX: 'name',
  isTooltip: true,
  isLegend: true,
  bars: ['uv', 'pv']
}
export const StackedBarChart = Template.bind({});
StackedBarChart.args = {
  data,
  axisX: 'name',
  isTooltip: true,
  isLegend: true,
  isStacked: true,
  bars: ['uv', 'pv']
}
export const VerticalBarChart = Template.bind({});
VerticalBarChart.args = {
  data,
  axisY: 'name',
  isTooltip: true,
  isLegend: true,
  isStacked: false,
  bars: ['uv', 'pv']
}
export const LineChart = Template.bind({});
LineChart.args = {
  data,
  axisX: 'name',
  isTooltip: true,
  isLegend: true,
  lines: ['uv', 'pv']
}
export const VerticalLineChart = Template.bind({});
VerticalLineChart.args = {
  data,
  axisY: 'name',
  isTooltip: true,
  isLegend: true,
  lines: ['uv', 'pv']
}
export const AreaChart = Template.bind({});
AreaChart.args = {
  data,
  axisX: 'name',
  isTooltip: true,
  isLegend: true,
  areas: ['uv', 'pv']
}
export const VerticalAreaChart = Template.bind({});
VerticalAreaChart.args = {
  data,
  axisY: 'name',
  isTooltip: true,
  isLegend: true,
  areas: ['uv', 'pv']
}

export const ComposedChart = Template.bind({});

ComposedChart.args = {
  data,
  axisX: 'name',
  isTooltip: true,
  isLegend: true,
  areas: ['uv'],
  lines: ['pv'],
  bars: ['amt']
}
