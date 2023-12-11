"use client";
import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';

type Props = {}
type piedata = {
    name: string;
    value: number;
}[];

const Piecharts = (props: Props) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    const data: piedata = [
        { name: 'Revenue Receivables', value: 400 },
        { name: 'Order Growth', value: 300 },
        { name: 'Revenue Growth', value: 300 }
    ];
    const COLORS = ['#B73F4E', '#15679E', '#A9A7A7',];


    return (
        <>{isClient &&

            <PieChart width={200} height={180}>
                <Pie
                    data={data}
                    cx={100}
                    cy={85}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >


                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />


                    ))}

                </Pie>
                <Tooltip />

            </PieChart>
        }
        </>
    )
}

export default Piecharts