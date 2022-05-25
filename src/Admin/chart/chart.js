import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, dataKey, grid}){
    return(
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5CB85C' ></XAxis>
                    <Line type="monotone" dataKey={dataKey} stroke="#5CB85C"></Line>
                    <Tooltip></Tooltip>
                    {grid &&<CartesianGrid stroke="#e0dfdf" strokeDasharray={"5 5"}></CartesianGrid>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}