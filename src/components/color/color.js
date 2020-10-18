import React from 'react';

export const lineColors = ["#3f51b5", "#f44336", "#00bcd4", "#8bc34a", "#ff9800", "#ffeb3b", "#795548"]

export const barColors = ["#7986cb", "#e57373", "#4dd0e1", "#aed581", "#ffb74d", "#fff176", "#a1887f"]


export const areaColors= ()=>{
    return barColors.map((color,index)=>{
        return (
            <defs key={`Gradient_${index}`} >
                <linearGradient  id={`Gradient_${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
            </defs>
        )
    });
}