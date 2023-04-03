import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    let students = [
       
        {
          name: 'Student 5',
         
    
            physics: 83,
            chemistry: 48,
            math: 66
         
        },
        {
          name: 'Student 6',
        
            physics: 55,
            chemistry: 77,
            math: 94
         
        },
        {
          name: 'Student 7',
         
            physics: 28,
            chemistry: 12,
            math: 63
        
        },
        {
          name: 'Student 8',
          
            physics: 84,
            chemistry: 45,
            math: 75
          
        },
        {
          name: 'Student 9',
       
            physics: 62,
            chemistry: 81,
            math: 10
          
        }
    ]

    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={students}
            
            >
                <Line dataKey={"chemistry"}></Line>
                <Line dataKey={"math"}></Line>
                <Line stroke="#8884d8" dataKey={"physics"}></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />

            </LineChart>
        </div>
    );
};

export default Dashboard;