import React from 'react';
import {
  Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { TemperatureRes } from './Charts';

type TemperatureChartProps = {
  tempDataList: TemperatureRes
}

type temperatureData = {
  time: string,
  temperature: number,
  pv: 2400,
  amt: 2400
}

const parseTempData = (dataList: TemperatureRes): temperatureData[] => {
  console.log('parseTempData', dataList);
  if (!dataList) return [];

  return dataList
    .sort((a, b) => a.time - b.time)
    .map((data) => ({
      time: new Date(
        data.time * 1000 + new Date('1900/01/01 00:00:00 GMT+09:00').getMilliseconds(),
      ).toLocaleTimeString(),
      temperature: data.temperature,
      pv: 2400,
      amt: 2400,
    }));
};

const TemperatureChart: React.VFC<TemperatureChartProps> = (
  { tempDataList },
) => (
  <ResponsiveContainer height={240} className="graph">
    <AreaChart
      data={parseTempData(tempDataList)}
      syncId="anyId"
      margin={{
        left: 20,
        right: 20,
      }}
    >
      <defs>
        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#B5B4FF" stopOpacity={0.7} />
          <stop offset="95%" stopColor="#B5B4FF" stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#666666" strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis dataKey="temperature" />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <Area
        type="monotone"
        dataKey="temperature"
        strokeWidth="3px"
        stroke="#918FFF"
        fillOpacity={1}
        fill="url(#colorTemp)"
        animateNewValues
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default TemperatureChart;
