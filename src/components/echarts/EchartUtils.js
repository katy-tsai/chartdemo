const getChartOption=({spec,data})=>{
    const { mark, encoding,title } = spec;
    const { type, tooltip: isTooltip } = mark;
    const { x, y, color } = encoding;

    const axisX = x && x.field;
    const axisY = y && y.field;
    const axisColor = color && color.field;
    const sets = new Set();
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
   
    const option = {
        title: {
            text: title,
            textStyle: {
                fontSize: 10,
            }
        },
        tooltip: {
            show:isTooltip,
            trigger: 'axis'
        },
        legend:{
            show:true,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type:'category',
            data:data.reduce((pre,cur)=>{
                pre.push(cur[axisX]);
                return pre;
            },[])
        },
        yAxis: {},
        series: [...sets].map((key,index)=>{
            return {
                name: key ,
                type: type==='area'?'line':type,  
                stack:'stack',             
                data:data.reduce((pre,cur)=>{
                    pre.push(cur[key]);
                    return pre;
                },[]),
                areaStyle: type==='area'?{}:null
            }
        })
    }
    return option;
}

const getPieChartOption = ({spec,data})=>{
    const { mark, encoding,title } = spec;
    const { outerRadius=100,innerRadius=10, tooltip: isTooltip } = mark;
    const { theta, color } = encoding;
    const {field:namekey} = color;
    const {field:valuekey} = theta;
    const option = {
        tooltip: {          
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
        },
        series: [
            {
                name: title,
                type: 'pie',
                radius: [`${innerRadius-10}%`, `${outerRadius-10}%`],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data.reduce((pre,cur)=>{
                    pre.push({name:cur[namekey],value:cur[valuekey]})
                    return pre;
                },[])
            }
        ]
    };
    return option;
}

export{
    getChartOption,
    getPieChartOption
}