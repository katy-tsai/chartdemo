import React from 'react';

export const lineColors = ['#00c853', '#5e35b1', '#e91e63', '#fbc02d', '#2962ff', '#e65100', '#00897b'];

export const barColors = ['#b39ddb', '#80cbc4', '#FFBB28', '#FF8042', '#ff2626', '#fc15dd', '#0088FE'];

export const areaColors = barColors.slice().reverse();

export const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export const gradientColors = () => {
    return areaColors.map((color, index) => {
        return (
            <defs key={`Gradient_${index}`} >
                <linearGradient id={`Gradient_${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
            </defs>
        )
    });
}