
const chartSpec = ({type,title, fieldX, fieldY, fieldColor, mark, x, y, color, aggregateY }) => {

    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "title":title,
        "mark": {
            type: type, "tooltip": true,
            ...mark
        },  
        "encoding": {
            "x": { "field": fieldX, "type": "temporal", ...x },
            "y": { "aggregate": aggregateY, "field": fieldY, "type": "quantitative", ...y },
            "color": { "field": fieldColor, "type": "nominal", ...color }
        }
    }
};

const chartRepterSpec=({type,title, fieldX, fieldY, mark, x, y, color,repeat})=>{
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "title":title,
        "repeat": {
            "layer": [...repeat]
          },
          "spec": {
            "mark": {
                type: type, "tooltip": true,
                ...mark
            }, 
            "encoding": {
              "x": {
                "bin": true,
                "field": fieldX,
                "type": "quantitative",
                ...x
              },
              "y": {
                "field": {"repeat": "layer"},
                "type": "quantitative",
                "title": fieldY,
                ...y
              },
              "color": {
                "datum": {"repeat": "layer"},
                "type": "nominal",
                ...color
              }
            }
          }
    }
}

const pieChartspec=({title,type,fieldColor,fieldTheta,mark,color,theata,view})=>{

    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "title":title,
        "mark": {
            type:type, tooltip: true,
            ...mark
        },
        "encoding": {
            "theta": {"field": fieldTheta, "stack": true,...theata},
            "color": {"field": fieldColor,...color},
        },
        "view": {"stroke": null,...view},
       
    }
}

export {
    chartSpec,pieChartspec,chartRepterSpec
}